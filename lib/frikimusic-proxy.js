import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const apiOrigin = 'https://frikimusicweb67.vercel.app';
const apiBase = 'http://64.20.54.50:25625';

function sendError(res, status, message) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ error: message }));
}

export async function proxyFrikiMusic(req, res, route) {
  const method = String(req.method || 'GET').toUpperCase();
  if (!['GET', 'HEAD'].includes(method)) {
    res.setHeader('Allow', 'GET, HEAD');
    sendError(res, 405, 'Método no permitido.');
    return;
  }

  const incoming = new URL(req.url || '/', 'https://frikimusicweb67.vercel.app');
  let path = route;
  if (route !== 'search') {
    const prefix = `/api/frikimusic/${route}/`;
    const fromUrl = incoming.pathname.startsWith(prefix) ? incoming.pathname.slice(prefix.length).split('/')[0] : '';
    const fromQuery = route === 'artist' ? req.query.id : req.query.videoId;
    const rawId = fromUrl || String(fromQuery || '');
    try {
      path += `/${decodeURIComponent(rawId)}`;
    } catch {
      sendError(res, 400, 'El identificador tiene un formato inválido.');
      return;
    }
    const id = path.slice(route.length + 1);
    if (!/^[\w-]{1,256}$/.test(id)) {
      sendError(res, 400, 'Falta un identificador válido.');
      return;
    }
  }

  const target = `${apiBase}/api/frikimusic/${path}${incoming.search}`;
  const headers = { Origin: apiOrigin };
  for (const name of ['range', 'if-range', 'accept']) {
    if (req.headers[name]) headers[name] = req.headers[name];
  }
  if (process.env.FRIKIMUSIC_API_KEY) headers['X-Api-Key'] = process.env.FRIKIMUSIC_API_KEY;

  const controller = new AbortController();
  let responseFinished = false;
  res.on('close', () => {
    if (!responseFinished) controller.abort();
  });

  try {
    const upstream = await fetch(target, { method, headers, signal: controller.signal });
    res.statusCode = upstream.status;
    for (const name of ['accept-ranges', 'cache-control', 'content-length', 'content-range', 'content-type', 'etag', 'last-modified']) {
      const value = upstream.headers.get(name);
      if (value) res.setHeader(name, value);
    }
    if (!upstream.body || method === 'HEAD') {
      responseFinished = true;
      res.end();
      return;
    }
    await pipeline(Readable.fromWeb(upstream.body), res);
    responseFinished = true;
  } catch (error) {
    if (res.headersSent) {
      res.destroy();
      return;
    }
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'No se pudo conectar con la API del VPS.', detail: error.message }));
  }
}
