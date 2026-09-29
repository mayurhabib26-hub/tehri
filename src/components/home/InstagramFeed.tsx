import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../../data/products';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-y border-[#151515]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#98323F] font-semibold block mb-2">
            COMMUNITY & ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#151515]">
            WORN BY YOU
          </h2>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#151515] hover:text-[#98323F] transition-colors border-b border-[#151515]/20 pb-1"
        >
          <Instagram className="w-4 h-4 text-[#98323F]" />
          <span>FOLLOW @TEHRI</span>
        </a>
      </div>

      {/* Grid of Community Photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {INSTAGRAM_POSTS.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square overflow-hidden bg-[#151515] select-none"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Hover overlay with instagram caption and tag */}
            <div className="absolute inset-0 bg-black/75 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#F8F5EF]">
              <div className="flex items-center justify-between text-xs tracking-wider">
                <span className="font-medium text-[#D5AFB4]">{post.handle}</span>
                <ArrowUpRight className="w-4 h-4 text-[#F8F5EF]/60" />
              </div>

              <div>
                <p className="text-xs text-[#F8F5EF]/90 font-light leading-relaxed line-clamp-3 mb-2">
                  “{post.caption}”
                </p>
                <span className="text-[10px] tracking-wider uppercase text-[#DDD4C9] block border-t border-white/20 pt-1">
                  {post.product}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
