import React from 'react';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import GenresGallery from './components/GenresGallery';
import Watchlist from './components/Watchlist';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Cine<span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Scope</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#spotlight" className="hover:text-white">Spotlight</a>
          <a href="#genres" className="hover:text-white">Genres</a>
          <a href="#watchlist" className="hover:text-white">Watchlist</a>
        </nav>
        <a
          href="#genres"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(217,70,239,0.35)] sm:hidden"
        >
          Explore
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <Spotlight />
      <GenresGallery />
      <Watchlist />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Cinescope • Built for a cinematic, neon‑noir experience
      </footer>
    </div>
  );
}
