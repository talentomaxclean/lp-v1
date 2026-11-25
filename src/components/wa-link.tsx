import type { ReactNode } from "react";
import { cn } from "cn";
import { whatsappHref } from "@/lib/site";

export function WaLink({
  children,
  className,
  message,
}: {
  children: ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "wa-glow inline-flex items-center justify-center gap-2 rounded-full bg-navy font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-navy/90",
        className,
      )}
    >
      {children}
    </a>
  );
}
