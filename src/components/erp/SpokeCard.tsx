import { Banknote } from "lucide-react";

type SpokeCardProps = {
  label: string;
  Icon: typeof Banknote;
};

export function SpokeCard({ label, Icon }: SpokeCardProps) {
  return (
    <div className="grid place-items-center rounded-2xl border border-border bg-card p-4 text-center shadow-card transition-colors hover:border-blue-brand">
      <Icon
        className="h-5 w-5 text-blue-brand"
        aria-hidden
      />

      <p className="mt-2 text-[11px] font-semibold text-navy">
        {label}
      </p>
    </div>
  );
}