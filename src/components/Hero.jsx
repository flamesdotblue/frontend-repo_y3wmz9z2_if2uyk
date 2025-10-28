import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays to enhance cinematic feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(0,255,240,.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-24 pt-28 md:flex-row md:items-center md:gap-16">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
          >
            Lights. Camera. Immerse.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg text-zinc-300"
          >
            Step into a futuristic theater experience. Discover the latest releases, trendsetters, and hidden gems — all in a holographic glow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#spotlight"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-medium text-black shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02]"
            >
              Explore Now
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#genres"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Browse Genres
            </a>
          </motion.div>
        </div>

        {/* Floating neon accents for subtle parallax */}
        <div className="relative mt-16 h-40 flex-1 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pointer-events-none absolute right-10 top-6 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pointer-events-none absolute bottom-4 left-6 h-16 w-16 rounded-full bg-fuchsia-400/30 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
