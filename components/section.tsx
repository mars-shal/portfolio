"use client";

import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8 flex flex-col gap-2">
        {eyebrow ? (
          <p
            className="text-xs uppercase tracking-[0.3em] text-gray-400"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className="mb-8 text-2xl font-semibold leading-none text-white md:text-3xl"
          style={{ fontFamily: "var(--font-jersey)" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
