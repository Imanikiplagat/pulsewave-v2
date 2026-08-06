import { Puzzle, Hand, EyeOff } from "lucide-react";
import {
  ErpHeading,
  ErpReveal,
  ErpSection,
} from "../ErpPrimitive";

const challenges = [
  {
    Icon: Puzzle,
    title: "Fragmented Systems",
    body: "Finance, HR and procurement data sit in disconnected spreadsheets and legacy tools, making reconciliation slow and unreliable.",
  },
  {
    Icon: Hand,
    title: "Manual Processes",
    body: "Paper requisitions, physical signatures and manual registers stall approvals and create avoidable compliance risk.",
  },
  {
    Icon: EyeOff,
    title: "Limited Executive Visibility",
    body: "Leadership waits weeks for consolidated reports, so decisions are made on stale figures instead of live performance data.",
  },
];

export function ChallengesSection() {
  return (
    <ErpSection id="overview" tone="gray">
      <ErpHeading
        eyebrow="Challenges we solve"
        title="The operational gaps holding institutions back"
        description="PulseWave ERP replaces disconnected tools and paperwork with one governed digital backbone."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {challenges.map((c, i) => (
          <ErpReveal key={c.title} delay={i * 0.08}>
            <article className="erp-lift h-full rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-gradient">
                <c.Icon
                  className="h-5 w-5 text-navy-foreground"
                  aria-hidden
                />
              </span>

              <h3 className="mt-5 text-lg font-bold text-navy">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                {c.body}
              </p>
            </article>
          </ErpReveal>
        ))}
      </div>
    </ErpSection>
  );
}