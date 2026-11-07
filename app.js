const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/><path d="M9 21v-6h6v6"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  sparkles: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/><path d="m5 2 .7 1.8L7.5 4.5l-1.8.7L5 7l-.7-1.8-1.8-.7 1.8-.7L5 2Z"/>',
  library: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 10h6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  heart: '<path d="M20.8 8.8c0 5.1-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.8A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.7Z"/>',
  wave: '<path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  headphones: '<path d="M3 13v-1a9 9 0 0 1 18 0v1"/><path d="M5 13h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2ZM19 13h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  chevron: '<path d="m8 10 4 4 4-4"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  play: '<path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8 5h3v14H8zM15 5h3v14h-3z" fill="currentColor" stroke="none"/>',
  next: '<path d="M5 6v12l9-6zM19 6v12" fill="currentColor" stroke="none"/>',
  previous: '<path d="M19 6v12l-9-6zM5 6v12" fill="currentColor" stroke="none"/>',
  shuffle: '<path d="m18 14 3 3-3 3M18 4l3 3-3 3M3 7h2.5a5 5 0 0 1 4.1 2.1l4.8 6.8A5 5 0 0 0 18.5 18H21M3 17h2.5a5 5 0 0 0 4.1-2.1M14.4 9.1A5 5 0 0 1 18.5 7H21"/>',
  repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  queue: '<path d="M4 6h12M4 11h12M4 16h8"/><path d="m17 14 5 3-5 3z" fill="currentColor" stroke="none"/>',
  volume: '<path d="M4 10v4h4l5 4V6l-5 4H4Z"/><path d="M17 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12"/>',
  expand: '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14"/>',
  radio: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10"/>',
  dots: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
};

const icon = (name, cls = '') => `<span class="${cls}" data-icon="${name}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.sparkles}</svg></span>`;

const artists = [
  { id: 'milo', name: 'Milo J', initials: 'MJ', tone: 'plum', listeners: '8.4 M', songs: 'Milagrosa', bio: 'Una voz nueva que transforma cada historia en una canción cercana. Descubre sus temas más escuchados y encuentra tu favorito.' },
  { id: 'rosalia', name: 'ROSALÍA', initials: 'R', tone: 'rose', listeners: '22.1 M', songs: 'DESPECHÁ', bio: 'Pop, flamenco y una visión propia. Un sonido que cambia de forma y siempre deja huella.' },
  { id: 'ado', name: 'Ado', initials: 'A', tone: 'blue', listeners: '11.7 M', songs: 'Show', bio: 'Una energía vocal inconfundible y un universo musical lleno de contrastes.' },
  { id: 'badbunny', name: 'Bad Bunny', initials: 'BB', tone: 'amber', listeners: '54.3 M', songs: 'MONACO', bio: 'Ritmos que cruzan fronteras, entre el reguetón, el trap y nuevas formas de pop latino.' },
  { id: 'morat', name: 'Morat', initials: 'M', tone: 'mint', listeners: '16.2 M', songs: 'No se va', bio: 'Historias para cantar en voz alta, con guitarras, armonías y corazón.' },
  { id: 'nathy', name: 'Nathy Peluso', initials: 'NP', tone: 'violet', listeners: '5.9 M', songs: 'Mafiosa', bio: 'Una artista versátil que se mueve entre el rap, el soul y los ritmos latinos.' },
];

const songs = [
  { id: 'milagrosa', title: 'Milagrosa', artist: 'Milo J', artistId: 'milo', album: '111', duration: 222, tone: 'plum', stamp: '111', plays: '2.4 M' },
  { id: 'despecha', title: 'DESPECHÁ', artist: 'ROSALÍA', artistId: 'rosalia', album: 'MOTOMAMI+', duration: 157, tone: 'rose', stamp: 'MOTO', plays: '18.7 M' },
  { id: 'show', title: 'Show', artist: 'Ado', artistId: 'ado', album: 'Ado Special', duration: 183, tone: 'blue', stamp: 'Ado', plays: '6.8 M' },
  { id: 'monaco', title: 'MONACO', artist: 'Bad Bunny', artistId: 'badbunny', album: 'nadie sabe', duration: 267, tone: 'amber', stamp: 'BB', plays: '31.2 M' },
  { id: 'noseva', title: 'No se va', artist: 'Morat', artistId: 'morat', album: 'Balas Perdidas', duration: 220, tone: 'mint', stamp: 'MORAT', plays: '9.1 M' },
  { id: 'mafiosa', title: 'Mafiosa', artist: 'Nathy Peluso', artistId: 'nathy', album: 'Calambre', duration: 184, tone: 'violet', stamp: 'NATHY', plays: '4.2 M' },
  { id: 'rara-vez', title: 'Rara Vez', artist: 'Milo J', artistId: 'milo', album: '511', duration: 166, tone: 'night', stamp: 'MILO J', plays: '3.3 M' },
  { id: 'new-genesis', title: 'New Genesis', artist: 'Ado', artistId: 'ado', album: 'UTA no Uta', duration: 235, tone: 'berry', stamp: 'UTA', plays: '11.5 M' },
  { id: 'saoko', title: 'SAOKO', artist: 'ROSALÍA', artistId: 'rosalia', album: 'MOTOMAMI', duration: 137, tone: 'silver', stamp: 'SAOKO', plays: '12.8 M' },
  { id: 'besos', title: 'Besos en guerra', artist: 'Morat', artistId: 'morat', album: 'Balas Perdidas', duration: 211, tone: 'peach', stamp: 'MORAT', plays: '5.7 M' },
];

const playlists = [
  { id: 'mix', title: 'Tu mezcla diaria', subtitle: 'Un poco de todo, muy tú', tracks: ['milagrosa', 'despecha', 'show', 'monaco'] },
  { id: 'mood', title: 'Suavecito', subtitle: 'Para bajar el ritmo', tracks: ['noseva', 'rara-vez', 'mafiosa', 'besos'] },
  { id: 'energy', title: 'Sube el volumen', subtitle: 'Dale play a la energía', tracks: ['monaco', 'show', 'despecha', 'new-genesis'] },
  { id: 'late', title: 'Después de medianoche', subtitle: 'Tu lado más nocturno', tracks: ['saoko', 'mafiosa', 'milagrosa', 'besos'] },
];

const state = {
  page: 'home',
  artistId: null,
  search: '',
  searchTab: 'tracks',
  filter: 'Para ti',
  libraryTab: 'Playlists',
  trackId: 'milagrosa',
  playing: false,
  progress: 0,
  liked: new Set(['noseva']),
  followed: new Set(),
  shuffle: false,
  repeat: false,
  queue: [],
  searchSongs: [],
  searchArtists: [],
  searchResultsFor: '',
  artistSongs: [],
  remoteArtist: null,
  artistLoading: false,
  searchLoading: false,
  searchError: '',
  searchRequest: 0,
  searchTimer: null,
  artistRequest: 0,
  toastTimer: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const pageContent = $('#pageContent');
const globalSearch = $('#globalSearch');
const toastNode = $('#toast');
const fullPlayer = $('#fullPlayer');
const audioPlayer = $('#audioPlayer');
const apiBase = String(window.FRIKIMUSIC_API_URL || window.location.origin).replace(/\/+$/, '');
const remoteTracks = new Map();
const remoteArtists = new Map();
const coverTones = ['plum', 'rose', 'blue', 'amber', 'mint', 'violet', 'berry', 'night'];

function durationText(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

function artistById(id) { return remoteArtists.get(id) || artists.find((artist) => artist.id === id) || artists[0]; }
function trackById(id) { return remoteTracks.get(id) || songs.find((song) => song.id === id) || songs[0]; }
function currentTrack() { return trackById(state.trackId); }

function imageUrl(item) {
  const image = item?.thumbnail || item?.thumbnails || item?.avatar || item?.image;
  if (typeof image === 'string') return image;
  if (Array.isArray(image)) return image.at(-1)?.url || image.at(-1)?.src || '';
  return image?.url || image?.src || '';
}

function parseDuration(value) {
  if (Number.isFinite(Number(value)) && Number(value) > 0) return Number(value);
  if (typeof value !== 'string') return 0;
  const parts = value.split(':').map(Number);
  if (!parts.length || parts.some((part) => !Number.isFinite(part))) return 0;
  return parts.reduce((total, part) => total * 60 + part, 0);
}

function normalizeArtist(item, index = 0) {
  const id = String(item?.browseId || item?.id || item?.channelId || item?.artistId || '');
  const name = String(item?.title || item?.name || item?.artist || 'Artista');
  if (!id) return null;
  return {
    id,
    name,
    initials: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase(),
    tone: coverTones[index % coverTones.length],
    thumbnail: imageUrl(item),
    listeners: item?.monthlyListenerCount || item?.subscriberCountText || '—',
    bio: item?.description || `Descubre canciones de ${name} en FrikiMusic.`,
    youtube: true,
  };
}

function normalizeTrack(item, index = 0) {
  const videoId = String(item?.videoId || item?.id || item?.video_id || '');
  if (!/^[\w-]{11}$/.test(videoId)) return null;
  const artistList = Array.isArray(item?.artists) ? item.artists : item?.artist ? [item.artist] : [];
  const leadArtist = artistList[0] || item?.author || {};
  const artistName = String(leadArtist?.name || item?.artistName || item?.author?.name || 'Artista');
  const artistId = String(leadArtist?.browseId || leadArtist?.id || leadArtist?.channelId || item?.artistId || '');
  const albumValue = item?.album?.name || item?.album?.title || item?.album || 'Sencillo';
  return {
    id: videoId,
    videoId,
    title: String(item?.title || item?.name || 'Sin título'),
    artist: artistName,
    artistId,
    album: String(albumValue),
    duration: parseDuration(item?.duration || item?.durationSeconds || item?.lengthSeconds),
    tone: coverTones[index % coverTones.length],
    stamp: artistName.slice(0, 10),
    plays: item?.views || item?.viewsText || '—',
    thumbnail: imageUrl(item),
    youtube: true,
  };
}

function artwork(song, extra = '') {
  if (song.thumbnail) return `<span class="artwork artwork--remote ${extra}" aria-hidden="true"><img class="artwork-image" src="${escapeHtml(song.thumbnail)}" alt="" loading="lazy" /></span>`;
  const stamp = song.stamp || song.title?.slice(0, 5) || 'FM';
  return `<span class="artwork artwork--${song.tone || 'plum'} ${extra}" aria-hidden="true"><span class="art-disc"></span><span class="art-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="art-stamp">${escapeHtml(stamp)}</span><span class="art-subtitle">FrikiMusic sessions</span></span>`;
}

function artistAvatar(artist, extra = '') {
  if (artist.thumbnail) return `<span class="artist-avatar artist-avatar--image ${extra}" aria-hidden="true"><img class="artist-avatar-image" src="${escapeHtml(artist.thumbnail)}" alt="" loading="lazy" /></span>`;
  return `<span class="artist-avatar avatar-tone--${artist.tone || 'plum'} ${extra}" aria-hidden="true"><span>${escapeHtml(artist.initials)}</span></span>`;
}

function trackRow(song, index, extraClass = '') {
  const isCurrent = song.id === state.trackId;
  const liked = state.liked.has(song.id);
  return `<div class="track-row ${isCurrent ? 'is-current' : ''} ${extraClass}" data-track-row="${escapeHtml(song.id)}" data-action="play-track" role="button" tabindex="0" aria-label="Reproducir ${escapeHtml(song.title)} de ${escapeHtml(song.artist)}">
    <div class="track-number">${isCurrent && state.playing ? '<span class="playing-bars"><i></i><i></i><i></i></span>' : `<span>${String(index + 1).padStart(2, '0')}</span>`}<button class="row-play" aria-label="Reproducir">${icon('play')}</button></div>
    <div class="track-main">${artwork(song)}<span class="track-copy"><strong>${escapeHtml(song.title)}</strong><small><button class="text-link" data-action="artist" data-artist="${escapeHtml(song.artistId)}">${escapeHtml(song.artist)}</button></small></span></div>
    <span class="track-album">${escapeHtml(song.album)}</span><span class="track-date">${escapeHtml(song.plays)} reproducciones</span><span class="track-duration">${durationText(song.duration)}</span>
    <button class="track-like ${liked ? 'liked' : ''}" data-action="like-track" data-track="${song.id}" aria-label="${liked ? 'Quitar de favoritos' : 'Añadir a favoritos'}">${icon('heart')}</button>
  </div>`;
}

function sectionHeading(title, subtitle = '', actionLabel = 'Ver todo', action = 'artists') {
  const actionButton = action && actionLabel ? `<button class="section-link" data-action="${action}">${actionLabel}${icon('arrow')}</button>` : '';
  return `<div class="section-heading"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ''}</div>${actionButton}</div>`;
}

function musicCard(song, subtitle = null) {
  return `<article class="music-card"><button class="music-card-art" data-action="play-track" data-track="${escapeHtml(song.id)}" aria-label="Reproducir ${escapeHtml(song.title)}">${artwork(song)}<span class="art-play">${icon('play')}</span></button><h3>${escapeHtml(song.title)}</h3><p>${subtitle || `<button class="text-link" data-action="artist" data-artist="${escapeHtml(song.artistId)}">${escapeHtml(song.artist)}</button>`}</p></article>`;
}

function artistCard(artist) {
  return `<button class="artist-card" data-action="artist" data-artist="${escapeHtml(artist.id)}">${artistAvatar(artist)}<strong>${escapeHtml(artist.name)}</strong><small>Artista</small></button>`;
}

function playlistCard(list) {
  const covers = list.tracks.map((id) => trackById(id));
  return `<button class="playlist-card" data-action="playlist" data-playlist="${list.id}"><span class="playlist-art">${covers.map((song) => artwork(song)).join('')}</span><span class="playlist-copy"><strong>${list.title}</strong><small>${list.subtitle}</small></span></button>`;
}

function renderHome() {
  const quickSongs = [songs[0], songs[1], songs[2], songs[3], songs[4], songs[5]];
  return `<div class="page-eyebrow">TU ESTACIÓN, A TU MANERA</div>
    <section class="hero">
      <div class="hero-copy"><div class="hero-kicker">${icon('sparkles')} TU ESPACIO MUSICAL</div><h1>Encuentra tu<br><span>próxima canción.</span></h1><p class="hero-description">Nuevos sonidos, artistas que te gustan y esos temas que todavía no sabías que necesitabas.</p><div class="hero-actions"><button class="button button-primary" data-action="play-track" data-track="milagrosa">${icon('play')} Empezar a escuchar</button><button class="button button-ghost" data-action="route" data-route="artists">Explorar artistas</button></div></div>
      <div class="hero-visual" aria-hidden="true"><span class="hero-record"></span><div class="hero-note hero-note--top">${artwork(songs[2])}<span class="hero-note-copy"><strong>Un sonido nuevo</strong><small>Recomendado para ti</small></span>${icon('sparkles', 'hero-note-icon')}</div><div class="hero-note hero-note--bottom">${artwork(songs[0])}<span class="hero-note-copy"><strong>Tu mezcla diaria</strong><small>Actualizada para hoy</small></span>${icon('play', 'hero-note-icon')}</div></div>
    </section>
    <div class="filter-row">${['Para ti', 'Nuevos lanzamientos', 'Tu mezcla', 'Relajado', 'Con energía'].map((item) => `<button class="filter-chip ${state.filter === item ? 'active' : ''}" data-action="filter" data-filter="${item}">${item}</button>`).join('')}</div>
    ${sectionHeading('Hola de nuevo', 'Un atajo a lo que te gusta.', 'Ver biblioteca', 'route-library')}
    <div class="quick-grid">${quickSongs.map((song) => `<button class="quick-card" data-action="play-track" data-track="${song.id}">${artwork(song)}<span class="quick-card-copy"><strong>${song.title}</strong><small>${song.artist}</small></span><span class="quick-play">${icon('play')}</span></button>`).join('')}</div>
    ${sectionHeading('Para poner en repeat', 'Selección FrikiMusic de esta semana.', 'Ver canciones', 'route-search')}
    <div class="card-grid">${[songs[0], songs[3], songs[5], songs[7], songs[2]].map((song) => musicCard(song)).join('')}</div>
    ${sectionHeading('Artistas que podrían gustarte', 'Nuevas voces para tu biblioteca.', 'Explorar artistas', 'artists')}
    <div class="artist-row">${artists.map(artistCard).join('')}</div>
    ${sectionHeading('Más escuchadas', 'Lo que está sonando en tu universo.', 'Ver todo', 'route-search')}
    <div class="track-list"><div class="track-head"><span>#</span><span>Título</span><span>Álbum</span><span>Reproducciones</span><span>${icon('clock')}</span><span></span></div>${songs.slice(0, 5).map(trackRow).join('')}</div>`;
}

function renderArtists() {
  return `<div class="page-eyebrow">DESCUBRE TU PRÓXIMA OBSESIÓN</div><div class="library-header"><div><h1 class="page-title">Artistas</h1><p>Voces, historias y sonidos para descubrir.</p></div><button class="button button-ghost" data-action="route" data-route="search">${icon('search')} Buscar artistas</button></div>
    ${sectionHeading('Para ti', 'Artistas que podrían encajar con tu gusto.', '', '')}<div class="artist-row artist-row--large">${artists.map(artistCard).join('')}</div>
    ${sectionHeading('En rotación', 'Los nombres que más aparecen en tu música.', 'Ver canciones', 'route-search')}<div class="card-grid">${[songs[0], songs[1], songs[3], songs[5], songs[4]].map((song) => musicCard(song, `<button class="text-link" data-action="artist" data-artist="${song.artistId}">${song.artist}</button>`)).join('')}</div>
    ${sectionHeading('Artistas destacados', 'Un perfil para cada universo musical.', '', '')}<div class="artist-directory">${artists.map((artist) => `<button class="result-artist" data-action="artist" data-artist="${artist.id}">${artistAvatar(artist)}<span class="result-artist-copy"><strong>${artist.name}</strong><small>Artista · ${artist.listeners} oyentes mensuales</small></span>${icon('arrow')}</button>`).join('')}</div>`;
}

function renderSearch() {
  const query = state.search.trim().toLocaleLowerCase('es');
  const hasRemoteResults = Boolean(apiBase && query.length >= 2 && state.searchResultsFor === query);
  const matchedSongs = hasRemoteResults ? state.searchSongs : query ? songs.filter((song) => `${song.title} ${song.artist} ${song.album}`.toLocaleLowerCase('es').includes(query)) : songs.slice(0, 5);
  const matchedArtists = hasRemoteResults ? state.searchArtists : query ? artists.filter((artist) => artist.name.toLocaleLowerCase('es').includes(query)) : artists.slice(0, 4);
  const matchedAlbums = query ? [...new Map(matchedSongs.map((song) => [song.album, song])).values()] : [songs[0], songs[3], songs[5], songs[8]];
  const waiting = Boolean(apiBase && query.length >= 2 && state.searchResultsFor !== query);
  const tabs = [['tracks', 'Canciones'], ['artists', 'Artistas'], ['albums', 'Álbumes']];
  let primaryResults = '';
  if (state.searchTab === 'tracks') primaryResults = waiting || state.searchLoading ? `<div class="empty-state"><h3>Buscando en YouTube Music…</h3><p>Un momento, estamos trayendo canciones para reproducir.</p></div>` : state.searchError && hasRemoteResults ? emptyState('No se pudo conectar', escapeHtml(state.searchError)) : matchedSongs.length ? `<div class="track-list">${matchedSongs.map(trackRow).join('')}</div>` : emptyState('No encontramos canciones', 'Prueba con otro título o artista.');
  if (state.searchTab === 'artists') primaryResults = waiting || state.searchLoading ? `<div class="empty-state"><h3>Buscando artistas…</h3><p>Estamos cargando coincidencias.</p></div>` : matchedArtists.length ? `<div class="artist-directory">${matchedArtists.map((artist) => `<button class="result-artist" data-action="artist" data-artist="${escapeHtml(artist.id)}">${artistAvatar(artist)}<span class="result-artist-copy"><strong>${escapeHtml(artist.name)}</strong><small>Artista · ${escapeHtml(artist.listeners)} oyentes mensuales</small></span>${icon('arrow')}</button>`).join('')}</div>` : emptyState('No encontramos artistas', 'Intenta con otro nombre.');
  if (state.searchTab === 'albums') primaryResults = matchedAlbums.length ? `<div class="card-grid">${matchedAlbums.map((song) => musicCard(song, song.album)).join('')}</div>` : emptyState('No encontramos álbumes', 'Prueba con otro título o artista.');
  return `<div class="search-intro"><div class="page-eyebrow">BUSCA ALGO QUE TE MUEVA</div><h1>¿Qué quieres escuchar?</h1><p>Encuentra canciones y artistas para tu siguiente descubrimiento.</p></div>
    <label class="search-field-large">${icon('search')}<input id="searchPageInput" type="search" value="${escapeHtml(state.search)}" placeholder="Canciones, artistas, álbumes..." autocomplete="off" /><span class="search-shortcut">ENTER</span></label>
    <div class="search-tabs">${tabs.map(([id, label]) => `<button class="search-tab ${state.searchTab === id ? 'active' : ''}" data-action="search-tab" data-tab="${id}">${label}</button>`).join('')}</div>
    ${query ? `<div class="search-summary">Resultados para <strong>“${escapeHtml(state.search)}”</strong></div>` : `<div class="search-summary">Tendencias de la semana</div>`}
    <div class="search-results"><section class="results-column"><h2>${state.searchTab === 'tracks' ? 'Canciones' : state.searchTab === 'artists' ? 'Artistas' : 'Álbumes'}</h2>${primaryResults}</section><aside class="results-column"><h2>Artistas</h2>${matchedArtists.length ? matchedArtists.slice(0, 4).map((artist) => `<button class="result-artist" data-action="artist" data-artist="${escapeHtml(artist.id)}">${artistAvatar(artist)}<span class="result-artist-copy"><strong>${escapeHtml(artist.name)}</strong><small>Artista</small></span>${icon('arrow')}</button>`).join('') : `<p class="muted-copy">Prueba otra búsqueda para encontrar artistas.</p>`}</aside></div>`;
}

async function loadSearchResults(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase('es');
  if (!apiBase || normalizedQuery.length < 2) return;
  const request = ++state.searchRequest;
  state.searchLoading = true;
  state.searchError = '';
  renderPage();
  try {
    const response = await fetch(`${apiBase}/api/frikimusic/search?q=${encodeURIComponent(query.trim())}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'La búsqueda no respondió.');
    if (request !== state.searchRequest) return;
    state.searchSongs = (data.songs || []).map(normalizeTrack).filter(Boolean);
    state.searchArtists = (data.artists || []).map(normalizeArtist).filter(Boolean);
    state.searchSongs.forEach((song) => {
      remoteTracks.set(song.id, song);
      if (song.artistId && !remoteArtists.has(song.artistId)) remoteArtists.set(song.artistId, normalizeArtist({ id: song.artistId, title: song.artist }, remoteArtists.size));
    });
    state.searchArtists.forEach((artist) => remoteArtists.set(artist.id, artist));
    state.searchResultsFor = normalizedQuery;
  } catch (error) {
    if (request !== state.searchRequest) return;
    state.searchSongs = [];
    state.searchArtists = [];
    state.searchResultsFor = normalizedQuery;
    state.searchError = error.message || 'Revisa que la API del VPS esté disponible.';
  } finally {
    if (request === state.searchRequest) {
      state.searchLoading = false;
      if (state.page === 'search') renderPage();
    }
  }
}

function scheduleSearch(query) {
  clearTimeout(state.searchTimer);
  if (query.trim().length < 2) {
    state.searchRequest++;
    state.searchLoading = false;
    state.searchResultsFor = '';
    state.searchSongs = [];
    state.searchArtists = [];
    state.searchError = '';
    return;
  }
  if (!apiBase) return;
  state.searchTimer = setTimeout(() => loadSearchResults(query), 350);
}

function emptyState(title, description) {
  return `<div class="empty-state"><span class="empty-icon">${icon('search')}</span><h3>${title}</h3><p>${description}</p></div>`;
}

function renderLibrary() {
  const filteredSongs = state.libraryTab === 'Favoritos' ? songs.filter((song) => state.liked.has(song.id)) : state.libraryTab === 'Recientes' ? songs.slice(0, 5) : [];
  return `<div class="page-eyebrow">TODO LO QUE HAS GUARDADO</div><div class="library-header"><div><h1 class="page-title">Tu biblioteca</h1><p>Tu colección personal, lista para volver a sonar.</p></div><button class="button button-ghost" data-action="toast" data-message="Crear playlist estará disponible cuando conectemos tu cuenta.">${icon('plus')} Nueva playlist</button></div>
    <div class="library-pills">${['Playlists', 'Favoritos', 'Recientes'].map((tab) => `<button class="library-pill ${state.libraryTab === tab ? 'active' : ''}" data-action="library-tab" data-tab="${tab}">${tab}</button>`).join('')}</div>
    ${state.libraryTab === 'Playlists' ? `<div class="playlist-grid">${playlists.map(playlistCard).join('')}</div>` : `<div class="track-list">${filteredSongs.length ? filteredSongs.map(trackRow).join('') : emptyState('Tu colección empieza aquí', 'Guarda una canción y la encontrarás en este espacio.')}</div>`}
    ${sectionHeading('Tus artistas', 'Los perfiles que más visitas.', '', '')}<div class="artist-row">${artists.slice(0, 4).map(artistCard).join('')}</div>`;
}

function renderArtistPage(id) {
  const artist = state.remoteArtist?.id === id ? state.remoteArtist : artistById(id);
  const isRemoteArtist = state.remoteArtist?.id === id;
  const artistSongs = isRemoteArtist ? state.artistSongs : songs.filter((song) => song.artistId === artist.id);
  const displaySongs = artistSongs.length ? artistSongs : isRemoteArtist ? [] : [songs[0]];
  const firstSong = displaySongs[0] || null;
  const following = state.followed.has(artist.id);
  if (state.artistLoading && state.remoteArtist?.id !== id) return `<div class="page-eyebrow">PERFIL DE ARTISTA</div><div class="empty-state"><h3>Cargando ${escapeHtml(artist.name)}…</h3><p>Buscando sus canciones y detalles.</p></div>`;
  return `<section class="artist-hero artist-hero--${artist.tone}"><div class="artist-hero-content">${artistAvatar(artist)}<div class="artist-meta"><div class="verified-line"><span class="verified-check">${icon('check')}</span> Artista verificado</div><h1>${escapeHtml(artist.name)}</h1><p>${escapeHtml(artist.listeners)} oyentes mensuales</p></div></div></section>
    <div class="artist-actions">${firstSong ? `<button class="button button-primary" data-action="play-track" data-track="${escapeHtml(firstSong.id)}">${icon('play')} Reproducir</button>` : `<button class="button button-primary" disabled>${icon('play')} Sin canciones</button>`}<button class="button artist-follow ${following ? 'following' : ''}" data-action="follow" data-artist="${escapeHtml(artist.id)}">${following ? 'Siguiendo' : 'Seguir'}</button><button class="icon-button" data-action="toast" data-message="Más opciones de artista" aria-label="Más opciones">${icon('more')}</button><div class="artist-stats"><span><strong>${escapeHtml(artist.listeners)}</strong> oyentes mensuales</span><span><strong>${artistSongs.length}</strong> canciones en la selección</span></div></div>
    <div class="artist-page-grid"><section>${sectionHeading('Más populares', `Lo más escuchado de ${escapeHtml(artist.name)}.`, 'Reproducir todo', 'play-artist')}
      <div class="track-list">${displaySongs.length ? displaySongs.map(trackRow).join('') : emptyState('Todavía no hay canciones aquí', 'Prueba con otro artista o vuelve a buscar más tarde.')}</div>
      ${sectionHeading('Lanzamientos que te pueden gustar', '', 'Ver discografía', 'toast')}<div class="card-grid">${displaySongs.map((song) => musicCard(song, song.album)).join('')}</div></section>
      <aside><div class="artist-about"><h3>Sobre ${escapeHtml(artist.name)}</h3><p>${escapeHtml(artist.bio)}</p><div class="about-stat">${icon('headphones')} ${escapeHtml(artist.listeners)} oyentes cada mes</div></div></aside></div>`;
}

async function loadArtist(id) {
  if (!apiBase || !id || !remoteArtists.has(id) || (state.remoteArtist?.id === id && state.artistSongs.length)) return;
  if (state.artistLoading && state.artistId === id) return;
  const request = ++state.artistRequest;
  state.artistLoading = true;
  renderPage();
  try {
    const response = await fetch(`${apiBase}/api/frikimusic/artist/${encodeURIComponent(id)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'No se pudo cargar este perfil.');
    if (request !== state.artistRequest || state.artistId !== id) return;
    const details = data.artist || data;
    const artist = normalizeArtist({ ...remoteArtists.get(id), ...details, id }, remoteArtists.size);
    if (artist) remoteArtists.set(id, artist);
    const sections = Array.isArray(data.sections) ? data.sections : [];
    const items = [...sections.flatMap((section) => section.items || section.contents || []), ...(data.songs || data.tracks || [])];
    const tracks = items.map((item, index) => normalizeTrack({ ...item, artists: item.artists?.length ? item.artists : [{ id, name: artist?.name }] }, index)).filter(Boolean);
    state.remoteArtist = artist;
    state.artistSongs = [...new Map(tracks.map((track) => [track.id, track])).values()];
    state.artistSongs.forEach((track) => remoteTracks.set(track.id, track));
  } catch (error) {
    if (request !== state.artistRequest) return;
    state.remoteArtist = remoteArtists.get(id);
    state.artistSongs = [];
    showToast(error.message || 'No se pudo cargar el perfil.');
  } finally {
    if (request === state.artistRequest) {
      state.artistLoading = false;
      if (state.page === 'artist' && state.artistId === id) renderPage();
    }
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function renderPage() {
  const page = state.page;
  if (page === 'home') pageContent.innerHTML = renderHome();
  else if (page === 'search') pageContent.innerHTML = renderSearch();
  else if (page === 'artists') pageContent.innerHTML = renderArtists();
  else if (page === 'library') pageContent.innerHTML = renderLibrary();
  else if (page === 'artist') pageContent.innerHTML = renderArtistPage(state.artistId);
  updateNavigation();
  if (page === 'search') {
    const pageInput = $('#searchPageInput');
    if (pageInput) pageInput.addEventListener('input', (event) => {
      state.search = event.target.value;
      globalSearch.value = state.search;
      const position = event.target.selectionStart;
      renderPage();
      const nextInput = $('#searchPageInput');
      nextInput?.focus();
      nextInput?.setSelectionRange(position, position);
      scheduleSearch(state.search);
    });
  }
}

function updateNavigation() {
  const navPage = state.page === 'artist' ? 'artists' : state.page;
  $$('[data-nav]').forEach((link) => link.classList.toggle('active', link.dataset.nav === navPage));
}

function navigate(page, artistId = null) {
  state.page = page;
  state.artistId = artistId;
  const hash = page === 'artist' ? `#artist/${artistId}` : `#${page}`;
  if (location.hash !== hash) location.hash = hash;
  else renderPage();
  if (page === 'artist' && artistId && remoteArtists.has(artistId)) loadArtist(artistId);
  $('#pageContent')?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function readRoute() {
  const [page, artistId] = location.hash.replace(/^#/, '').split('/');
  if (page === 'artist') { state.page = 'artist'; state.artistId = artistId || artists[0].id; }
  else if (['home', 'search', 'artists', 'library'].includes(page)) state.page = page;
  else state.page = 'home';
  renderPage();
  if (state.page === 'artist') loadArtist(state.artistId);
}

function showToast(message) {
  toastNode.textContent = message || 'Esta opción estará disponible próximamente.';
  toastNode.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toastNode.classList.remove('show'), 2400);
}

function setRange(input, value) {
  if (!input) return;
  input.value = String(value);
  input.style.setProperty('--range', `${value}%`);
}

function syncPlayer() {
  const song = currentTrack();
  $('#nowTitle').textContent = song.title;
  const artistButton = $('#nowArtist');
  artistButton.textContent = song.artist;
  artistButton.dataset.artist = song.artistId;
  $('#miniArtwork').className = `artwork artwork--${song.tone || 'plum'} ${song.thumbnail ? 'artwork--remote' : ''}`;
  $('#miniArtwork').innerHTML = song.thumbnail ? `<img class="artwork-image" src="${escapeHtml(song.thumbnail)}" alt="" />` : `<span class="art-disc"></span><span class="art-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="art-stamp">${escapeHtml(song.stamp)}</span>`;
  $('#playButton').innerHTML = icon(state.playing ? 'pause' : 'play');
  $('#playButton').setAttribute('aria-label', state.playing ? 'Pausar' : 'Reproducir');
  $('#currentTime').textContent = durationText(state.progress);
  const duration = Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0 ? audioPlayer.duration : song.duration;
  $('#duration').textContent = durationText(duration);
  setRange($('#seekBar'), duration ? (state.progress / duration) * 100 : 0);
  $('#likeButton').classList.toggle('liked', state.liked.has(song.id));
  $$('[data-action="shuffle"]').forEach((button) => button.classList.toggle('active', state.shuffle));
  $$('[data-action="repeat"]').forEach((button) => button.classList.toggle('active', state.repeat));
  updateNowPlayingRow();
  if (fullPlayer.classList.contains('open')) renderFullPlayer();
}

function updateNowPlayingRow() {
  $$('[data-track-row]').forEach((row) => {
    const current = row.dataset.trackRow === state.trackId;
    row.classList.toggle('is-current', current);
    const number = $('.track-number', row);
    if (number) number.innerHTML = current && state.playing ? '<span class="playing-bars"><i></i><i></i><i></i></span><button class="row-play" aria-label="Pausar">' + icon('pause') + '</button>' : `<span>${String([...row.parentElement.querySelectorAll('[data-track-row]')].indexOf(row) + 1).padStart(2, '0')}</span><button class="row-play" aria-label="Reproducir">${icon('play')}</button>`;
  });
}

function playTrack(id) {
  const song = trackById(id);
  if (!song.youtube) return findAndPlay(song);
  const candidateQueue = state.page === 'artist' && state.artistSongs.length ? state.artistSongs : state.searchSongs;
  state.queue = candidateQueue.some((track) => track.id === song.id) ? candidateQueue.map((track) => track.id) : [song.id];
  if (!state.queue.includes(song.id)) state.queue.unshift(song.id);
  state.trackId = song.id;
  state.progress = 0;
  state.playing = true;
  audioPlayer.pause();
  audioPlayer.dataset.trackId = song.id;
  if (!apiBase) {
    state.playing = false;
    syncPlayer();
    showToast('Configura la dirección HTTPS de la API de FrikiMusic para escuchar canciones.');
    return;
  }
  audioPlayer.src = `${apiBase}/api/frikimusic/stream/${encodeURIComponent(song.videoId)}`;
  audioPlayer.load();
  syncPlayer();
  audioPlayer.play().catch(() => {
    state.playing = false;
    syncPlayer();
    showToast('No se pudo reproducir. Comprueba la API del VPS y vuelve a intentar.');
  });
}

async function findAndPlay(sample) {
  if (!apiBase) {
    showToast('Configura la dirección HTTPS de la API de FrikiMusic para escuchar canciones.');
    return;
  }
  showToast(`Buscando “${sample.title}” para reproducir…`);
  try {
    const query = `${sample.title} ${sample.artist}`;
    const response = await fetch(`${apiBase}/api/frikimusic/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'La búsqueda no respondió.');
    const tracks = (data.songs || []).map(normalizeTrack).filter(Boolean);
    if (!tracks.length) throw new Error('No encontramos una versión reproducible de esa canción.');
    tracks.forEach((track) => remoteTracks.set(track.id, track));
    state.searchSongs = tracks;
    state.searchArtists = (data.artists || []).map(normalizeArtist).filter(Boolean);
    state.searchResultsFor = query.toLocaleLowerCase('es');
    playTrack(tracks[0].id);
  } catch (error) {
    showToast(error.message || 'No se pudo buscar esta canción.');
  }
}

function togglePlay() {
  if (audioPlayer.currentSrc && audioPlayer.dataset.trackId === state.trackId) {
    if (audioPlayer.paused) audioPlayer.play().catch(() => showToast('No se pudo reanudar la reproducción.'));
    else audioPlayer.pause();
    return;
  }
  playTrack(state.trackId);
}

function changeTrack(direction) {
  const queue = state.queue.length ? [...state.queue] : [state.trackId];
  if (!queue.includes(state.trackId)) queue.unshift(state.trackId);
  const index = queue.indexOf(state.trackId);
  let nextIndex = (index + direction + queue.length) % queue.length;
  if (state.shuffle && queue.length > 1) {
    do { nextIndex = Math.floor(Math.random() * queue.length); } while (nextIndex === index);
  }
  const track = trackById(queue[nextIndex]);
  state.queue = queue;
  state.trackId = track.id;
  state.progress = 0;
  playTrack(track.id);
}

function toggleLike(id = state.trackId) {
  if (state.liked.has(id)) state.liked.delete(id);
  else state.liked.add(id);
  syncPlayer();
  if (state.page === 'library' && state.libraryTab === 'Favoritos') renderPage();
}

function openFullPlayer() {
  renderFullPlayer();
  fullPlayer.classList.add('open');
  fullPlayer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeFullPlayer() {
  fullPlayer.classList.remove('open');
  fullPlayer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderFullPlayer() {
  const song = currentTrack();
  const artist = artistById(song.artistId);
  const duration = Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0 ? audioPlayer.duration : song.duration;
  const progress = duration ? (state.progress / duration) * 100 : 0;
  fullPlayer.innerHTML = `<div class="full-player-top"><button class="icon-button" data-action="close-player" aria-label="Cerrar">${icon('close')}</button><span>REPRODUCIENDO DESDE · FRIKIMUSIC</span><button class="icon-button" data-action="queue" aria-label="Abrir cola">${icon('queue')}</button></div>
    <div class="full-player-body"><div class="full-art">${artwork(song)}</div><div class="full-copy"><div class="page-eyebrow">AHORA SUENA</div><h1>${escapeHtml(song.title)}</h1><button class="text-link full-artist" data-action="artist" data-artist="${escapeHtml(artist.id)}">${escapeHtml(artist.name)}</button><div class="full-player-timeline"><div class="timeline"><span id="fullCurrentTime">${durationText(state.progress)}</span><input id="fullSeekBar" type="range" min="0" max="100" value="${progress}" style="--range:${progress}%" aria-label="Posición de reproducción" /><span>${durationText(duration)}</span></div></div><div class="full-player-controls"><button class="icon-button ${state.shuffle ? 'active' : ''}" data-action="shuffle" aria-label="Aleatorio">${icon('shuffle')}</button><button class="icon-button" data-action="previous" aria-label="Anterior">${icon('previous')}</button><button class="play-button" data-action="toggle-play" aria-label="${state.playing ? 'Pausar' : 'Reproducir'}">${icon(state.playing ? 'pause' : 'play')}</button><button class="icon-button" data-action="next" aria-label="Siguiente">${icon('next')}</button><button class="icon-button ${state.repeat ? 'active' : ''}" data-action="repeat" aria-label="Repetir">${icon('repeat')}</button></div><p class="full-player-footnote">Reproducción progresiva desde FrikiMusic.</p></div></div>`;
}

function handleAction(actionNode) {
  const action = actionNode.dataset.action;
  const trackId = actionNode.dataset.track || actionNode.closest('[data-track-row]')?.dataset.trackRow;
  switch (action) {
    case 'route': navigate(actionNode.dataset.route); break;
    case 'artist': navigate('artist', actionNode.dataset.artist || artists[0].id); break;
    case 'artists': navigate('artists'); break;
    case 'route-library': navigate('library'); break;
    case 'route-search': navigate('search'); break;
    case 'play-track': playTrack(trackId || state.trackId); break;
    case 'play-artist': {
      const first = state.artistSongs[0] || songs.find((song) => song.artistId === state.artistId);
      playTrack(first?.id || state.trackId);
      break;
    }
    case 'toggle-play': togglePlay(); break;
    case 'next': changeTrack(1); break;
    case 'previous': changeTrack(-1); break;
    case 'like': toggleLike(); break;
    case 'like-track': { const id = actionNode.dataset.track; toggleLike(id); if (state.page === 'search') renderPage(); break; }
    case 'shuffle': state.shuffle = !state.shuffle; syncPlayer(); break;
    case 'repeat': state.repeat = !state.repeat; syncPlayer(); break;
    case 'open-player': openFullPlayer(); break;
    case 'close-player': closeFullPlayer(); break;
    case 'follow': {
      const id = actionNode.dataset.artist;
      if (state.followed.has(id)) state.followed.delete(id); else state.followed.add(id);
      renderPage();
      break;
    }
    case 'search-tab': state.searchTab = actionNode.dataset.tab; renderPage(); break;
    case 'library-tab': state.libraryTab = actionNode.dataset.tab; renderPage(); break;
    case 'filter': state.filter = actionNode.dataset.filter; renderPage(); break;
    case 'playlist': showToast('Las playlists interactivas se conectarán en la siguiente fase.'); break;
    case 'queue': showToast('Tu cola de reproducción aparecerá aquí.'); break;
    case 'volume': showToast('Control de volumen disponible al conectar el audio.'); break;
    case 'back': history.back(); break;
    case 'toast': showToast(actionNode.dataset.message); break;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  handleAction(target);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeFullPlayer();
  if (event.key === 'Enter' && event.target.matches('[data-track-row]')) playTrack(event.target.dataset.trackRow);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    globalSearch.focus();
    navigate('search');
  }
  if (event.key === 'Enter' && event.target === globalSearch) {
    state.search = globalSearch.value.trim();
    navigate('search');
  }
  if (event.key === 'Enter' && event.target.id === 'searchPageInput') {
    state.search = event.target.value.trim();
    renderPage();
    clearTimeout(state.searchTimer);
    loadSearchResults(state.search);
  }
});

globalSearch.addEventListener('input', () => {
  state.search = globalSearch.value;
  if (state.page !== 'search') navigate('search');
  else renderPage();
  scheduleSearch(state.search);
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'seekBar' || event.target.id === 'fullSeekBar') {
    const duration = Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0 ? audioPlayer.duration : currentTrack().duration;
    state.progress = Math.round((Number(event.target.value) / 100) * duration);
    if (Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) audioPlayer.currentTime = state.progress;
    setRange($('#seekBar'), duration ? (state.progress / duration) * 100 : 0);
    $('#currentTime').textContent = durationText(state.progress);
    if ($('#fullCurrentTime')) $('#fullCurrentTime').textContent = durationText(state.progress);
    if ($('#fullSeekBar')) setRange($('#fullSeekBar'), (state.progress / currentTrack().duration) * 100);
  }
  if (event.target.classList.contains('volume-slider')) {
    setRange(event.target, Number(event.target.value));
    audioPlayer.volume = Number(event.target.value) / 100;
  }
});

audioPlayer.volume = Number($('.volume-slider')?.value || 72) / 100;
audioPlayer.addEventListener('play', () => {
  state.playing = true;
  syncPlayer();
});
audioPlayer.addEventListener('pause', () => {
  state.playing = false;
  syncPlayer();
});
audioPlayer.addEventListener('loadedmetadata', () => {
  const song = currentTrack();
  if (Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) song.duration = audioPlayer.duration;
  syncPlayer();
});
audioPlayer.addEventListener('timeupdate', () => {
  state.progress = audioPlayer.currentTime || 0;
  const duration = Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0 ? audioPlayer.duration : currentTrack().duration;
  $('#currentTime').textContent = durationText(state.progress);
  $('#duration').textContent = durationText(duration);
  setRange($('#seekBar'), duration ? (state.progress / duration) * 100 : 0);
  if ($('#fullCurrentTime')) $('#fullCurrentTime').textContent = durationText(state.progress);
  if ($('#fullSeekBar')) {
    setRange($('#fullSeekBar'), duration ? (state.progress / duration) * 100 : 0);
    const fullDuration = $('#fullSeekBar')?.parentElement?.lastElementChild;
    if (fullDuration) fullDuration.textContent = durationText(duration);
  }
  updateNowPlayingRow();
});
audioPlayer.addEventListener('ended', () => {
  if (state.repeat) {
    audioPlayer.currentTime = 0;
    audioPlayer.play().catch(() => showToast('No se pudo reiniciar esta canción.'));
  } else if (state.queue.length > 1) changeTrack(1);
  else {
    state.playing = false;
    state.progress = 0;
    syncPlayer();
  }
});
audioPlayer.addEventListener('error', () => {
  if (!audioPlayer.src) return;
  state.playing = false;
  syncPlayer();
  showToast('No se pudo cargar el audio. Revisa la API del VPS.');
});

window.addEventListener('hashchange', readRoute);
if (!location.hash) history.replaceState(null, '', '#home');
readRoute();
syncPlayer();

$$('[data-icon]').forEach((node) => {
  const name = node.dataset.icon;
  if (iconPaths[name]) node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
});
