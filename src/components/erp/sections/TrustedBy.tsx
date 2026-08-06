import LogoCarousel from "@/components/ui/logoCarousel";

export function TrustedBy() {
  return (
    <section
      aria-label="Trusted by"
      className="border-y border-border bg-background py-12"
    >
      <div className="container-page">
        <p className="text-center text-sm font-medium text-dark-gray">
          Trusted by county governments and referral hospitals across Kenya.
        </p>
      </div>
      <LogoCarousel />
    </section>
  );
}
