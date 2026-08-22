import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return;
    }

    const id = location.hash.substring(1);

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Give the new page time to render
    const timeout = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
}