import * as Icons from 'lucide-react';

function Footer({ address, github_url, anobyte_url, footer_links }) {
  const resolvedAddress = address || '1847 Industrial Blvd, Unit 4, Chicago, IL 60642';
  const resolvedGithub = github_url || 'https://github.com/anointedthedeveloper';
  const resolvedAnobyte = anobyte_url || 'https://anobyte.dev';
  const resolvedLinks = footer_links || [
    { label: 'Schedule', route: '#schedule' },
    { label: 'Coaches', route: '#coaches' },
    { label: 'Events', route: '#events' },
  ];

  const MapPinIcon = Icons?.MapPin || Icons.HelpCircle;
  const ClockIcon = Icons?.Clock || Icons.HelpCircle;
  const GithubIcon = Icons?.Github || Icons.HelpCircle;
  const CarIcon = Icons?.Car || Icons.HelpCircle;
  const PhoneIcon = Icons?.Phone || Icons.HelpCircle;
  const MailIcon = Icons?.Mail || Icons.HelpCircle;
  const ExternalLinkIcon = Icons?.ExternalLink || Icons.HelpCircle;
  const ZapIcon = Icons?.Zap || Icons.HelpCircle;

  return (
    <footer className="w-full bg-[#111212] border-t-4 border-[#ffe600]">
      <div className="max-w-[1460px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-14">

          <div className="flex flex-col gap-8">
            <div>
              <a href="#" className="inline-block mb-6">
                <span className="font-playfair text-2xl font-black tracking-widest uppercase text-[#ffe600]">
                  Foundry<span className="text-white">Factory</span>
                </span>
              </a>
              <div className="flex items-center gap-3 mb-2">
                <ZapIcon className="text-[#ffe600] shrink-0" size={18} strokeWidth={3} />
                <p className="font-inter text-[10px] font-black tracking-[0.25em] uppercase text-[#ffe600]">
                  Open 24 / 7 — 365 Days a Year
                </p>
              </div>
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-white/40 ml-7">
                Keycard Access Available
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-[#ffe600] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                <div>
                  <p className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-1">Location</p>
                  <p className="font-inter text-sm font-bold tracking-wider uppercase text-white leading-relaxed">
                    {resolvedAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="text-[#ffe600] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                <div>
                  <p className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-1">Phone</p>
                  <a
                    href="tel:+13125550182"
                    className="font-inter text-sm font-bold tracking-wider uppercase text-white hover:text-[#ffe600] transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    +1 (312) 555-0182
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MailIcon className="text-[#ffe600] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                <div>
                  <p className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-1">Email</p>
                  <a
                    href="mailto:info@foundryfactory.com"
                    className="font-inter text-sm font-bold tracking-wider uppercase text-white hover:text-[#ffe600] transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    info@foundryfactory.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CarIcon className="text-[#ffe600] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                <div>
                  <p className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-1">Parking</p>
                  <p className="font-inter text-xs font-medium tracking-wider uppercase text-white/70 leading-relaxed">
                    Free street parking after 6PM & weekends.
                    Lot access via rear alley. Bike racks available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-inter text-[10px] font-black tracking-[0.25em] uppercase text-[#ffe600] mb-3">
                Find Us
              </p>
              <div className="w-full h-56 md:h-72 border-2 border-[#ffe600] overflow-hidden">
                <iframe
                  title="Foundry Factory Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.5!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-[#22272A] border border-white/10 p-6">
              <p className="font-inter text-[10px] font-black tracking-[0.25em] uppercase text-[#ffe600] mb-3">
                Hours
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { day: 'Mon – Fri', time: '5:00 AM – 9:00 PM' },
                  { day: 'Saturday', time: '7:00 AM – 5:00 PM' },
                  { day: 'Sunday', time: '8:00 AM – 2:00 PM' },
                  { day: 'Keycard 24/7', time: 'Members Only' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-inter text-[9px] font-black tracking-[0.2em] uppercase text-white/40">{item.day}</span>
                    <span className="font-inter text-xs font-bold tracking-wider uppercase text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div className="flex items-center gap-2">
              <ZapIcon size={14} className="text-[#ffe600]" strokeWidth={3} />
              <span className="font-playfair text-base font-black tracking-widest uppercase text-[#ffe600]">
                Foundry
              </span>
              <span className="font-playfair text-base font-black tracking-widest uppercase text-white">
                Factory
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {resolvedLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.route}
                  className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/50 hover:text-[#ffe600] hover:underline underline-offset-4 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/5 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/30">
                  Developed by
                </span>
                <a
                  href={resolvedGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-[#ffe600] hover:underline underline-offset-4 transition-colors duration-200"
                >
                  anointedthedeveloper
                </a>
                <a
                  href={resolvedGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffe600] transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={14} strokeWidth={2} />
                </a>
              </div>

              <div className="hidden sm:block w-px h-4 bg-white/10" />

              <div className="flex items-center gap-2">
                <span className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-white/30">
                  Powered by
                </span>
                <a
                  href={resolvedAnobyte}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-[10px] font-black tracking-[0.2em] uppercase text-[#ffe600] hover:underline underline-offset-4 transition-colors duration-200 flex items-center gap-1"
                >
                  Anobyte
                  <ExternalLinkIcon size={10} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            <p className="font-inter text-[9px] font-bold tracking-[0.2em] uppercase text-white/20">
              © {new Date().getFullYear()} Foundry Factory. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
