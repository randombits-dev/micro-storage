export interface Env {
  STORAGE_1: R2Bucket;
  STORAGE_2: R2Bucket;
}

interface UserObj {
  files: { id: string, name: string, size: number }[];
  size: number;
  limit: number;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    const token = request.headers.get('X-Token-Id');
    const userId = request.headers.get('X-User-Id') as `0x${string}`;
    const chainlinkSecret = request.headers.get('X-Chainlink-Secret');

    if (!token || !userId || !chainlinkSecret) {
      return new Response('Not authorized', {status: 401});
    }

    switch (request.method) {
      case 'GET':
        return handleGet(request, env, ctx);
      case 'POST':
        return handlePost(request, env, ctx);
      case 'DELETE':
        return handleDelete(request, env, ctx);
      default:
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'DELETE',
          },
        });
    }
  },
};

async function handleGet(request: Request, env: Env, ctx: ExecutionContext) {
  const userId = new URL(request.url).pathname.substring(1);
  const userObj: UserObj | undefined = await env.STORAGE_1.get(userId!).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    return new Response('Object Not Found', {status: 404});
  }

  return new Response(userObj.size, {
    status: 200
  });
}

async function handleDelete(request: Request, env: Env, ctx: ExecutionContext) {
  const userId = request.headers.get('X-User-Id');

  const userObj: UserObj | undefined = await env.STORAGE_1.get(userId!).then(r2Obj => r2Obj?.json());
  if (!userObj) {
    return new Response('Object Not Found', {status: 404});
  }

  const allFileIds = userObj.files.map(file => file.id);
  await Promise.all([
    env.STORAGE_1.delete(userId!),
    env.STORAGE_2.delete(allFileIds)
  ]);

  return new Response(JSON.stringify({success: true}), {
    status: 200
  });
}

async function handlePost(request: Request, env: Env, ctx: ExecutionContext) {
  const body = request.json();

  let userObj: UserObj | undefined = await env.STORAGE_1.get(body.id).then(r2Obj => r2Obj?.json());
  
  if (!userObj) {
    userObj = {files: [], size: 0, limit: body.limit * 1024 * 1024};
    env.STORAGE_1.put(body.id, JSON.stringify(userObj));
  }

  return new Response(null, {
    status: 204
  });
}
