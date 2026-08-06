import { ErpNav } from "@/components/erp/ERPNavbar";
import { ErpHero } from "@/components/erp/ERPHero";
import { TrustedBy } from "@/components/erp/sections/TrustedBy";
import { ChallengesSection } from "@/components/erp/sections/ChallengesSection";
import { UnifiedPlatform } from "@/components/erp/sections/UnifiedPlatform";
import { ModulesSection } from "@/components/erp/sections/ModulesSections";
import { FeaturesSection } from "@/components/erp/sections/FeaturesSection";
import { BenefitsSection } from "@/components/erp/sections/BenefitSection";
import { CaseStudy, ImplementationProcess, FaqSection, ErpCTA, ErpFooter } from "@/components/erp/sections/ErpClosing";

export default function ERP() {
  return (
    <>
      <ErpNav />

      <main className="min-h-screen bg-[var(--background)]">
        <ErpHero />
        <TrustedBy />
        <ChallengesSection />      
        <UnifiedPlatform />
        <ModulesSection />
        <FeaturesSection />
        <BenefitsSection />
        <ImplementationProcess />
        <CaseStudy />
        <FaqSection />
        <ErpCTA />
        <ErpFooter />
      </main>

    </>
  );
}