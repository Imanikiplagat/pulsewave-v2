import { motion } from "motion/react";
import type { ReactNode } from "react";

export function FadeIn({ children, delay = 0, y = 20 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow, title, description, center = false,
}: { eyebrow?: string; title: ReactNode; description?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--navy)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--navy)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[var(--dark-gray)] sm:text-lg">{description}</p>
      )}
    </div>
  );
}
