import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./keyhole.css";

interface KeyholeLoaderProps {
  onComplete: () => void;
}

export function KeyholeLoader({ onComplete }: KeyholeLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const holeRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const hole = holeRef.current;
    const content = contentRef.current;

    if (!loader || !hole || !content) return;

    document.body.style.overflow = "hidden";

    const isMobile = window.innerWidth <= 768;

    const timeline = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        onComplete();
      },
    });

    // ---------------------------------------------------------
    // INITIAL STATE
    // ---------------------------------------------------------

    gsap.set(hole, {
      scale: 0.8,
      transformOrigin: "500px 390px",
    });

    gsap.set(content, {
      opacity: 0,
      y: 30,
    });

    // ---------------------------------------------------------
    // 1. KEYHOLE APPEARS
    // ---------------------------------------------------------

    timeline.to(hole, {
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    });

    // ---------------------------------------------------------
    // 2. TEXT APPEARS
    // ---------------------------------------------------------

    timeline.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // ---------------------------------------------------------
    // 3. HOLD
    // ---------------------------------------------------------

    timeline.to({}, {
      duration: 1,
    });

    // ---------------------------------------------------------
    // 4. TEXT LEAVES
    // ---------------------------------------------------------

    timeline.to(content, {
      opacity: 0,
      y: -25,
      duration: 0.5,
      ease: "power2.in",
    });

    // ---------------------------------------------------------
    // 5. THE KEYHOLE OPENS
    //
    // This is the important part.
    //
    // The image underneath NEVER moves.
    //
    // Only the keyhole opening expands.
    // ---------------------------------------------------------

    timeline.to(
      hole,
      {
        scale: isMobile ? 12 : 22,
        duration: 2.4,
        ease: "power4.inOut",
      },
      "+=0.05"
    );

    // ---------------------------------------------------------
    // 6. FINISH
    // ---------------------------------------------------------

    timeline.to(
      loader,
      {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.25"
    );

    return () => {
      timeline.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="keyhole-loader"
      aria-hidden="true"
    >
      {/* =====================================================
          STATIC HERO IMAGE
          ===================================================== */}

      <div className="keyhole-hero">
        <img
          src="/loader.jpg"
          alt=""
        />
      </div>

      {/* =====================================================
          KEYHOLE MASK
          ===================================================== */}

      <svg
        className="keyhole-mask"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask
            id="keyhole-cutout"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1000"
            height="1000"
          >
            {/* Everything starts dark */}

            <rect
              x="0"
              y="0"
              width="1000"
              height="1000"
              fill="white"
            />

            {/* =================================================
                SINGLE KEYHOLE

                Black = transparent opening
                ================================================= */}

            <g
              ref={holeRef}
              className="keyhole-opening"
              fill="black"
            >
              {/* PERFECT CIRCLE */}

              <circle
                cx="500"
                cy="390"
                r="75"
              />

              {/* STEM */}

<path
  d="
    M470 440
    L530 440

    L550 650

    Q552 670 535 670

    L465 670

    Q448 670 450 650

    Z
  "
/>
            </g>
          </mask>
        </defs>

        {/* Dark screen */}

        <rect
          className="keyhole-dark-layer"
          x="0"
          y="0"
          width="1000"
          height="1000"
          mask="url(#keyhole-cutout)"
        />
      </svg>

      {/* =====================================================
          TEXT
          ===================================================== */}

      <div
        ref={contentRef}
        className="keyhole-content"
      >
        <p className="keyhole-subtitle">
          Smart solutions for modern
          <br />
          property management.
        </p>
      </div>
    </div>
  );
}
