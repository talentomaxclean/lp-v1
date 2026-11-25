"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function BeforeAfter() {
  const frame = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const [position, setPosition] = useState(94);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPosition(50);
      setHint(false);
      return;
    }

    let frameId = 0;
    let started = false;
    const from = 94;
    const to = 8;
    const duration = 2400;

    const play = () => {
      if (started || touched.current) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        if (touched.current) return;
        const t = Math.min(1, (now - start) / duration);
        const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
        setPosition(from + (to - from) * eased);
        if (t < 1) frameId = requestAnimationFrame(tick);
        else setHint(false);
      };
      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  function move(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }

  return (
    <div
      ref={frame}
      className="relative aspect-[722/936] w-full max-w-[460px] cursor-ew-resize touch-none overflow-hidden rounded-[1.75rem] bg-sand shadow-[0_30px_80px_-48px_rgba(2,20,66,0.8)] select-none sm:aspect-[4/3] sm:max-w-none"
      onPointerDown={(event) => {
        touched.current = true;
        setHint(false);
        event.currentTarget.setPointerCapture(event.pointerId);
        move(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        move(event.clientX);
      }}
    >
      <Image
        src="/images/antes.jpg"
        alt="Sofá cinza com manchas no assento, antes da higienização."
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        className="object-cover object-center"
        draggable={false}
      />
      <Image
        src="/images/depois.jpg"
        alt="O mesmo sofá com o assento uniforme, depois da higienização."
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        className="object-cover object-center"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        draggable={false}
      />

      <div
        className="absolute inset-y-0 z-10 w-px bg-white"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Comparar antes e depois. Setas movem a divisão."
          className={`absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-navy text-primary-foreground shadow-lg outline-none focus-visible:ring-3 focus-visible:ring-white ${hint ? "handle-hint" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              setPosition((value) => Math.max(4, value - 4));
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              setPosition((value) => Math.min(96, value + 4));
            }
          }}
        >
          <svg aria-hidden viewBox="0 0 32 32" className="size-7">
            <path
              fill="currentColor"
              d="M4.5 12.8h9.2c1.3 0 2.3 1 2.3 2.3v7.4c0 1.3-1 2.3-2.3 2.3H6.8c-1.3 0-2.3-1-2.3-2.3v-7.4c0-1.3 1-2.3 2.3-2.3Z"
            />
            <circle cx="8" cy="26.8" r="1.45" fill="currentColor" />
            <circle cx="12.2" cy="26.8" r="1.45" fill="currentColor" />
            <path
              d="M15.6 16.2c2.6 0 3.5-4 7.2-4 1.7 0 2.8 1.2 2.8 2.8V21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              fill="currentColor"
              d="M21.4 20.2h8.2c.8 0 1.4.6 1.4 1.4v1.8c0 .8-.6 1.4-1.4 1.4h-8.2c-.8 0-1.4-.6-1.4-1.4v-1.8c0-.8.6-1.4 1.4-1.4Z"
            />
          </svg>
        </div>
      </div>

      <span className="absolute top-4 left-4 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary-foreground">
        ANTES
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-paper/95 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-navy">
        DEPOIS
      </span>
    </div>
  );
}
