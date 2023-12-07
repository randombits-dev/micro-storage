import {hashMessage, verifyMessage} from 'viem';

export interface Env {
  STORAGE_1: R2Bucket;
  STORAGE_2: R2Bucket;
}

interface UserObj {
  files: { id: string, name: string, size: number, type?: string, date?: number }[];
  size: number;
  limit: number;
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === 'OPTIONS') {
      // Handle CORS preflight requests
      return handleOptions(request);
    }

    const token = request.headers.get('X-Token-Id');
    const userId = request.headers.get('X-User-Id') as `0x${string}`;
    const signature = request.headers.get('X-Signature') as `0x${string}`;

    if (!token || !userId) {
      return new Response('Not authorized', {status: 401, headers});
    }

    const hash = hashMessage(String(token));
    const signatureValid = await verifyMessage({
      address: userId,
      message: 'Sign in with ID: ' + hash,
      signature
    });

    if (!signatureValid) {
      return new Response('Not authorized', {status: 401, headers});
    }

    switch (request.method) {
      case 'PUT':
        return handlePut(request, env, ctx);
      case 'GET':
        return handleGet(request, env, ctx);
      case 'POST':
        return handleDelete(request, env, ctx);
      default:
        return new Response('Not Authorized', {
          status: 401,
          headers
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
  const userPart1 = request.headers.get('X-User-Id')?.toUpperCase();
  const fileName = request.headers.get('X-File-Name');
  let fileId = request.headers.get('X-File-Id');
  let fileType = request.headers.get('X-File-Type');
  const tokenId = request.headers.get('X-Token-Id');

  if (!userPart1 || !fileName || !fileId || !tokenId) {
    return new Response('Not authorized', {status: 401, headers});
  }

  const userId = userPart1 + '_' + tokenId;

  let userObj: UserObj | undefined = await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    return new Response('Object Not Found', {status: 404, headers});
  }

  const fileSize = Math.ceil(Number(request.headers.get('Content-Length')) / 1024);

  let fileEntry;
  fileEntry = userObj.files.find(file => file.id === fileId);
  if (!fileEntry) {
    fileEntry = {id: fileId, name: fileName, size: fileSize, type: fileType, date: Date.now()};
    userObj.files.push(fileEntry);
    userObj.size += fileSize;
  } else {
    userObj.size -= fileEntry.size;
    userObj.size += fileSize;
    fileEntry.name = fileName;
    fileEntry.size = fileSize;
  }

  if (userObj.size > userObj.limit) {
    return new Response('Over Limit', {status: 400, headers});
  }

  await env.STORAGE_1.put(userId, JSON.stringify(userObj));
  await env.STORAGE_2.put(fileId, request.body);

  return new Response(JSON.stringify(fileEntry), {headers});
}

async function handleGet(request: Request, env: Env, ctx: ExecutionContext) {
  const userPart1 = request.headers.get('X-User-Id')?.toUpperCase();
  const fileId = request.headers.get('X-File-Id');
  const tokenId = request.headers.get('X-Token-Id');
  const userId = userPart1 + '_' + tokenId;

  if (fileId) {
    const object = await env.STORAGE_2.get(fileId);
    return new Response(object.body, {headers});
  }

  const userObj = await env.STORAGE_1.get(userId!);
  if (!userObj) {
    return new Response('Object Not Found', {status: 404, headers});
  }
  return new Response(userObj?.body, {headers});
}

async function handleDelete(request: Request, env: Env, ctx: ExecutionContext) {
  const userPart1 = request.headers.get('X-User-Id')?.toUpperCase();
  const tokenId = request.headers.get('X-Token-Id');
  const userId = userPart1 + '_' + tokenId;

  const {ids: fileIds} = await request.json() as any;
  if (!userId || !fileIds || fileIds.length === 0) {
    return new Response('Invalid request', {status: 400, headers});
  }
  const userObj: UserObj | undefined = await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    return new Response('Object Not Found', {status: 404, headers});
  }

  userObj.files = userObj.files.filter(file => {
    if (fileIds.includes(file.id)) {
      userObj.size -= file.size;
      return false;
    }
    return true;
  });
  await env.STORAGE_1.put(userId, JSON.stringify(userObj));
  await env.STORAGE_2.delete(fileIds);

  return new Response(null, {
    status: 200,
    headers
  });
}
