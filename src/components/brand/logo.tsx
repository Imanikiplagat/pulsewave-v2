import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="PulseWave Technologies"
        className="h-40 w-auto"
      />
    </Link>
  );
}