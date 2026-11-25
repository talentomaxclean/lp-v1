"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useOpenQuote } from "@/components/quote-dialog";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";

const ctaClass = "h-11 rounded-full px-5 text-sm font-medium tracking-wide";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openQuote = useOpenQuote();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[80] border-b border-sand/80 ${open ? "bg-cream" : "bg-cream/90 backdrop-blur-md"}`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/mark.png"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full"
            priority
          />
          <span className="leading-none">
            <span className="block font-heading text-[13px] font-black tracking-[0.06em] text-navy uppercase">
              Talento Max Clean
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-brass">
              Estofados
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm text-foreground/80">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className={`${ctaClass} hidden sm:inline-flex`}
            onClick={openQuote}
          >
            Pedir orçamento
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-11 rounded-full border-sand bg-paper lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </Button>
        </div>
      </div>
      <div className="scroll-progress pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brass" />

      {mounted && open
        ? createPortal(
            <div
              id="menu-mobile"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-0 z-[70] flex flex-col bg-cream pt-16 lg:hidden"
            >
              <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Seções">
                {nav.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-link border-b border-sand py-4 font-heading text-3xl font-bold text-navy"
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="px-6 pt-2 pb-8">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openQuote();
                  }}
                  className="menu-link inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy text-base font-medium text-primary-foreground"
                  style={{ animationDelay: `${nav.length * 55}ms` }}
                >
                  <MessageCircle className="size-4" />
                  Pedir orçamento
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}

export function MobileBar() {
  const [hidden, setHidden] = useState(false);
  const openQuote = useOpenQuote();

  useEffect(() => {
    const target = document.getElementById("contato");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div
      data-mobile-bar
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-paper/95 p-3 backdrop-blur md:hidden"
    >
      <button
        type="button"
        onClick={openQuote}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy text-base font-medium text-primary-foreground"
      >
        <MessageCircle className="size-4" />
        Pedir orçamento
      </button>
    </div>
  );
}
