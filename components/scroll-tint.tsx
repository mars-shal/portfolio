"use client";

import { useEffect, useState } from "react";

export function ScrollTint() {
  const [opacity, setOpacity] = useState(0.65);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = window.innerHeight * 2;
      const next = Math.min(window.scrollY / maxScroll, 1);
      setOpacity(0.65 + next * 0.25);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="absolute inset-0 bg-black" style={{ opacity }} />;
}
