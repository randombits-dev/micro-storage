export interface Env {
	STORAGE_1: R2Bucket;
	STORAGE_2: R2Bucket;
}

interface UserObj {
	files: {id: string, name: string, size: number}[];
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// const url = new URL(request.url);
		// const key = url.pathname.slice(1);

		if (request.method === "OPTIONS") {
			// Handle CORS preflight requests
			return handleOptions(request);
		}

		switch (request.method) {
			case 'PUT':
				return handlePut(request, env, ctx);
			case 'GET':
				return handleGet(request, env, ctx);
			case 'DELETE':
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
		request.headers.get("Origin") !== null &&
		request.headers.get("Access-Control-Request-Method") !== null
		// request.headers.get("Access-Control-Request-Headers") !== null
	) {

		const corsHeaders = {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,OPTIONS",
			"Access-Control-Max-Age": "86400",
		};

		// Handle CORS preflight requests.
		return new Response(null, {
			headers: {
				...corsHeaders,
				"Access-Control-Allow-Headers": request.headers.get(
					"Access-Control-Request-Headers"
				),
			},
		});
	} else {
		// Handle standard OPTIONS request.
		return new Response(null, {
			headers: {
				Allow: "GET, HEAD, POST, OPTIONS",
			},
		});
	}
}

async function handlePut(request: Request, env: Env, ctx: ExecutionContext) {
	const userId = request.headers.get('X-User-Id');
	const fileName = request.headers.get('X-File-Name');

	if (!userId || !fileName) {
		return new Response('Missing X-User-Id or X-File-Name', { status: 400 });
	}

	let userObj: UserObj | undefined =  await env.STORAGE_1.get(userId).then(r2Obj => r2Obj?.json());
	if (!userObj) {
		userObj = {files: []};
	}
	const fileSize = request.headers.get('Content-Length');
	// generate random key
	const fileId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	const newFile = {id: fileId, name: fileName, size: Number(fileSize)};
	userObj.files.push(newFile);

	await env.STORAGE_1.put(userId, JSON.stringify(userObj));
	await env.STORAGE_2.put(fileId, request.body);

	return new Response(JSON.stringify(newFile), {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
		}
	});
}

async function handleGet(request: Request, env: Env, ctx: ExecutionContext) {
	const url = new URL(request.url);
	const key = url.pathname.slice(1);
	const userId = request.headers.get('X-User-Id');

	if (key) {
		const object = await env.STORAGE_2.get(key);
		if (object === null) {
			return new Response('Object Not Found', { status: 404 });
		}
		return new Response(object.body, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
			}
		});
	}

	const userObj = await env.STORAGE_1.get(userId!);
	if (userObj === null) {
		return new Response('Object Not Found', { status: 404 });
	}
	return new Response(userObj.body, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
		}
	});
}

async function handleDelete(request: Request, env: Env, ctx: ExecutionContext) {
	await env.STORAGE_1.delete(key);
	return new Response('Deleted!');
}
