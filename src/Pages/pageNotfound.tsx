import { Link } from "react-router-dom";
import { ArrowRight, Home, Waves } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "@/components/brand/logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-white px-6">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft lime glow */}
        <div className="absolute left-[8%] top-[15%] h-40 w-40 rounded-full bg-[var(--lime-brand)]/20 blur-3xl" />

        <div className="absolute bottom-[10%] right-[8%] h-52 w-52 rounded-full bg-[var(--lime-brand)]/10 blur-3xl" />

        {/* Wave 1 */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 80 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-[50%] border-[3px] border-[var(--lime-brand)]/30"
        />

        {/* Wave 2 */}
        <motion.div
          initial={{ x: 60 }}
          animate={{ x: -60 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-1/2 h-80 w-[1100px] -translate-x-1/2 rounded-[50%] border-[3px] border-[var(--navy)]/10"
        />

        {/* Wave 3 */}
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: 40 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 left-1/2 h-96 w-[1300px] -translate-x-1/2 rounded-[50%] border-2 border-[var(--lime-brand)]/15"
        />
      </div>

      {/* Main content */}
    
        <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Company Logo */}
        <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex justify-center"
        >
        <Link to="/">
            <Logo />
        </Link>
        </motion.div>

        {/* 404 */}
        <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-black tracking-tight text-[var(--navy)] sm:text-9xl"
        >
        <span>4</span>
        <span className="text-[var(--lime-brand)]">0</span>
        <span>4</span>
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-[var(--navy)] sm:text-4xl"
        >
          Oh no, the wave is broken.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-lg text-base leading-7 text-[var(--dark-gray)]"
        >
          Looks like the page you&apos;re looking for has drifted away.
          Let&apos;s get you back on the right wave.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* Home */}
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-[var(--lime-brand)] hover:text-[var(--navy)] sm:w-auto"
          >
            <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Back to Home
          </Link>

          {/* Solutions */}
          <Link
            to="/solutions"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--lime-brand)] hover:bg-[var(--lime-brand)] sm:w-auto"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Brand message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />


          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
        </motion.div>
      </div>
    </main>
  );
}