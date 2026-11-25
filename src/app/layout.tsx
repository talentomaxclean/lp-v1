import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Talento Max Clean — Higienização de estofados em domicílio",
  description:
    "Higienização de estofados com Sistema VSC da Vonixx, remoção de manchas, impermeabilização, limpeza de couro e garantia profissional de 90 dias. Atendimento em domicílio e em veículo.",
  applicationName: "Talento Max Clean",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Talento Max Clean",
  description:
    "Higienização, remoção de manchas, impermeabilização e limpeza de couro em estofados, em domicílio e em veículo.",
  areaServed: "Atendimento em domicílio",
  serviceType: [
    "Higienização de estofados",
    "Remoção de manchas em estofados",
    "Impermeabilização de estofados",
    "Limpeza e hidratação de couro",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
