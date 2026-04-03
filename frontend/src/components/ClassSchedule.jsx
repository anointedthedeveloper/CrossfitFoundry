import * as Icons from 'lucide-react';
import { useState } from 'react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DEFAULT_SCHEDULE = [
  { day: 'Monday', classes: [{ time: '05:30 AM', name: 'Open Gym', coach: 'Rivera' }, { time: '06:00 AM', name: 'WOD', coach: 'Chen' }, { time: '09:00 AM', name: 'Foundations', coach: 'Holt' }, { time: '12:00 PM', name: 'WOD', coach: 'Rivera' }, { time: '05:30 PM', name: 'WOD', coach: 'Chen' }, { time: '07:00 PM', name: 'Barbell Club', coach: 'Holt' }] },
  { day: 'Tuesday', classes: [{ time: '05:30 AM', name: 'Open Gym', coach: 'Chen' }, { time: '06:00 AM', name: 'WOD', coach: 'Rivera' }, { time: '09:00 AM', name: 'WOD', coach: 'Holt' }, { time: '12:00 PM', name: 'WOD', coach: 'Chen' }, { time: '05:30 PM', name: 'WOD', coach: 'Rivera' }, { time: '07:00 PM', name: 'Endurance', coach: 'Chen' }] },
  { day: 'Wednesday', classes: [{ time: '05:30 AM', name: 'Open Gym', coach: 'Holt' }, { time: '06:00 AM', name: 'WOD', coach: 'Chen' }, { time: '09:00 AM', name: 'Foundations', coach: 'Rivera' }, { time: '12:00 PM', name: 'WOD', coach: 'Holt' }, { time: '05:30 PM', name: 'WOD', coach: 'Rivera' }, { time: '07:00 PM', name: 'Mobility', coach: 'Chen' }] },
  { day: 'Thursday', classes: [{ time: '05:30 AM', name: 'Open Gym', coach: 'Rivera' }, { time: '06:00 AM', name: 'WOD', coach: 'Holt' }, { time: '09:00 AM', name: 'WOD', coach: 'Chen' }, { time: '12:00 PM', name: 'WOD', coach: 'Rivera' }, { time: '05:30 PM', name: 'WOD', coach: 'Holt' }, { time: '07:00 PM', name: 'Barbell Club', coach: 'Rivera' }] },
  { day: 'Friday', classes: [{ time: '05:30 AM', name: 'Open Gym', coach: 'Chen' }, { time: '06:00 AM', name: 'WOD', coach: 'Rivera' }, { time: '09:00 AM', name: 'WOD', coach: 'Holt' }, { time: '12:00 PM', name: 'WOD', coach: 'Chen' }, { time: '05:30 PM', name: 'WOD', coach: 'Rivera' }] },
  { day: 'Saturday', classes: [{ time: '08:00 AM', name: 'Community WOD', coach: 'All Coaches' }, { time: '10:00 AM', name: 'Foundations', coach: 'Holt' }, { time: '11:00 AM', name: 'Open Gym', coach: 'Rivera' }] },
  { day: 'Sunday', classes: [{ time: '09:00 AM', name: 'Open Gym', coach: 'Chen' }, { time: '10:00 AM', name: 'Yoga & Recovery', coach: 'Holt' }] },
];

const DEFAULT_PRICING = [
  {
    id: 'dropin',
    label: 'DROP-IN',
    price: '$30',
    period: 'per class',
    features: ['Single class access', 'All class types', 'Equipment included', 'Coach guidance'],
    cta: 'Book Drop-in',
  },
  {
    id: 'monthly',
    label: 'MONTHLY UNLIMITED',
    price: '$175',
    period: 'per month',
    features: ['Unlimited classes', 'Barbell Club access', 'Nutrition guidance', 'Performance tracking', 'Community events'],
    cta: 'Book Drop-in',
    featured: true,
  },
  {
    id: 'foundations',
    label: 'FOUNDATIONS',
    price: '$199',
    period: '4-week program',
    features: ['8 intro sessions', 'Movement assessments', '1-on-1 coaching', 'Membership transition'],
    cta: 'Book Drop-in',
  },
];

function getTodayName() {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return names[new Date().getDay()];
}

export default function ClassSchedule({ schedule_data, pricing_data }) {
  const schedule = schedule_data || DEFAULT_SCHEDULE;
  const pricing = pricing_data || DEFAULT_PRICING;
  const today = getTodayName();
  const [activeDay, setActiveDay] = useState(today);

  const activeSchedule = schedule.find((d) => d.day === activeDay) || schedule[0];

  return (
    <section id="schedule" className="relative w-full bg-[#111212] py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={undefined}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,#ffe60022_39px,#ffe60022_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,#ffe60022_39px,#ffe60022_40px)]" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-1 bg-[#ffe600]" />
            <span className="text-[#ffe600] font-inter text-xs font-bold tracking-[0.3em] uppercase">Training Schedule & Pricing</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
            BOOK YOUR
            <span className="block text-[#ffe600]">.CLASS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#ffe600] shadow-[0_0_60px_rgba(255,230,0,0.12)]">
          <div className="bg-[#0a0a0a] border-r-0 md:border-r-2 border-[#ffe600]">
            <div className="border-b-2 border-[#ffe600] p-6">
              <div className="flex items-center gap-3 mb-6">
                <Icons.Calendar className="text-[#ffe600]" size={20} />
                <span className="font-inter text-white text-sm font-bold tracking-widest uppercase">Weekly Schedule</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={[
                      'font-inter text-xs font-black tracking-widest uppercase px-4 py-2 border-2 transition-all duration-200',
                      activeDay === day
                        ? 'bg-[#ffe600] border-[#ffe600] text-[#0a0a0a]'
                        : day === today
                        ? 'bg-transparent border-[#ffe600] text-[#ffe600] hover:bg-[#ffe600] hover:text-[#0a0a0a]'
                        : 'bg-transparent border-[#333] text-[#666] hover:border-[#ffe600] hover:text-[#ffe600]',
                    ].join(' ')}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-playfair text-2xl font-black text-white uppercase tracking-tight">{activeDay}</span>
                {activeDay === today && (
                  <span className="font-inter text-[10px] font-black tracking-widest uppercase bg-[#ffe600] text-[#0a0a0a] px-3 py-1">
                    TODAY
                  </span>
                )}
              </div>

              <div className="space-y-0">
                <div className="grid grid-cols-3 border-b-2 border-[#ffe600] pb-3 mb-2">
                  <span className="font-inter text-[10px] font-black tracking-widest uppercase text-[#ffe600]">Time</span>
                  <span className="font-inter text-[10px] font-black tracking-widest uppercase text-[#ffe600]">Class</span>
                  <span className="font-inter text-[10px] font-black tracking-widest uppercase text-[#ffe600]">Coach</span>
                </div>

                {activeSchedule?.classes?.map((cls, i) => (
                  <div
                    key={i}
                    className={[
                      'grid grid-cols-3 py-4 border-b border-[#1e1e1e] group transition-colors duration-150 hover:bg-[#1a1a0a]',
                    ].join(' ')}
                  >
                    <span className="font-inter text-sm font-bold text-[#ffe600] tracking-wide">{cls.time}</span>
                    <span className="font-inter text-sm font-black text-white uppercase tracking-wide group-hover:text-[#ffe600] transition-colors duration-150">{cls.name}</span>
                    <span className="font-inter text-sm text-[#888]">{cls.coach}</span>
                  </div>
                ))}

                {(!activeSchedule?.classes || activeSchedule.classes.length === 0) && (
                  <div className="py-12 text-center">
                    <span className="font-inter text-[#444] text-sm tracking-widest uppercase">No classes scheduled</span>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-[#1e1e1e] flex items-center gap-3">
                <Icons.Info size={14} className="text-[#555] flex-shrink-0" />
                <span className="font-inter text-xs text-[#555] tracking-wide">All classes require reservation. Book online or via the app.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d0d]">
            <div className="border-b-2 border-[#ffe600] p-6">
              <div className="flex items-center gap-3">
                <Icons.Tag className="text-[#ffe600]" size={20} />
                <span className="font-inter text-white text-sm font-bold tracking-widest uppercase">Membership & Pricing</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {pricing.map((plan) => (
                <div
                  key={plan.id}
                  className={[
                    'border-2 p-6 transition-all duration-300 group relative overflow-hidden',
                    plan.featured
                      ? 'border-[#ffe600] bg-[#ffe600]/5 shadow-[0_0_40px_rgba(255,230,0,0.15)]'
                      : 'border-[#2a2a2a] hover:border-[#ffe600] hover:shadow-[0_0_30px_rgba(255,230,0,0.08)]',
                  ].join(' ')}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-[#ffe600] px-4 py-1">
                      <span className="font-inter text-[10px] font-black tracking-widest uppercase text-[#0a0a0a]">Most Popular</span>
                    </div>
                  )}

                  <div className="mb-4">
                    <span className="font-inter text-[10px] font-black tracking-[0.25em] uppercase text-[#ffe600] block mb-2">{plan.label}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-playfair text-5xl font-black text-white leading-none">{plan.price}</span>
                      <span className="font-inter text-xs text-[#666] uppercase tracking-wider">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features?.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <Icons.Check size={14} className="text-[#ffe600] flex-shrink-0" />
                        <span className="font-inter text-sm text-[#aaa]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={[
                      'w-full font-inter text-xs font-black tracking-widest uppercase py-4 px-6 transition-all duration-200 active:scale-95',
                      plan.featured
                        ? 'bg-[#ffe600] text-[#0a0a0a] hover:bg-white hover:text-[#0a0a0a] shadow-[0_0_20px_rgba(255,230,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                        : 'bg-transparent border-2 border-[#ffe600] text-[#ffe600] hover:bg-[#ffe600] hover:text-[#0a0a0a]',
                    ].join(' ')}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}

              <div className="border-t-2 border-[#1e1e1e] pt-6 flex items-start gap-3">
                <Icons.Shield size={16} className="text-[#ffe600] flex-shrink-0 mt-0.5" />
                <span className="font-inter text-xs text-[#555] tracking-wide leading-relaxed">
                  No contracts. Cancel anytime. First class always free for new members.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#1e1e1e]">
          {[
            { icon: 'MapPin', label: 'Location', value: '2847 Industrial Blvd, Unit C' },
            { icon: 'Clock', label: 'Open Daily', value: '5:00 AM — 9:00 PM' },
            { icon: 'Phone', label: 'Call Us', value: '(555) 482-0019' },
          ].map((item, i) => {
            const IconComp = Icons?.[item.icon] || Icons.HelpCircle;
            return (
              <div
                key={i}
                className={[
                  'flex items-center gap-5 px-8 py-6',
                  i < 2 ? 'border-b-2 md:border-b-0 md:border-r-2 border-[#1e1e1e]' : '',
                ].join(' ')}
              >
                <div className="w-10 h-10 border-2 border-[#ffe600] flex items-center justify-center flex-shrink-0">
                  <IconComp size={16} className="text-[#ffe600]" />
                </div>
                <div>
                  <span className="font-inter text-[10px] font-black tracking-widest uppercase text-[#555] block mb-1">{item.label}</span>
                  <span className="font-inter text-sm font-bold text-white">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
