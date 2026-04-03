import * as Icons from 'lucide-react';

export default function HeroSection({
  headline = 'FORGE YOUR LIMITS',
  hero_image = 'https://images.pexels.com/photos/9958674/pexels-photo-9958674.jpeg',
  cta_label = 'Start Free Trial',
}) {
  return (
    <section className="relative w-full min-h-[60vh] flex items-stretch overflow-hidden bg-[#22272A]">

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={undefined}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#111212] via-[#22272A]/90 to-[#22272A]/70" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ffe600]/5 blur-3xl rounded-full" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#ffe600]/3 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1460px] mx-auto flex flex-col lg:flex-row items-stretch px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-0 gap-10 lg:gap-0">

        <div className="flex flex-col justify-center lg:w-[48%] xl:w-[44%] py-0 lg:py-20 xl:py-24">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[3px] bg-[#ffe600]" />
            <span className="font-playfair text-[#ffe600]/80 text-sm tracking-[0.3em] uppercase font-bold">
              CrossFit Foundry Factory
            </span>
          </div>

          <h1
            className="font-playfair font-black text-5xl md:text-6xl xl:text-7xl leading-[0.92] uppercase text-[#ffe600] tracking-tight drop-shadow-[0_4px_32px_rgba(255,230,0,0.35)] mb-2"
          >
            {headline}
          </h1>

          <div className="w-full h-[3px] bg-[#ffe600] mt-6 mb-8 max-w-xs" />

          <p className="font-inter text-white/70 text-base md:text-lg leading-relaxed max-w-sm mb-10">
            Real training. Real results. Join the industrial-grade CrossFit community that forges elite athletes from the ground up.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#trial"
              className="group inline-flex items-center gap-3 bg-[#ffe600] text-black font-inter font-extrabold text-base px-8 py-4 rounded-full tracking-wide uppercase transition-all duration-300 hover:bg-black hover:text-[#ffe600] hover:shadow-[0_0_32px_rgba(255,230,0,0.5)] hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ffe600] focus:ring-offset-2 focus:ring-offset-[#22272A]"
            >
              <Icons.Zap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              {cta_label}
            </a>

            <a
              href="#schedule"
              className="inline-flex items-center gap-2 text-white/60 font-inter font-semibold text-sm uppercase tracking-widest hover:text-[#ffe600] transition-colors duration-200"
            >
              <Icons.ChevronDown className="w-4 h-4" />
              View Schedule
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="font-playfair font-black text-3xl text-[#ffe600] leading-none">500+</span>
              <span className="font-inter text-white/50 text-xs uppercase tracking-widest mt-1">Members</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-playfair font-black text-3xl text-[#ffe600] leading-none">12</span>
              <span className="font-inter text-white/50 text-xs uppercase tracking-widest mt-1">Elite Coaches</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-playfair font-black text-3xl text-[#ffe600] leading-none">5★</span>
              <span className="font-inter text-white/50 text-xs uppercase tracking-widest mt-1">Rated</span>
            </div>
          </div>
        </div>

        <div className="lg:w-[52%] xl:w-[56%] flex items-center justify-end relative lg:py-10 xl:py-12">
          <div className="relative w-full max-w-full lg:max-w-none">

            <div className="absolute -inset-3 bg-[#ffe600]/10 blur-2xl rounded-[20px] pointer-events-none" />

            <div className="relative overflow-hidden rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.7)]" style={{aspectRatio: '16/7'}}>
              <img
                src={hero_image}
                alt="CrossFit Foundry Factory gym floor with athletes training"
                className="w-full h-full object-cover object-center brightness-75 contrast-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/1280x560/22272A/ffe600?text=CROSSFIT+FOUNDRY';
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#22272A]/70 via-[#22272A]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111212]/60 via-transparent to-transparent" />

              <div className="absolute inset-0 rounded-[20px] ring-1 ring-white/10" />

              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-[#ffe600]/30 rounded-[12px] px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ffe600] animate-pulse" />
                <span className="font-inter font-bold text-[#ffe600] text-xs uppercase tracking-widest">WOD Live</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-[12px] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icons.Flame className="w-5 h-5 text-[#ffe600]" />
                  <span className="font-inter font-bold text-white text-sm">Today's WOD</span>
                </div>
                <span className="font-playfair font-black text-[#ffe600] text-sm uppercase tracking-wider">AMRAP 20: Fran Complex</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffe600]/30 to-transparent" />
    </section>
  );
}
