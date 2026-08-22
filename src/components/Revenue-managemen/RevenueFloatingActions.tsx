import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  MessageCircle,
  Quote,
  X,
} from "lucide-react";

export default function RevenueFloatingActions() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "0796222111";

  const whatsappMessage = encodeURIComponent(
    "Hello PulseWave, I would like to learn more about your Revenue Management solution.",
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e0c]/95 p-2 shadow-2xl backdrop-blur-xl">
          <FloatingAction
            icon={<MessageCircle size={18} />}
            title="Chat with us"
            description="Talk to our team on WhatsApp"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          />

          <FloatingAction
            icon={<CalendarDays size={18} />}
            title="Book a Demo"
            description="See Revenue Management in action"
            href="/contact?subject=Revenue%20Management%20Demo"
          />

          <FloatingAction
            icon={<Quote size={18} />}
            title="Request a Quote"
            description="Get a solution estimate"
            href="/contact?subject=Revenue%20Management%20Quote"
          />
        </div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Contact PulseWave"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--lime-brand)] text-black shadow-[0_10px_40px_rgba(215,242,58,0.2)] transition-all duration-300 hover:scale-105"
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
      </button>
    </div>
  );
}

function FloatingAction({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("https://wa.me") ? "_blank" : undefined}
      rel={
        href.startsWith("https://wa.me")
          ? "noopener noreferrer"
          : undefined
      }
      className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--lime-brand)]/10 text-[var(--lime-brand)]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
          {description}
        </p>
      </div>
    </a>
  );
}