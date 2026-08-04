import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy)] text-white">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5 text-sm">
     
             {/* Socials */}
        <div className="flex items-center gap-3">
          {[FaLinkedinIn, FaXTwitter, FaFacebookF].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-white/70 transition hover:text-[var(--lime-brand)]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>


        {/* Tagline */}
        <p className="text-xs text-white/50">
          Enterprise software, engineered in Africa.
        </p>


        {/* Copyright */}
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} PulseWave Technologies
        </p>
      </div>
    </footer>
  );
}