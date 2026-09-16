import { useEffect } from "react";
import RevenueNavbar from "@/components/Revenue-managemen/RevenueNav";
import RevenueFooter from "@/components/Revenue-managemen/footer";
import RevenueHero from "@/components/Revenue-managemen/RevenueHero";
import RevenueSolutionNav from "@/components/Revenue-managemen/RevenueNav";
import RevenueCollection from "@/components/Revenue-managemen/RevenueCollection";
import RevenueOverview from "@/components/Revenue-managemen/RevenueOverview";
import BillingInvoicing from "@/components/Revenue-managemen/BillingInvoicing";
import CitizenPortal from "@/components/Revenue-managemen/CitizenPortal";
import DigitalPayments from "@/components/Revenue-managemen/DigitalPayment";
import USSDServices from "@/components/Revenue-managemen/USSDServices";
import WhyPulseWave from "@/components/Revenue-managemen/WhyUs";
import ValuedClients from "@/components/Revenue-managemen/ValuedClients";
import RevenueCTA from "@/components/Revenue-managemen/RevenueCTA";
import RevenueFloatingActions from "@/components/Revenue-managemen/RevenueFloatingActions";

const lime = "var(--lime-brand)";

export default function RevenueManagement() {
  useEffect(() => {
    // Handle direct navigation to /revenue-management#section
    const hash = window.location.hash;

    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050706] text-white">
      <RevenueNavbar />

      <main>
        <RevenueHero />

        <RevenueSolutionNav />

        <RevenueOverview />

        <RevenueCollection />

        <BillingInvoicing />

        <CitizenPortal />

        <DigitalPayments />

        <USSDServices />

        <WhyPulseWave />

        <ValuedClients />

        <RevenueCTA />

        <RevenueFooter />
      </main>

      <RevenueFloatingActions />

     
    </div>
  );
}