import React from 'react';
import { Star, Play } from 'lucide-react';

const PosterCard = () => {
  return (
    <div className="group relative w-full max-w-md cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-[1px]">
        <div className="h-full w-full overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE2MjYwMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
      </div>
      {/* 3D tilt effect using perspective */}
      <div className="pointer-events-none absolute -inset-1 -z-0 rounded-2xl opacity-60 blur-2xl transition duration-300 group-hover:opacity-90" style={{ background: 'linear-gradient(45deg, rgba(34,211,238,0.4), rgba(217,70,239,0.4))' }} />

      <button className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-lg transition hover:bg-white/20">
        <div className="flex items-center gap-2">
          <Play size={16} /> Watch Trailer
        </div>
      </button>
    </div>
  );
};

export default function Spotlight() {
  return (
    <section id="spotlight" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:items-stretch md:gap-16">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Movie of the Moment</h2>
          <p className="mt-3 max-w-xl text-zinc-300">
            Our spotlight feature brings you a cinematic masterpiece with immersive visuals, stellar performances, and a story that stays with you.
          </p>
          <div className="mt-6 flex items-center gap-4 text-zinc-300">
            <div className="flex items-center gap-1 text-cyan-300">
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star size={18} />
            </div>
            <span className="text-sm">4.0/5 • Sci‑Fi • 2h 12m</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:max-w-md">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Director: L. Anders</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Cast: R. Cruz, M. Kim</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Release: Now Playing</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Rating: PG‑13</div>
          </div>
        </div>

        <div className="flex-1 grid place-items-center">
          <div className="[perspective:1200px]">
            <div className="relative transition-transform duration-300 will-change-transform group hover:[transform:rotateX(4deg)_rotateY(-6deg)]">
              <PosterCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
