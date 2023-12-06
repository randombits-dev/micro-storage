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

    if (request.method !== 'POST') {
      return new Response('Not Found', {
        status: 404
      });
    }

    // const token = request.headers.get('X-Token-Id');
    const userId = request.headers.get('X-User-Id') as `0x${string}`;
    const chainlinkSecret = request.headers.get('X-Chainlink-Secret');

    if (!userId || !chainlinkSecret || chainlinkSecret !== env.CHAINLINK_SECRET) {
      return new Response('Not authorized', {status: 401});
    }

    const body = await request.json() as { id: string, limit: number };

    let userObj: UserObj | undefined = await env.STORAGE_1.get(body.id).then(r2Obj => r2Obj?.json());

    if (body.limit == 0) {
      if (userObj) {
        const allFileIds = userObj.files.map(file => file.id);
        const promises = [env.STORAGE_1.delete(body.id)];
        if (allFileIds.length > 0) {
          promises.push(env.STORAGE_2.delete(allFileIds));
        }
        await Promise.all(promises);
      }
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
  },
};
