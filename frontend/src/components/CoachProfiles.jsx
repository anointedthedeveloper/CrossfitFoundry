import * as Icons from 'lucide-react';

const coaches = [
  {
    id: 1,
    name: 'Marcus Reid',
    title: 'Head Coach',
    certifications: ['L3 Trainer', 'Olympic Lifting', 'Nutrition Coach'],
    bio: 'Former D1 athlete with 12 years in functional fitness. Specializes in Olympic lifting mechanics and high-performance programming.',
    avatar: 'https://placehold.co/200x200/22272A/ffe600?text=MR',
    years: 12,
  },
  {
    id: 2,
    name: 'Dana Wolfe',
    title: 'Strength & Conditioning',
    certifications: ['L2 Trainer', 'CSCS', 'Mobility Specialist'],
    bio: 'CSCS-certified coach obsessed with movement quality. Guides athletes from first pull-up to podium-level performance.',
    avatar: 'https://placehold.co/200x200/22272A/ffe600?text=DW',
    years: 8,
  },
  {
    id: 3,
    name: 'Torres Vega',
    title: 'Endurance Coach',
    certifications: ['L2 Trainer', 'USA Weightlifting', 'CPT'],
    bio: 'Ironman finisher and metabolic conditioning expert. Builds engine capacity through intelligent periodization and grit.',
    avatar: 'https://placehold.co/200x200/22272A/ffe600?text=TV',
    years: 6,
  },
  {
    id: 4,
    name: 'Priya Nair',
    title: 'Gymnastics & Skills',
    certifications: ['L2 Trainer', 'FRC', 'Yoga RYT-200'],
    bio: 'Former competitive gymnast who translates elite body control into scalable gym skills for all levels.',
    avatar: 'https://placehold.co/200x200/22272A/ffe600?text=PN',
    years: 9,
  },
];

function CertBadge({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-widest uppercase border border-yellow-400 text-yellow-400 rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

function CoachCard({ coach }) {
  const AwardIcon = Icons?.Award || Icons.HelpCircle;
  const ClockIcon = Icons?.Clock || Icons.HelpCircle;

  return (
    <div
      className="group relative flex flex-col items-center text-center p-8 rounded-[20px] border-2 border-black bg-white/5 backdrop-blur-xl shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-yellow-400/20 hover:border-yellow-400/60 min-w-0 flex-1 basis-64"
    >
      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_-4px_#ffe60066] pointer-events-none" />

      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-yellow-400/30">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/200x200/22272A/ffe600?text=FF';
            }}
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1 shadow-md">
          <AwardIcon size={14} className="text-black" />
        </div>
      </div>

      <h3 className="font-playfair text-xl font-black text-yellow-400 tracking-tight leading-tight mb-1">
        {coach.name}
      </h3>

      <div className="flex items-center gap-1.5 text-white/50 text-xs font-bold uppercase tracking-widest mb-5">
        <ClockIcon size={11} />
        <span>{coach.years} YRS</span>
        <span className="mx-1 text-yellow-400">·</span>
        <span>{coach.title}</span>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {coach.certifications.map((cert) => (
          <CertBadge key={cert} label={cert} />
        ))}
      </div>

      <p className="text-white/70 text-sm leading-relaxed line-clamp-2 font-light tracking-wide">
        {coach.bio}
      </p>
    </div>
  );
}

function CoachProfiles({ coaches: coachesProp }) {
  const ShieldIcon = Icons?.ShieldCheck || Icons.Shield;
  const UsersIcon = Icons?.Users || Icons.HelpCircle;

  const data = coachesProp && coachesProp.length > 0 ? coachesProp : coaches;

  return (
    <section
      id="coaches"
      className="relative w-full bg-[#111212] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{}}
        />
      </div>

      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400" />

      <div className="relative max-w-[1460px] mx-auto px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em]">Certified Coaches</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
              MEET YOUR
              <br />
              <span className="text-yellow-400">SQUAD</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-white/40 text-sm font-bold uppercase tracking-widest">
            <ShieldIcon size={18} className="text-yellow-400" />
            <span>All Certified Coaches</span>
            <span className="text-yellow-400">·</span>
            <UsersIcon size={18} className="text-yellow-400" />
            <span>{data.length} Coaches</span>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-7">
          {data.map((coach) => (
            <CoachCard key={coach.id || coach.name} coach={coach} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] font-bold">
            Foundry Factory — Forged by Certified Athletes
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/30 text-xs uppercase tracking-widest font-bold">
              Classes Running Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoachProfiles;
