import {hashMessage, verifyMessage} from 'viem';

export interface Env {
  STORAGE_1: R2Bucket;
  STORAGE_2: R2Bucket;
}

interface UserObj {
  files: { id: string, name: string, size: number }[];
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // const url = new URL(request.url);
    // const key = url.pathname.slice(1);

    if (request.method === 'OPTIONS') {
      // Handle CORS preflight requests
      return handleOptions(request);
    }

    const token = request.headers.get('X-Token-Id');
    const userId = request.headers.get('X-User-Id') as `0x${string}`;
    const signature = request.headers.get('X-Signature') as `0x${string}`;

    if (!token || !userId) {
      return new Response('Not authorized', {status: 401});
    }

    const hash = hashMessage(String(token));
    const signatureValid = await verifyMessage({
      address: userId,
      message: 'Sign in with ID: ' + hash,
      signature
    });

    if (!signatureValid) {
      return new Response('Not authorized', {status: 401});
    }

    console.log(request.method);

    switch (request.method) {
      case 'PUT':
        return handlePut(request, env, ctx);
      case 'GET':
        return handleGet(request, env, ctx);
      case 'POST':
        return handleDelete(request, env, ctx);
      default:
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'PUT, GET, DELETE',
          },
        });
    }
  },
};

async function handleOptions(request: Request) {
  if (
      request.headers.get('Origin') !== null &&
      request.headers.get('Access-Control-Request-Method') !== null
      // request.headers.get("Access-Control-Request-Headers") !== null
  ) {

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,DELETE,POST,OPTIONS',
      'Access-Control-Max-Age': '86400',
    };

    // Handle CORS preflight requests.
    return new Response(null, {
      headers: {
        ...corsHeaders,
        'Access-Control-Allow-Headers': request.headers.get(
            'Access-Control-Request-Headers'
        ),
      },
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, PUT, DELETE, OPTIONS',
      },
    });
  }
}

async function handlePut(request: Request, env: Env, ctx: ExecutionContext) {
  const userId = request.headers.get('X-User-Id');
  const fileName = request.headers.get('X-File-Name');
  let fileId = request.headers.get('X-File-Id');

  if (!userId || !fileName) {
    return new Response('Missing X-User-Id or X-File-Name', {status: 400});
  }

  let userObj: UserObj | undefined = await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    userObj = {files: []};
  }
  const fileSize = request.headers.get('Content-Length');
  let fileEntry;
  // generate random key
  if (!fileId) {
    fileId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    fileEntry = {id: fileId, name: fileName, size: Number(fileSize)};
    userObj.files.push(fileEntry);
  } else {
    fileEntry = userObj.files.find(file => file.id === fileId);
    if (!fileEntry) {
      return new Response('File Not Found', {status: 404});
    }
    fileEntry.name = fileName;
    fileEntry.size = Number(fileSize);
  }

  await env.STORAGE_1.put(userId, JSON.stringify(userObj));
  await env.STORAGE_2.put(fileId, request.body);

  return new Response(JSON.stringify(fileEntry), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    }
  });
}

async function handleGet(request: Request, env: Env, ctx: ExecutionContext) {
  const userId = request.headers.get('X-User-Id');
  const fileId = request.headers.get('X-File-Id');

  if (fileId) {
    const object = await env.STORAGE_2.get(fileId);
    if (object === null) {
      return new Response('Object Not Found', {status: 404});
    }
    return new Response(object.body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }
    });
  }

  const userObj = await env.STORAGE_1.get(userId!);
  return new Response(userObj?.body || JSON.stringify({files: []}), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    }
  });
}

async function handleDelete(request: Request, env: Env, ctx: ExecutionContext) {
  const userId = request.headers.get('X-User-Id');
  const {ids: fileIds, all} = await request.json() as any;
  if (!userId || (!fileIds && !all)) {
    return new Response('Invalid request', {status: 400});
  }
  const userObj: UserObj | undefined = await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    return new Response('Object Not Found', {status: 404});
  }

  if (all) {
    // delete everything
    const allFileIds = userObj.files.map(file => file.id);
    await Promise.all([
      env.STORAGE_1.delete(userId),
      env.STORAGE_2.delete(allFileIds)
    ]);
  } else {
    userObj.files = userObj.files.filter(file => !fileIds.includes(file.id));
    await env.STORAGE_1.put(userId, JSON.stringify(userObj));
    await env.STORAGE_2.delete(fileIds);
  }

  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    }
  });
}
