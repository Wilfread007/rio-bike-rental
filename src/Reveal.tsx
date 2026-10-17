import { useEffect, useRef, useState, type ReactNode } from "react";

// Content is visible on the server (good for SEO). After hydration, elements below the fold
// fade up once as they scroll into view.
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;
    setHidden(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHidden(false); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${hidden ? "reveal-hidden" : ""} ${className}`}>
      {children}
    </div>
  );
}
