"use client";

import { useEffect, useState } from "react";
import { steps } from "@/lib/site";

export function StepFlow() {
  const [seen, setSeen] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-step]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(nodes.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.step);
          setSeen((current) => Math.max(current, index));
        });
      },
      { threshold: 0.65, rootMargin: "-8% 0px -18% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const span = Math.max(steps.length - 1, 1);
  const fill = (seen / span) * 100;

  return (
    <ol className="relative mt-10 space-y-7">
      <span aria-hidden className="absolute top-3 bottom-3 left-[0.72rem] w-px bg-white/15" />
      <span
        aria-hidden
        className="absolute top-3 left-[0.72rem] w-px origin-top bg-[#d7b07a] transition-[height] duration-700 ease-out"
        style={{ height: `calc((100% - 1.5rem) * ${fill / 100})` }}
      />
      {steps.map((step, index) => {
        const on = index <= seen;
        return (
          <li key={step.title} data-step={index} className="grid min-w-0 grid-cols-[auto_1fr] gap-4">
            <span
              className={`relative z-10 font-heading text-2xl font-extrabold transition-colors duration-500 ${on ? "text-[#d7b07a]" : "text-white/30"}`}
            >
              0{index + 1}
            </span>
            <div className={`min-w-0 transition-all duration-500 ${on ? "translate-x-0 opacity-100" : "translate-x-1 opacity-45"}`}>
              <h3 className="font-heading text-2xl font-bold wrap-break-word">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/70">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
