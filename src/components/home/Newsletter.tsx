import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <section className="bg-[#98323F] text-[#F8F5EF] py-24 md:py-36 px-6 sm:px-8 lg:px-12 select-none">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs tracking-[0.35em] uppercase text-[#F8F5EF]/80 font-semibold mb-4">
          PRIVATE ARCHIVE & RELEASES
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[#F8F5EF] mb-6">
          ENTER <br />
          THE WORLD <br />
          <span className="italic font-light text-[#DDD4C9]">OF TEHRI.</span>
        </h2>

        <p className="text-sm md:text-base text-[#F8F5EF]/85 max-w-md font-light leading-relaxed mb-12">
          New season previews, private releases, and editorial essays from the atelier. No spam. Only considered dispatches.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 bg-[#681F29] border border-[#F8F5EF]/20 px-8 py-4 text-xs md:text-sm tracking-[0.2em] uppercase text-[#F8F5EF]">
            <Check className="w-4 h-4 text-[#DDD4C9]" />
            <span>WELCOME TO THE ATELIER. CONFIRMATION DISPATCHED.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="relative flex items-center border-b border-[#F8F5EF]/40 focus-within:border-[#F8F5EF] transition-colors pb-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                className="w-full bg-transparent text-sm md:text-base text-[#F8F5EF] placeholder-[#F8F5EF]/50 tracking-[0.15em] uppercase focus:outline-none pr-12 font-light"
              />
              <button
                type="submit"
                className="group absolute right-0 top-0 bottom-2 text-xs tracking-[0.25em] uppercase font-semibold text-[#F8F5EF] hover:text-[#DDD4C9] flex items-center gap-1 cursor-pointer"
              >
                <span>JOIN</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="text-[10px] text-[#F8F5EF]/60 tracking-wider mt-3 text-left">
              By subscribing, you agree to our Privacy Policy and atelier updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
