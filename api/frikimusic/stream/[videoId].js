import { proxyFrikiMusic } from '../../../lib/frikimusic-proxy.js';

export default function handler(req, res) {
  return proxyFrikiMusic(req, res, 'stream');
}
