import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titleLine1: "The Real Estate Fund",
    titleLine2: "Expert Approach",
    description:
      "UNLOCK THE TRUE POTENTIAL OF YOUR MULTI-FAMILY REAL ESTATE INVESTMENT",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titleLine1: "Institutional Grade",
    titleLine2: "Portfolio Management",
    description:
      "STRATEGIC ASSET ACQUISITION IN HIGH-GROWTH METROPOLITAN MARKETS",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    titleLine1: "Sustainable Capital",
    titleLine2: "Preservation",
    description:
      "GENERATING CONSISTENT RISK-ADJUSTED RETURNS FOR QUALIFIED INVESTORS",
  },
];

interface EstateHeroProps {
  onInquiry: () => void;
}

export default function EstateHero({
  onInquiry,
}: EstateHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  // ---------------------------------------------------------
  // SLIDER DRAG / SWIPE LOGIC
  // ---------------------------------------------------------

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const SWIPE_THRESHOLD = 60;

  // ---------------------------------------------------------
  // NEXT / PREVIOUS
  // ---------------------------------------------------------

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1)
    );
  };

  // ---------------------------------------------------------
  // TOUCH START
  // ---------------------------------------------------------

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  // ---------------------------------------------------------
  // TOUCH MOVE
  // ---------------------------------------------------------

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    touchCurrentX.current = e.touches[0].clientX;
  };

  // ---------------------------------------------------------
  // TOUCH END
  // ---------------------------------------------------------

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchCurrentX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchCurrentX.current;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      if (distance > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  // ---------------------------------------------------------
  // MOUSE DOWN
  // ---------------------------------------------------------

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = false;
  };

  // ---------------------------------------------------------
  // MOUSE MOVE
  // ---------------------------------------------------------

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;

    const distance = e.clientX - mouseStartX.current;

    if (Math.abs(distance) > 5) {
      isDragging.current = true;
    }
  };

  // ---------------------------------------------------------
  // MOUSE UP
  // ---------------------------------------------------------

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;

    const distance = mouseStartX.current - e.clientX;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      if (distance > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }

    mouseStartX.current = null;

    // Small delay so a drag doesn't trigger a button click
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  // ---------------------------------------------------------
  // MOUSE LEAVE
  // ---------------------------------------------------------

  const handleMouseLeave = () => {
    mouseStartX.current = null;
    isDragging.current = false;
  };

  // ---------------------------------------------------------
  // AUTO SLIDE
  // ---------------------------------------------------------

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isDragging.current) {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden pt-36 pb-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "1200ms",
            }}
          >
            <img
              src={slide.image}
              alt="Luxury Multi-Family Architecture"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
              draggable={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/30 to-neutral-950/50" />
          </div>
        ))}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <div className="lg:col-span-7 space-y-1">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-md">
                <span className="block">
                  {HERO_SLIDES[currentSlide].titleLine1}
                </span>

                <span className="block text-white/95">
                  {HERO_SLIDES[currentSlide].titleLine2}
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6 lg:pl-6">
              <p className="text-xs sm:text-sm font-light tracking-[0.2em] text-neutral-200 leading-relaxed uppercase lg:text-left max-w-md">
                {HERO_SLIDES[currentSlide].description}
              </p>

              {/* <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 border border-white/60 bg-black/20 backdrop-blur-sm text-xs font-light tracking-[0.25em] text-white uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              >
                <span>Investment Inquiry</span>

                <ArrowUpRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button> */}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6 pt-6 border-t border-white/10">
            <button
              onClick={handlePrevSlide}
              className="p-2 text-white/70 hover:text-lime-400 transition-colors duration-200 focus:outline-none group"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.25] group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex space-x-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? "w-6 bg-lime-400"
                      : "w-1.5 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              className="p-2 text-white/70 hover:text-lime-400 transition-colors duration-200 focus:outline-none group"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.25] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}