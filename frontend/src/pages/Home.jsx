import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WodTicker from '../components/WodTicker';
import ClassSchedule from '../components/ClassSchedule';
import CoachProfiles from '../components/CoachProfiles';
import MemberGallery from '../components/MemberGallery';
import FreeTrialForm from '../components/FreeTrialForm';
import Footer from '../components/Footer';
import * as Icons from 'lucide-react';

const EventCalendar = lazy(() => import('../components/EventCalendar'));

const NAV_LINKS = [
  { label: 'WOD', route: '#wod' },
  { label: 'Schedule', route: '#schedule' },
  { label: 'Coaches', route: '#coaches' },
  { label: 'Events', route: '#events' },
  { label: 'Gallery', route: '#gallery' },
  { label: 'Start Free Trial', route: '#trial', cta: true },
];

const FOOTER_LINKS = [
  { label: 'Schedule', route: '#schedule' },
  { label: 'Coaches', route: '#coaches' },
  { label: 'Events', route: '#events' },
];

function SectionDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
  );
}

function CalendarFallback() {
  return (
    <div className="w-full min-h-96 flex items-center justify-center bg-zinc-900/60 border border-zinc-700/60 rounded-[20px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        <span className="font-inter text-xs font-black tracking-widest uppercase text-yellow-400/60">Loading Calendar...</span>
      </div>
    </div>
  );
}

function EventsSection() {
  const CalendarIcon = Icons?.CalendarDays || Icons.HelpCircle;
  return (
    <section id="events" className="relative w-full bg-[#0d0d0d] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_24px,#ffe60011_24px,#ffe60011_25px)]" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/0 via-yellow-400 to-yellow-400/0" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-1 bg-yellow-400" />
            <span className="text-yellow-400 font-inter text-xs font-bold tracking-[0.3em] uppercase">Events & Community</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-playfair text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
              UPCOMING
              <span className="block text-yellow-400">.EVENTS.</span>
            </h2>
            <div className="flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-widest">
              <CalendarIcon size={16} className="text-yellow-400" />
              <span className="font-inter">Click any event to RSVP</span>
            </div>
          </div>
        </div>
        <Suspense fallback={<CalendarFallback />}>
          <EventCalendar />
        </Suspense>
      </div>
    </section>
  );
}

function TrialSection() {
  const ZapIcon = Icons?.Zap || Icons.HelpCircle;
  return (
    <section
      id="trial"
      className="relative w-full bg-[#111212] py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,#ffe60009_79px,#ffe60009_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,#ffe60009_79px,#ffe60009_80px)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-yellow-400/3 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-yellow-400" />
            <span className="text-yellow-400 font-inter text-xs font-bold tracking-[0.3em] uppercase">Zero Risk. Maximum Gain.</span>
            <div className="w-10 h-px bg-yellow-400" />
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight mb-6">
            START YOUR
            <span className="block text-yellow-400">.FREE TRIAL.</span>
          </h2>
          <p className="font-inter text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            One full week. Every class. Every coach. No payment required. Experience the Foundry difference before you commit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-yellow-400/20 mb-16 shadow-[0_0_60px_rgba(255,230,0,0.06)]">
          {[
            { icon: 'Zap', label: 'Unlimited Classes', desc: 'All class types included for 7 full days' },
            { icon: 'Shield', label: 'No Credit Card', desc: 'Zero payment info required to start' },
            { icon: 'Users', label: 'Coach Guided', desc: 'Personal attention from certified coaches' },
          ].map((item, i) => {
            const IconComp = Icons?.[item.icon] || Icons.HelpCircle;
            return (
              <div
                key={i}
                className={[
                  'flex flex-col items-center text-center gap-4 px-8 py-10 bg-[#0d0d0d]',
                  i < 2 ? 'border-b-2 md:border-b-0 md:border-r-2 border-yellow-400/15' : '',
                ].join(' ')}
              >
                <div className="w-12 h-12 border-2 border-yellow-400 flex items-center justify-center">
                  <IconComp size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="font-playfair text-lg font-black text-white uppercase tracking-tight mb-2">{item.label}</p>
                  <p className="font-inter text-xs text-white/40 leading-relaxed tracking-wide">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <FreeTrialForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head />
      <div className="min-h-screen w-full bg-[#111212] flex flex-col">
        <Header nav_links={NAV_LINKS} />
        <main className="flex-1 flex flex-col pt-[72px]">
          <HeroSection
            headline="FORGE YOUR LIMITS"
            hero_image="https://images.pexels.com/photos/9958674/pexels-photo-9958674.jpeg"
            cta_label="Start Free Trial"
          />
          <div id="wod">
            <WodTicker wod_text="TODAY'S WOD: 21-15-9 — Thrusters (95/65 lb) + Pull-Ups — FRAN — For Time — Coaches on floor 0600, 0900, 1200, 1700, 1900 — Scale as needed — All levels welcome" />
          </div>
          <SectionDivider />
          <ClassSchedule />
          <SectionDivider />
          <CoachProfiles />
          <SectionDivider />
          <EventsSection />
          <SectionDivider />
          <MemberGallery />
          <SectionDivider />
          <TrialSection />
        </main>
        <Footer
          address="2847 Industrial Blvd, Unit C, Chicago, IL 60642"
          github_url="https://github.com/anointedthedeveloper"
          anobyte_url="https://anobyte.dev"
          footer_links={FOOTER_LINKS}
        />
      </div>
    </>
  );
}

function Head() {
  React.useEffect(() => {
    document.title = 'CrossFit Foundry Factory — Forge Your Limits';
    const setMeta = (name, content, prop) => {
      let el = document.querySelector(prop ? `meta[property='${name}']` : `meta[name='${name}']`);
      if (!el) {
        el = document.createElement('meta');
        if (prop) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', 'CrossFit Foundry Factory — industrial-grade CrossFit training in Chicago. Elite coaches, daily WODs, free first week trial. Forge your limits.');
    setMeta('keywords', 'crossfit, gym, wod, chicago, fitness, barbell, strength, conditioning, foundry');
    setMeta('theme-color', '#ffe600');
    setMeta('author', 'anointedthedeveloper — anobyte.dev');
    setMeta('og:title', 'CrossFit Foundry Factory', undefined, true);
    setMeta('og:description', 'Industrial-grade CrossFit training. Forge your limits.', undefined, true);
    setMeta('og:type', 'website', undefined, true);
  }, []);
  return null;
}
