import { useEffect, useState } from "react";
import EstateNavbar from "@/components/Real-Estate/EstateNavbar";
import EstateHero from "@/components/Real-Estate/EstateHero";
import { KeyholeLoader } from "@/components/Real-Estate/components/preloader/KeyholeLoader";
import RealEstatePage from "@/components/Real-Estate/EstatePage";
import { Footer } from "@/components/Real-Estate/EstateFooter";

export default function RealEstate() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    if (showPreloader) return;

    const hash = window.location.hash;

    if (!hash) return;

    const timer = window.setTimeout(() => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [showPreloader]);

  return (
    <div className="min-h-screen bg-[#050706] text-white">
      <EstateNavbar />

      <EstateHero
        onInquiry={() => setIsInquiryOpen(true)}
      />     
      <RealEstatePage />
      <Footer />

      {showPreloader && (
        <KeyholeLoader
          onComplete={() => setShowPreloader(false)}
        />
      )}
    </div>
  );
}