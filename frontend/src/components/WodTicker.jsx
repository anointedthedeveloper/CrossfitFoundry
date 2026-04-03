import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

function WodTicker({ wod_text }) {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const tickerRef = useRef(null);

  const defaultWod =
    wod_text ||
    'TODAY\'S WOD: 21-15-9 — Thrusters (95/65 lb) + Pull-Ups — "FRAN" — For Time — Scale as needed — Coaches on floor at 0600, 0900, 1200, 1700, 1900';

  const repeatedText = `${defaultWod}  ■  ${defaultWod}  ■  ${defaultWod}  ■  ${defaultWod}  ■  `;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 w-full border-t-2 border-b-2 border-black bg-[#ffe600] overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Today's WOD ticker"
    >
      <div className="flex items-center">
        <div className="shrink-0 flex items-center gap-2 px-5 py-3 bg-black text-[#ffe600] border-r-2 border-black z-10">
          <Icons.Zap size={16} strokeWidth={2.5} className="text-[#ffe600]" />
          <span className="font-mono text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap">
            WOD
          </span>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div
            ref={tickerRef}
            className={`flex whitespace-nowrap ${
              isPaused ? 'animate-none [animation-play-state:paused]' : ''
            }`}
            style={{
              animation: isPaused
                ? 'ticker-scroll 40s linear infinite paused'
                : 'ticker-scroll 40s linear infinite',
            }}
          >
            <span className="inline-block font-mono text-black text-sm md:text-base lg:text-xl font-black tracking-widest uppercase py-3 pr-8">
              {repeatedText}
            </span>
            <span className="inline-block font-mono text-black text-sm md:text-base lg:text-xl font-black tracking-widest uppercase py-3 pr-8">
              {repeatedText}
            </span>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-5 py-3 bg-black text-[#ffe600] border-l-2 border-black z-10">
          <Icons.Timer size={16} strokeWidth={2.5} className="text-[#ffe600]" />
          <span className="font-mono text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline">
            {isPaused ? 'PAUSED' : 'LIVE'}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default WodTicker;
