import React, { useMemo, useState } from 'react';
import { Play } from 'lucide-react';

const sampleMovies = [
  {
    id: 1,
    title: 'Neon Drift',
    genre: 'Action',
    poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Echoes of Andromeda',
    genre: 'Sci‑Fi',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Velvet Noire',
    genre: 'Drama',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'Laugh Track',
    genre: 'Comedy',
    poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    title: 'Crimson Night',
    genre: 'Horror',
    poster: 'https://images.unsplash.com/photo-1502139214984-406a2d1f9908?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 6,
    title: 'Orbitals',
    genre: 'Sci‑Fi',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1400&auto=format&fit=crop',
    trailer: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const genres = ['All', 'Action', 'Sci‑Fi', 'Drama', 'Comedy', 'Horror'];

function MovieCard({ movie }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50"
    >
      {/* Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
      />
      {/* Trailer Preview */}
      <video
        src={movie.trailer}
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
        onCanPlay={(e) => {
          if (hover) e.currentTarget.play();
        }}
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
        <div>
          <h4 className="text-white drop-shadow">{movie.title}</h4>
          <p className="text-xs text-zinc-300">{movie.genre}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur hover:bg-white/20">
          <Play size={14} /> Trailer
        </button>
      </div>
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-50 blur-xl transition group-hover:opacity-80" style={{ background: 'linear-gradient(45deg, rgba(34,211,238,0.25), rgba(217,70,239,0.25))' }} />
    </div>
  );
}

export default function GenresGallery() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return sampleMovies;
    return sampleMovies.filter((m) => m.genre === active);
  }, [active]);

  return (
    <section id="genres" className="w-full bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Browse by Genre</h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActive(g)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === g
                    ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black shadow-[0_0_20px_rgba(217,70,239,0.35)]'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
