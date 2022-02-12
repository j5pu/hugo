export async function onRequest({ env }) {
  const task = await env.kv.get("deps");
  return new Response(task);
}
