import { useState } from "react";
import * as Icons from "lucide-react";

const GALLERY_CAPTIONS = [
  "COMMUNITY",
  "STRENGTH",
  "GRIND",
  "IRON",
  "WOD",
  "POWER",
  "FORM",
  "SWEAT",
  "BARBELL",
  "DEADLIFT",
  "PULL-UPS",
  "BOX JUMP",
];

const GALLERY_KEYWORDS = [
  "athlete workout gym barbell",
  "athlete lifting weights industrial gym",
  "gym community training group",
  "powerlifting deadlift gym floor",
  "gym box pullups rings",
  "gym athlete rope climb",
  "kettlebell swings workout",
  "barbell squat rack gym training",
  "open competition athlete gym",
  "gym floor tire flip athlete",
  "team workout endurance training",
  "heavy lift olympic weightlifting",
];

const ASPECT_RATIOS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
];

const DEFAULT_IMAGES = GALLERY_KEYWORDS.map((kw, i) => ({
  id: i + 1,
  src: `https://images.pexels.com/photos/17882671/pexels-photo-17882671.jpeg}`,
  caption: GALLERY_CAPTIONS[i % GALLERY_CAPTIONS.length],
  aspect: ASPECT_RATIOS[i % ASPECT_RATIOS.length],
}));

function GalleryCard({ image, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden border-4 border-black cursor-pointer group z-0 ${image.aspect}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{}}
    >
      <img
        src={imgError ? `https://placehold.co/600x800/22272A/ffe600?text=FOUNDRY` : image.src}
        alt={image.caption}
        onError={() => setImgError(true)}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
          hovered ? "scale-110" : "scale-100"
        } grayscale contrast-125`}
      />

      <div
        className={`absolute inset-0 bg-[#22272A] transition-opacity duration-400 ${
          hovered ? "opacity-60" : "opacity-30"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-400 ${
          hovered ? "opacity-25" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(135deg, rgba(0,80,160,0.35) 0%, rgba(30,60,100,0.25) 100%)" }}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="border-2 border-[#ffe600] p-4">
          <Icons.ZoomIn className="w-7 h-7 text-[#ffe600]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <span
          className={`inline-block bg-[#ffe600] text-black text-xs font-bold tracking-widest uppercase px-3 py-1 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
          }`}
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
        >
          {image.caption}
        </span>
      </div>
    </div>
  );
}

function MemberGallery({ gallery_images }) {
  const images =
    gallery_images && gallery_images.length > 0 ? gallery_images : DEFAULT_IMAGES;

  return (
    <section
      id="gallery"
      className="w-full bg-[#111212] py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14 border-b-4 border-[#ffe600] pb-6">
          <div className="flex items-end gap-4 flex-wrap">
            <h2
              className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.03em" }}
            >
              GALLERY
            </h2>
            <span
              className="text-[#ffe600] text-xl md:text-2xl font-bold tracking-widest uppercase mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              / COMMUNITY
            </span>
          </div>
          <p
            className="text-white/50 mt-3 text-sm md:text-base tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Real athletes. Real results. Foundry Factory.
          </p>
        </div>

        <div
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: "10px" }}
        >
          {images.map((image, index) => (
            <div
              key={image.id || index}
              className="mb-[10px] break-inside-avoid"
            >
              <GalleryCard image={image} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t-2 border-white/10 pt-8">
          <p
            className="text-white/40 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {images.length} Photos &bull; Updated Weekly
          </p>
          <button
            className="flex items-center gap-2 bg-[#ffe600] text-black font-bold text-xs tracking-widest uppercase px-8 py-4 border-2 border-black hover:bg-black hover:text-[#ffe600] hover:border-[#ffe600] transition-all duration-200"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.18em" }}
          >
            <Icons.Camera className="w-4 h-4" />
            VIEW ALL PHOTOS
          </button>
        </div>
      </div>
    </section>
  );
}

export default MemberGallery;
