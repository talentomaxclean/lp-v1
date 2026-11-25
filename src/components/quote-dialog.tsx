"use client";

import { MessageCircle } from "lucide-react";
import {
  createContext,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { whatsappHref } from "@/lib/site";
import { cn } from "cn";

const QuoteContext = createContext<(() => void) | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <QuoteContext.Provider value={() => setOpen(true)}>
      {children}
      <QuoteForm open={open} onOpenChange={setOpen} />
    </QuoteContext.Provider>
  );
}

export function QuoteButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const open = useContext(QuoteContext);
  return (
    <button
      type="button"
      onClick={() => open?.()}
      className={cn(
        "wa-glow inline-flex items-center justify-center gap-2 rounded-full bg-navy font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-navy/90",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function useOpenQuote() {
  const open = useContext(QuoteContext);
  return () => open?.();
}

const field =
  "mt-1.5 w-full rounded-xl border border-sand bg-white px-3 py-2.5 text-base text-navy outline-none focus:border-tide";

function QuoteForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<"veicular" | "residencial" | "">("");
  const [revestimento, setRevestimento] = useState("");
  const [sujeira, setSujeira] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (nome.trim().length < 2) next.nome = "Falta o nome.";
    if (tipo !== "veicular" && tipo !== "residencial") next.tipo = "Marca se é carro ou casa.";
    if (!revestimento.trim()) next.revestimento = "Pode escrever Não sei.";
    if (!sujeira.trim()) next.sujeira = "Pode escrever Não sei.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "Oi, Talento Max Clean. Quero um orçamento.",
      "",
      `Nome: ${nome.trim()}`,
      `Tipo de estofado: ${tipo === "veicular" ? "Veicular" : "Residencial"}`,
      `Revestimento: ${revestimento.trim()}`,
      `Sujeira: ${sujeira.trim()}`,
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-paper sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-extrabold text-navy">
            Pedir orçamento
          </DialogTitle>
          <DialogDescription className="text-base leading-7">
            Preenche aqui. O WhatsApp abre com o texto pronto, é só enviar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
          <label className="block text-sm font-semibold text-navy">
            Qual seu nome
            <input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              autoComplete="name"
              className={field}
            />
            {errors.nome ? <span className="mt-1 block font-normal text-destructive">{errors.nome}</span> : null}
          </label>

          <fieldset>
            <legend className="text-sm font-semibold text-navy">Tipo de estofado</legend>
            {errors.tipo ? <p className="mt-1 text-sm text-destructive">{errors.tipo}</p> : null}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(
                [
                  ["veicular", "Veicular"],
                  ["residencial", "Residencial"],
                ] as const
              ).map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-2 rounded-xl border border-sand bg-white px-3 py-3 text-sm text-navy"
                >
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipo === value}
                    onChange={() => setTipo(value)}
                    className="accent-navy"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block text-sm font-semibold text-navy">
            Qual tipo de revestimento?
            <input
              value={revestimento}
              onChange={(event) => setRevestimento(event.target.value)}
              placeholder="Não sei, Veludo, Algodão, Suede..."
              className={field}
            />
            {errors.revestimento ? (
              <span className="mt-1 block font-normal text-destructive">{errors.revestimento}</span>
            ) : null}
          </label>

          <label className="block text-sm font-semibold text-navy">
            Qual tipo de sujeira?
            <input
              value={sujeira}
              onChange={(event) => setSujeira(event.target.value)}
              placeholder="Não sei, Suco, Café, Fungo, Vinho"
              className={field}
            />
            {errors.sujeira ? (
              <span className="mt-1 block font-normal text-destructive">{errors.sujeira}</span>
            ) : null}
          </label>

          <Button type="submit" className="h-12 rounded-full text-base">
            <MessageCircle className="size-4" />
            Enviar no WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
