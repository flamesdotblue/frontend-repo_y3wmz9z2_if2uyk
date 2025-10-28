import React, { useMemo, useState } from 'react';
import { Plus, Bookmark, Star } from 'lucide-react';

const suggestions = [
  { id: 'a', title: 'Quantum Hearts', genre: 'Romance', rating: 4.5 },
  { id: 'b', title: 'Midnight Circuit', genre: 'Thriller', rating: 4.2 },
  { id: 'c', title: 'Cosmic Bloom', genre: 'Sci‑Fi', rating: 4.7 },
];

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [review, setReview] = useState('A dazzling spectacle with heart and style.');

  const addToWatchlist = (title) => {
    setWatchlist((prev) => (prev.includes(title) ? prev : [...prev, title]));
  };
  const removeFromWatchlist = (title) => {
    setWatchlist((prev) => prev.filter((t) => t !== title));
  };

  const recommendations = useMemo(() => {
    // Simple mock: recommend items not already on watchlist
    return suggestions.filter((s) => !watchlist.includes(s.title));
  }, [watchlist]);

  return (
    <section id="watchlist" className="w-full bg-gradient-to-b from-zinc-950 to-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Watchlist */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Your Watchlist</h3>
            <p className="mt-2 text-zinc-300">Save films you want to watch later and track what excites you.</p>

            <div className="mt-6 space-y-3">
              {watchlist.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-zinc-300">
                  Your list is empty. Add something from recommendations.
                </div>
              ) : (
                watchlist.map((title) => (
                  <div key={title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <Bookmark className="text-cyan-400" size={18} />
                      <span>{title}</span>
                    </div>
                    <button
                      onClick={() => removeFromWatchlist(title)}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recommendations */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Recommended for You</h3>
            <p className="mt-2 text-zinc-300">Based on your taste, here are picks with glowing reviews.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {recommendations.map((rec) => (
                <div key={rec.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-medium">{rec.title}</h4>
                      <p className="text-xs text-zinc-400">{rec.genre}</p>
                      <div className="mt-2 flex items-center gap-1 text-amber-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} className={i < Math.round(rec.rating) ? 'fill-current' : ''} />
                        ))}
                        <span className="ml-2 text-xs text-zinc-300">{rec.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToWatchlist(rec.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-black shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:opacity-95"
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* User Review */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-medium">Your Review</h4>
              <p className="mt-2 text-sm text-zinc-300">What did you think about the latest film you watched?</p>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={3}
                className="mt-3 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm outline-none placeholder:text-zinc-500"
                placeholder="Share your thoughts..."
              />
              <div className="mt-3 text-xs text-zinc-400">Saved locally — personalized to your current session.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
