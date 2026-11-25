"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const SHORTS = [
  {
    id: "DpeS-Y4dy9U",
    label: "Vídeo 1",
    frameTitle: "Vídeo do serviço 1",
  },
  {
    id: "muZgrxt4SUY",
    label: "Vídeo 2",
    frameTitle: "Vídeo do serviço 2",
  },
  {
    id: "tgBNsBla6ZE",
    label: "Vídeo 3",
    frameTitle: "Vídeo do serviço 3",
  },
] as const;

type Short = (typeof SHORTS)[number];
type Slot = "left" | "center" | "right";

function spoken(label: string) {
  return label.charAt(0).toLocaleLowerCase("pt-BR") + label.slice(1);
}

function embedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
}

function place(index: number, active: number): Slot {
  const delta = (index - active + SHORTS.length) % SHORTS.length;
  if (delta === 0) return "center";
  if (delta === 1) return "right";
  return "left";
}

const slotClass: Record<Slot, string> = {
  center: "left-1/2 z-20 scale-100 opacity-100",
  left: "left-[18%] z-10 scale-[0.78] opacity-75 hover:opacity-100",
  right: "left-[82%] z-10 scale-[0.78] opacity-75 hover:opacity-100",
};

function Thumbnail({ videoId }: { videoId: string }) {
  const maxres = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const [src, setSrc] = useState(maxres);

  function showHq() {
    setSrc((current) => (current === fallback ? current : fallback));
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      unoptimized
      sizes="(min-width: 1024px) 252px, 82vw"
      draggable={false}
      className="object-cover"
      onError={showHq}
      onLoad={(event) => {
        if (event.currentTarget.naturalWidth > 0 && event.currentTarget.naturalWidth < 200) {
          showHq();
        }
      }}
    />
  );
}

function PlayFace() {
  return (
    <span className="grid size-[4.5rem] place-items-center rounded-full border-2 border-[#d7b07a] bg-navy/90 text-paper shadow-[0_16px_40px_-16px_rgba(2,20,66,0.9)] transition-transform group-hover:scale-105 group-focus-visible:scale-105">
      <Play className="ml-1 size-7 fill-current" aria-hidden />
    </span>
  );
}

function PhoneShell({
  featured,
  children,
}: {
  featured?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[1.75rem] bg-paper p-1.5 pb-2.5 shadow-[0_24px_50px_-28px_rgba(2,20,66,0.85)] ${
        featured ? "ring-2 ring-[#d7b07a]" : "ring-1 ring-white/50"
      }`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.3rem] bg-navy">{children}</div>
      <span aria-hidden className="mx-auto mt-2 block h-1 w-10 rounded-full bg-navy/20" />
    </div>
  );
}

function Player({
  short,
  active,
}: {
  short: Short;
  active: boolean;
}) {
  return (
    <iframe
      src={embedSrc(short.id)}
      title={short.frameTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      tabIndex={active ? 0 : -1}
      aria-hidden={active ? undefined : true}
      className="absolute inset-0 size-full border-0"
    />
  );
}

export function Shorts() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollTick = useRef(0);
  const pendingFocus = useRef(false);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => () => cancelAnimationFrame(scrollTick.current), []);

  useEffect(() => {
    if (!pendingFocus.current) return;
    pendingFocus.current = false;
    const id = SHORTS[active].id;
    const which = window.matchMedia("(min-width: 1024px)").matches ? "stage" : "snap";
    const play = document.getElementById(`play-${which}-${id}`);
    const dot = document.getElementById(`dot-${active}`);
    (play ?? dot)?.focus({ preventScroll: true });
  }, [active]);

  function scrollToIndex(index: number) {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.clientWidth === 0) return;
    const card = scroller.querySelector<HTMLElement>(`[data-short-index="${index}"]`);
    if (!card) return;
    const left = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }

  function select(index: number) {
    setActive(index);
    scrollToIndex(index);
  }

  function play(id: string, index: number) {
    setDesktop(window.matchMedia("(min-width: 1024px)").matches);
    setPlaying((current) => (current === id ? current : id));
    select(index);
  }

  function onScrollerScroll() {
    cancelAnimationFrame(scrollTick.current);
    scrollTick.current = requestAnimationFrame(() => {
      const scroller = scrollerRef.current;
      if (!scroller || scroller.clientWidth === 0) return;
      const midpoint = scroller.scrollLeft + scroller.clientWidth / 2;
      let next = 0;
      let best = Number.POSITIVE_INFINITY;
      for (const node of scroller.querySelectorAll<HTMLElement>("[data-short-index]")) {
        const index = Number(node.dataset.shortIndex);
        const center = node.offsetLeft + node.offsetWidth / 2;
        const distance = Math.abs(center - midpoint);
        if (distance < best) {
          best = distance;
          next = index;
        }
      }
      setActive((current) => (current === next ? current : next));
    });
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + direction + SHORTS.length) % SHORTS.length;
    pendingFocus.current = true;
    select(next);
  }

  return (
    <section
      id="videos"
      aria-labelledby="videos-titulo"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="overflow-x-clip py-20 outline-none focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-brass lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rise max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Vídeos</p>
          <h2
            id="videos-titulo"
            className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl"
          >
            Assim é o atendimento.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            A equipe na casa do cliente, com a extratora, até o estofado ficar limpo.
          </p>
          <p className="sr-only">Seta esquerda e seta direita trocam o vídeo.</p>
        </div>

        <div className="rise relative mx-auto mt-12 hidden h-[600px] max-w-[960px] overflow-hidden rounded-[2rem] bg-navy lg:block">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,176,122,0.22),transparent_68%)]"
          />
          {SHORTS.map((short, index) => {
            const slot = place(index, active);
            const isCenter = slot === "center";
            const showPlayer = desktop && playing === short.id;
            return (
              <div
                key={short.id}
                data-video-id={short.id}
                className={`absolute top-1/2 w-[252px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${slotClass[slot]}`}
              >
                <div className="relative">
                  <PhoneShell featured={isCenter}>
                    {showPlayer ? (
                      <Player short={short} active={isCenter} />
                    ) : (
                      <Thumbnail videoId={short.id} />
                    )}
                    {isCenter && !showPlayer ? (
                      <button
                        id={`play-stage-${short.id}`}
                        type="button"
                        className="group absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-10px] focus-visible:outline-[#d7b07a]"
                        aria-label={`Reproduzir ${spoken(short.label)}`}
                        onClick={() => play(short.id, index)}
                      >
                        <PlayFace />
                      </button>
                    ) : null}
                  </PhoneShell>
                  <p className="mt-3 text-center font-heading text-sm font-bold text-paper">{short.label}</p>
                  {!isCenter ? (
                    <button
                      type="button"
                      className="absolute inset-0 z-20 rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b07a]"
                      aria-label={`Ver ${spoken(short.label)}`}
                      onClick={() => select(index)}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 lg:hidden">
        <div
          ref={scrollerRef}
          onScroll={onScrollerScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            aria-hidden
            className="w-[calc((100%-min(82vw,320px))/2-0.75rem)] shrink-0"
          />
          {SHORTS.map((short, index) => {
            const showPlayer = !desktop && playing === short.id;
            return (
              <div
                key={short.id}
                data-short-index={index}
                data-video-id={short.id}
                className="w-[min(82vw,320px)] shrink-0 snap-center snap-always"
              >
                <PhoneShell featured={index === active}>
                  {showPlayer ? (
                    <Player short={short} active />
                  ) : (
                    <>
                      <Thumbnail videoId={short.id} />
                      <button
                        id={`play-snap-${short.id}`}
                        type="button"
                        className="group absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-10px] focus-visible:outline-[#d7b07a]"
                        aria-label={`Reproduzir ${spoken(short.label)}`}
                        onClick={() => play(short.id, index)}
                      >
                        <PlayFace />
                      </button>
                    </>
                  )}
                </PhoneShell>
                <p className="mt-3 text-center font-heading text-base font-bold text-navy">{short.label}</p>
              </div>
            );
          })}
          <div
            aria-hidden
            className="w-[calc((100%-min(82vw,320px))/2-0.75rem)] shrink-0"
          />
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-center gap-2 px-4 sm:px-6">
        <p aria-live="polite" className="min-w-14 text-sm font-semibold text-navy">
          {active + 1} de {SHORTS.length}
        </p>
        <div className="flex items-center" role="group" aria-label="Escolher vídeo">
          {SHORTS.map((short, index) => (
            <button
              key={short.id}
              id={`dot-${index}`}
              type="button"
              aria-label={short.label}
              aria-current={index === active ? "true" : undefined}
              onClick={() => select(index)}
              className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  index === active ? "w-6 bg-navy" : "w-2 bg-sand"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
