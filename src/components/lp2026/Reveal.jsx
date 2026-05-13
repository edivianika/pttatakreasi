import { useEffect, useRef, useState } from "react";

const variantClass = {
  "fade-up": "reveal-fade-up",
  "text-focus": "reveal-text-focus",
  "fade-icon": "reveal-fade-icon",
};

export function Reveal({ children, className = "", delay = 0, variant = "fade-up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "reveal-in" : ""} ${className}`}
      style={visible && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
