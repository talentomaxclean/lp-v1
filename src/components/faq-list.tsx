"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <Accordion defaultValue={["encharcado"]} className="border-t border-sand">
      {faqs.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-sand">
          <AccordionTrigger className="py-5 font-heading text-xl font-bold text-navy hover:no-underline sm:text-2xl">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl space-y-4 pb-5 text-base leading-7 text-muted-foreground">
            {item.a.split("\n\n").map((block) => {
              const lines = block.split("\n");
              if (lines.length > 1) {
                return (
                  <div key={block} className="space-y-2">
                    <p>{lines[0]}</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {lines.slice(1).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return <p key={block}>{block}</p>;
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
