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

    if (!token || !userId || !chainlinkSecret || chainlinkSecret !== env.CHAINLINK_SECRET) {
      return new Response('Not authorized', {status: 401});
    }

    switch (request.method) {
      case 'POST':
        return handlePost(request, env, ctx);
      case 'DELETE':
        return handleDelete(userId, env, ctx);
      default:
        return new Response('Not Authorized', {
          status: 401
        });
    }
  },
};

// async function handleGet(request: Request, env: Env, ctx: ExecutionContext) {
//   const userId = new URL(request.url).pathname.substring(1);
//   const userObj: UserObj | undefined = await env.STORAGE_1.get(userId!).then(r2Obj => r2Obj?.json());
//   if (!userObj) {
//     return new Response('Object Not Found', {status: 404});
//   }
//
//   return new Response(userObj.size, {
//     status: 200
//   });
// }

// delete account
async function handleDelete(userId: string, env: Env, ctx: ExecutionContext) {

  if (!userId) {
    return new Response('Invalid Request', {status: 400});
  }

  const userObj: UserObj | undefined = await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
  if (userObj) {
    const allFileIds = userObj.files.map(file => file.id);
    await Promise.all([
      env.STORAGE_1.delete(userId),
      env.STORAGE_2.delete(allFileIds)
    ]);
  }

  return new Response(JSON.stringify({success: true}), {
    status: 200
  });
}

// create account or change limit
async function handlePost(request: Request, env: Env, ctx: ExecutionContext) {
  const body = await request.json() as { id: string, limit: number };

  let userObj: UserObj | undefined = await env.STORAGE_1.get(body.id).then(r2Obj => r2Obj?.json());

  if (userObj && body.limit == 0) {
    const allFileIds = userObj.files.map(file => file.id);
    await Promise.all([
      env.STORAGE_1.delete(body.id),
      env.STORAGE_2.delete(allFileIds)
    ]);
  } else {
    const limit = body.limit * 1024 * 1024;
    if (!userObj) {
      userObj = {files: [], size: 0, limit};
      await env.STORAGE_1.put(body.id, JSON.stringify(userObj));
    } else if (userObj.limit !== limit) {
      if (userObj.limit > limit && userObj.size > limit) {
        return new Response('Over Limit', {status: 400});
      }
      userObj.limit = limit;
      await env.STORAGE_1.put(body.id, JSON.stringify(userObj));
    }
  }

  return new Response(JSON.stringify({success: true}), {
    status: 200
  });
}
