import { useState, useCallback } from 'react';
import * as Icons from 'lucide-react';

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const EVENT_CATEGORIES = [
  { label: 'COMPETITION', color: 'bg-yellow-400' },
  { label: 'OPEN GYM', color: 'bg-white' },
  { label: 'WORKSHOP', color: 'bg-zinc-400' },
  { label: 'CHARITY WOD', color: 'bg-yellow-400' },
  { label: 'FREE TRIAL', color: 'bg-white' },
  { label: 'TEAM EVENT', color: 'bg-zinc-400' },
];

const SAMPLE_EVENT_DATA = [
  {
    id: 'e1',
    title: 'FOUNDRY OPEN THROWDOWN',
    description: 'Annual in-house gym competition. Athletes of all skill levels are welcome. Scaled and RX divisions. Prize podium, judges panel, and spectator zone fully set up.',,
    category: 'COMPETITION',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 6),
    time: '08:00 AM – 04:00 PM',
    location: 'Main Floor + Rig Bay',
    spots: 48,
    spotsLeft: 12,
    rsvp: false,
  },
  {
    id: 'e2',
    title: 'OLYMPIC LIFTING CLINIC',
    description: 'Two-hour hands-on workshop covering snatch and clean & jerk technique. Suitable for intermediate athletes looking to refine positioning and bar path.',
    category: 'WORKSHOP',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 11),
    time: '09:00 AM – 11:00 AM',
    location: 'Platform Zone',
    spots: 16,
    spotsLeft: 5,
    rsvp: false,
  },
  {
    id: 'e3',
    title: 'COMMUNITY FREE TRIAL',
    description: 'Bring a friend for free. Guided intro workout, tour of the facility, and a Q&A with our head coaches. No experience necessary.',,
    category: 'FREE TRIAL',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 14),
    time: '10:00 AM – 12:00 PM',
    location: 'Full Facility',
    spots: 30,
    spotsLeft: 18,
    rsvp: false,
  },
  {
    id: 'e4',
    title: 'OPEN GYM: ENDURANCE TRACK',
    description: 'Extended open gym session focused on aerobic capacity. Rowing, running, and cyclical conditioning. Coaches on floor for programming support.',
    category: 'OPEN GYM',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 17),
    time: '06:00 AM – 10:00 AM',
    location: 'Cardio Bay',
    spots: 40,
    spotsLeft: 24,
    rsvp: false,
  },
  {
    id: 'e5',
    title: 'CHARITY WOD FOR VETERANS',
    description: 'Community fundraiser WOD in partnership with local veterans foundation. $20 donation entry. All proceeds go directly to the cause. Hero-style workout announced day-of.',
    category: 'CHARITY WOD',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 22),
    time: '09:00 AM – 01:00 PM',
    location: 'Outdoor Pad + Main Floor',
    spots: 60,
    spotsLeft: 31,
    rsvp: false,
  },
  {
    id: 'e6',
    title: 'TEAM WOD SATURDAY',
    description: 'Partner and team-based workout. Form teams of 3–4. Competition-style format with a fun, community-driven atmosphere. Post-WOD cookout on the patio.',
    category: 'TEAM EVENT',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 27),
    time: '10:00 AM – 01:00 PM',
    location: 'Main Floor + Patio',
    spots: 40,
    spotsLeft: 9,
    rsvp: false,
  },
  {
    id: 'e7',
    title: 'GYMNASTICS SKILLS WORKSHOP',
    description: 'Break down ring muscle-ups, bar muscle-ups, and handstand push-ups with coach-led progressions. Beginner-friendly with scaling for all levels.',,
    category: 'WORKSHOP',
    date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 4),
    time: '10:00 AM – 12:00 PM',
    location: 'Rig Bay',
    spots: 20,
    spotsLeft: 14,
    rsvp: false,
  },
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function buildCalendarGrid(year, month) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function getCategoryDot(category) {
  const found = EVENT_CATEGORIES.find(c => c.label === category);
  return found ? found.color : 'bg-yellow-400';
}

function EventModal({ event, onClose, onRsvp }) {
  if (!event) return null;
  const ChevronRight = Icons?.ChevronRight || Icons.HelpCircle;
  const X = Icons?.X || Icons.HelpCircle;
  const MapPin = Icons?.MapPin || Icons.HelpCircle;
  const Clock = Icons?.Clock || Icons.HelpCircle;
  const Users = Icons?.Users || Icons.HelpCircle;
  const Check = Icons?.Check || Icons.HelpCircle;
  const percentFull = Math.round(((event.spots - event.spotsLeft) / event.spots) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-lg bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-[20px] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1 w-full bg-yellow-400" />
        <div className="px-8 pt-7 pb-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-2 py-0.5 bg-yellow-400 text-black text-[10px] font-bold tracking-widest mb-3 rounded-sm">
                {event.category}
              </span>
              <h2 className="font-playfair text-white text-2xl font-bold leading-tight">
                {event.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-zinc-600 rounded-full text-zinc-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-inter">
            {event.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Clock size={14} className="text-yellow-400 flex-shrink-0" />
              <span className="font-inter">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <MapPin size={14} className="text-yellow-400 flex-shrink-0" />
              <span className="font-inter">{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Users size={14} className="text-yellow-400 flex-shrink-0" />
              <span className="font-inter">
                <span className="text-white font-semibold">{event.spotsLeft}</span> spots remaining of {event.spots}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-xs text-zinc-400 mb-1.5 font-inter">
              <span>CAPACITY</span>
              <span>{percentFull}% FULL</span>
            </div>
            <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${percentFull}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => onRsvp(event.id)}
            className={`w-full py-4 font-bold text-sm tracking-widest transition-all duration-200 flex items-center justify-center gap-2 rounded-sm ${
              event.rsvp
                ? 'bg-zinc-700 text-zinc-300 border border-zinc-600 cursor-default'
                : 'bg-yellow-400 text-black hover:bg-yellow-300 active:scale-95'
            }`}
          >
            {event.rsvp ? (
              <>
                <Check size={16} />
                RSVP CONFIRMED
              </>
            ) : (
              <>
                RESERVE YOUR SPOT
                <ChevronRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EventCalendar({ event_data }) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(() => {
    const base = Array.isArray(event_data) && event_data.length > 0 ? event_data : SAMPLE_EVENT_DATA;
    return base;
  });

  const ChevronLeft = Icons?.ChevronLeft || Icons.HelpCircle;
  const ChevronRight = Icons?.ChevronRight || Icons.HelpCircle;

  const calendarCells = buildCalendarGrid(currentYear, currentMonth);

  const getEventsForDay = useCallback((day) => {
    if (!day) return [];
    return events.filter(ev => {
      const d = new Date(ev.date);
      return d.getFullYear() === currentYear && d.getMonth() === currentMonth && d.getDate() === day;
    });
  }, [events, currentYear, currentMonth]);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  }

  function handleRsvp(eventId) {
    setEvents(prev => prev.map(ev => ev.id === eventId ? { ...ev, rsvp: true, spotsLeft: Math.max(0, ev.spotsLeft - 1) } : ev));
    setSelectedEvent(prev => prev && prev.id === eventId ? { ...prev, rsvp: true, spotsLeft: Math.max(0, prev.spotsLeft - 1) } : prev);
  }

  const upcomingEvents = events
    .filter(ev => new Date(ev.date) >= new Date(today.getFullYear(), today.getMonth(), today.getDate()))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  const isToday = (day) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  return (
    <>
      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-700/60 rounded-[20px] px-9 py-8 shadow-2xl w-full">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="font-playfair text-yellow-400 text-3xl font-bold tracking-tight leading-none">
              {MONTH_NAMES[currentMonth]}
            </h2>
            <p className="text-zinc-400 text-xs tracking-widest mt-1 font-inter">{currentYear} — EVENTS & COMMUNITY</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevMonth}
              className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-yellow-300 active:scale-95 transition-all duration-150 shadow-md"
            >
              <ChevronLeft size={16} strokeWidth={3} />
            </button>
            <button
              onClick={nextMonth}
              className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-yellow-300 active:scale-95 transition-all duration-150 shadow-md"
            >
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[420px]">
            <div className="grid grid-cols-7 border-t border-l border-zinc-700">
              {DAYS_OF_WEEK.map(day => (
                <div
                  key={day}
                  className="border-b border-r border-zinc-700 py-2 px-1 text-center text-[10px] font-bold tracking-widest text-zinc-400 font-inter bg-zinc-900/40"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 border-l border-zinc-700">
              {calendarCells.map((day, idx) => {
                const dayEvents = getEventsForDay(day);
                const todayCell = isToday(day);
                return (
                  <div
                    key={idx}
                    className={`border-b border-r border-zinc-700 min-h-16 p-1.5 relative ${
                      day ? 'cursor-default' : 'bg-zinc-900/20'
                    } ${todayCell ? 'bg-yellow-400/5' : ''}`}
                  >
                    {day && (
                      <>
                        <span
                          className={`text-xs font-bold block mb-1 font-inter ${
                            todayCell ? 'text-yellow-400' : 'text-zinc-300'
                          }`}
                        >
                          {day}
                        </span>
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 2).map(ev => (
                            <button
                              key={ev.id}
                              onClick={() => setSelectedEvent(ev)}
                              className="w-full text-left block"
                            >
                              <div className="flex items-center gap-1 group">
                                <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${getCategoryDot(ev.category)}`} />
                                <span className="text-[9px] text-zinc-200 font-bold font-inter truncate group-hover:text-yellow-400 transition-colors leading-tight">
                                  {ev.title.split(' ').slice(0, 2).join(' ')}
                                </span>
                              </div>
                            </button>
                          ))}
                          {dayEvents.length > 2 && (
                            <span className="text-[9px] text-yellow-400 font-bold font-inter">+{dayEvents.length - 2}</span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mt-7">
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 mb-3 font-inter">UPCOMING EVENTS</p>
            <div className="space-y-2">
              {upcomingEvents.map(ev => {
                const d = new Date(ev.date);
                return (
                  <button
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev)}
                    className="w-full text-left group"
                  >
                    <div className="bg-black border-l-2 border-yellow-400 px-4 py-3 flex items-center justify-between gap-4 hover:border-yellow-300 hover:bg-zinc-900 transition-all duration-150 rounded-sm">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="flex-shrink-0 text-center">
                          <span className="block text-yellow-400 text-xs font-bold font-inter leading-none">
                            {MONTH_NAMES[d.getMonth()].slice(0, 3)}
                          </span>
                          <span className="block text-white text-lg font-bold font-playfair leading-tight">
                            {String(d.getDate()).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-white text-xs font-bold font-inter tracking-wide truncate group-hover:text-yellow-400 transition-colors">
                            {ev.title}
                          </p>
                          <p className="text-zinc-500 text-[10px] font-inter mt-0.5 truncate">
                            {ev.time} · {ev.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {ev.rsvp && (
                          <span className="text-[9px] bg-yellow-400 text-black font-bold px-1.5 py-0.5 rounded-sm font-inter">RSVP'D</span>
                        )}
                        <ChevronRight size={14} className="text-zinc-600 group-hover:text-yellow-400 transition-colors" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRsvp={handleRsvp}
      />
    </>
  );
}
