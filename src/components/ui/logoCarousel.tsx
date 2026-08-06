const logos = [
  {
    name: "Murang'a County",
    src: "/muranga.png",
  },
  {
    name: "Wajir County",
    src: "/wajir.png",
  },
  {
    name: "Embu County",
    src: "/embu.png",
  },
  {
    name: "Kisumu County",
    src: "/kisumu.png",
  },
  {
    name: "Jaramogi Oginga Odinga Teaching and Referral Hospital",
    src: "/jaramogi.png",
  },
];

export default function LogoCarousel() {
  return (
    <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-14">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex h-20 w-44 items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-20 object-contain opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}