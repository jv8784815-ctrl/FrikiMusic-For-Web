import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const allowedPaths = new Set(['search', 'artist', 'stream']);
const apiOrigin = 'https://frikimusicweb67.vercel.app';

export default async function handler(req, res) {
  const method = String(req.method || 'GET').toUpperCase();
  if (!['GET', 'HEAD'].includes(method)) {
    res.setHeader('Allow', 'GET, HEAD');
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }

  const rawParts = req.query.path;
  const parts = Array.isArray(rawParts) ? rawParts.map(String) : String(rawParts || '').split('/').filter(Boolean);
  if (!parts.length || !allowedPaths.has(parts[0]) || (parts[0] !== 'search' && parts.length !== 2) || (parts[0] === 'search' && parts.length !== 1)) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  const base = 'http://64.20.54.50:25625';
  const incoming = new URL(req.url || '/', 'https://frikimusicweb67.vercel.app');
  const target = `${base}/api/frikimusic/${parts.map(encodeURIComponent).join('/')}${incoming.search}`;
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
