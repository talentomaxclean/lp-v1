"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { whatsappDisplay, whatsappHref } from "@/lib/site";

const seenKey = "tmc-exit-seen";
const quoteKey = "tmc-quote";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [fromDesktop, setFromDesktop] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(seenKey) || sessionStorage.getItem(quoteKey)) {
      return;
    }

    let shown = false;
    const show = (source: "desktop" | "mobile") => {
      if (shown || sessionStorage.getItem(quoteKey)) return;
      shown = true;
      sessionStorage.setItem(seenKey, "1");
      setFromDesktop(source === "desktop");
      setOpen(true);
    };

    let armed = false;
    const arm = () => {
      armed = true;
    };
    const onLeave = (event: MouseEvent) => {
      if (!armed || event.clientY > 0 || event.relatedTarget) return;
      show("desktop");
    };

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const onPop = () => show("mobile");
    if (coarse) {
      history.pushState({ tmcExit: true }, "");
      window.addEventListener("popstate", onPop);
    }

    document.addEventListener("pointerover", arm, { once: true });
    document.documentElement.addEventListener("mouseout", onLeave);

    return () => {
      document.removeEventListener("pointerover", arm);
      document.documentElement.removeEventListener("mouseout", onLeave);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  const href = whatsappHref();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-paper sm:max-w-md">
        {fromDesktop ? (
          <div className="flex items-end justify-center gap-3 px-6 pt-2">
            <Image
              src="/images/avatar-barba.jpg"
              alt="Avatar da equipe, técnico de barba"
              width={320}
              height={320}
              className="avatar-bob h-40 w-[46%] rounded-2xl object-cover object-[center_16%]"
            />
            <Image
              src="/images/avatar-cavanhaque.jpg"
              alt="Avatar da equipe, técnico de cavanhaque"
              width={320}
              height={320}
              className="avatar-bob avatar-bob-late h-40 w-[46%] rounded-2xl object-cover object-[center_12%]"
            />
          </div>
        ) : null}
        <DialogHeader>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            WhatsApp
          </p>
          <DialogTitle className="font-heading text-2xl font-extrabold text-navy">
            Quer o valor?
          </DialogTitle>
          <DialogDescription className="text-base leading-7">
            Manda uma foto da peça no {whatsappDisplay}. A gente responde com o
            preço e um horário.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {href ? (
            <Button
              nativeButton={false}
              className="h-12 rounded-full text-base"
              render={
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sessionStorage.setItem(quoteKey, "1")}
                />
              }
            >
              Chamar no WhatsApp
            </Button>
          ) : null}
          <Button
            variant="outline"
            className="h-12 rounded-full text-base"
            onClick={() => setOpen(false)}
          >
            Continuar no site
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
