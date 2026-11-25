import Image from "next/image";
import { CalendarDays, Car, Home as HomeIcon, MessageCircle, type LucideIcon } from "lucide-react";
import { BeforeAfter } from "@/components/before-after";
import { Shorts } from "@/components/shorts";
import { PartnerSeals } from "@/components/partner-seals";
import { QuoteButton, QuoteProvider } from "@/components/quote-dialog";
import { CleanAtmosphere } from "@/components/clean-atmosphere";
import { ExitIntent } from "@/components/exit-intent";
import { FaqList } from "@/components/faq-list";
import { MobileBar, SiteHeader } from "@/components/site-header";
import { StepFlow } from "@/components/step-flow";
import { WaLink } from "@/components/wa-link";
import {
  instagramHandle,
  instagramPosts,
  instagramUrl,
  nav,
  pieces,
  principles,
  services,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site";

export default function Home() {
  return (
    <QuoteProvider>
    <div id="topo" className="relative">
      <CleanAtmosphere />
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Services />
        <Method />
        <Guarantee />
        <Results />
        <Shorts />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <ExitIntent />
    </div>
    </QuoteProvider>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ExtractorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 14h8.5a2 2 0 0 1 2 2v1.2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14Z" />
      <circle cx="7.2" cy="20.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="20.2" r="1" fill="currentColor" stroke="none" />
      <path d="M14.2 15.2c1.6 0 2.2-2.6 4.6-2.6 1.2 0 2 .8 2 1.8V18" />
      <path d="M17.6 17.4h4.2a1 1 0 0 1 1 1v.6a1 1 0 0 1-1 1h-4.2a1 1 0 0 1-1-1v-.6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

const heroFacts: { icon: LucideIcon | typeof ExtractorIcon; title: string; detail: string }[] = [
  {
    icon: HomeIcon,
    title: "Em casa",
    detail: "Atendemos na sua casa, sem você precisar mover o sofá",
  },
  {
    icon: Car,
    title: "No carro",
    detail: "Higienização completa de bancos, com inspeção e ficha técnica",
  },
  {
    icon: CalendarDays,
    title: "Agenda",
    detail: "Agendamento rápido, segunda a sábado, no melhor horário pra você",
  },
  {
    icon: ExtractorIcon,
    title: "Extratora profissional",
    detail: "Lava, desinfeta e extrai toda a sujeira e umidade",
  },
];

function Hero() {
  return (
    <section className="px-4 pt-10 pb-16 sm:px-6 sm:pt-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="hero-in text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Higienização de estofados
          </p>
          <p className="hero-in delay-1 mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tide">
            Sistema VSC — Vonixx Smart Cleaning
          </p>
          <h1 className="hero-in delay-1 mt-4 max-w-xl font-heading text-4xl leading-[1.08] font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
            Seu sofá merece uma limpeza de verdade. E nós vamos até você!
          </h1>
          <div className="hero-in delay-2 mt-6 max-w-lg space-y-4 text-lg leading-8 text-muted-foreground">
            <p>
              Cuidamos da limpeza e conservação dos seus estofados com todo
              o cuidado que eles merecem. Vamos até você, levamos os
              equipamentos necessários e fazemos todo o serviço no conforto
              da sua casa.
            </p>
            <p>
              Utilizamos o sistema VSC da Vonixx para uma higienização
              cuidadosa e eficiente. Também trabalhamos com
              impermeabilização, hidratação de couro e limpeza de estofados
              automotivos.
            </p>
            <p>
              E para você ter ainda mais tranquilidade, nossos serviços
              contam com certificado de garantia de 90 dias.
            </p>
            <p>Seu estofado merece esse cuidado!</p>
          </div>
          <div className="hero-in delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <QuoteButton className="h-12 px-6 text-base whitespace-nowrap">
              <MessageCircle className="size-4" />
              Pedir orçamento no WhatsApp
            </QuoteButton>
            <a
              href="#metodo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-sand bg-paper px-6 text-base font-medium text-navy transition-colors hover:bg-white"
            >
              Ver como é feito
            </a>
          </div>
          <dl className="hero-in delay-4 mt-10 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-sand pt-6">
            {heroFacts.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="min-w-0">
                <Icon className="size-6 text-navy" aria-hidden />
                <dt className="mt-2 font-heading text-lg font-bold leading-tight text-navy">{title}</dt>
                <dd className="mt-1 text-sm leading-5 text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in delay-2 relative pb-8">
          <div className="shine-photo overflow-hidden rounded-[2rem]">
            <Image
              src="/images/servico-extratora-2.jpg"
              alt="Técnico agachado aplicando a ponteira extratora no assento de um sofá."
              width={768}
              height={1024}
              priority
              className="hero-photo h-auto w-full object-cover"
            />
          </div>
          <p className="floaty absolute top-4 left-4 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-medium tracking-wide text-primary-foreground">
            Na casa do cliente
          </p>
          <a
            href="#resultados"
            className="floaty-slow absolute -bottom-2 right-4 left-4 rounded-2xl border border-sand bg-paper/95 p-4 shadow-[0_18px_50px_-32px_rgba(2,20,66,0.9)] backdrop-blur sm:right-6 sm:left-auto sm:w-72"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
              Antes e depois
            </span>
            <span className="mt-1 block font-heading text-xl leading-snug font-bold text-navy">
              Arrasta pra ver o sofá limpo.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...pieces, ...pieces];
  return (
    <div className="clean-panel relative overflow-hidden border-y border-sand bg-navy text-primary-foreground">
      <div className="overflow-hidden py-4">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              data-marquee-clone={copy === 1 ? "" : undefined}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {row.slice(0, pieces.length).map((piece) => (
                <li key={`${copy}-${piece}`} className="flex items-center">
                  <span className="px-4 text-sm font-medium tracking-[0.14em] uppercase">
                    {piece}
                  </span>
                  <span aria-hidden className="text-brass">
                    ●
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rise max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Serviços
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl">
            Aproveite a visita para cuidar de todos os seus estofados!
          </h2>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const flipped = index === 1;
            return (
              <article
                key={service.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={flipped ? "lg:order-2" : undefined}>
                  {service.image ? (
                    <div className="photo-frame rise overflow-hidden rounded-[1.75rem]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={service.width}
                        height={service.height}
                        className="photo-zoom h-auto w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="clean-panel rise flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy p-8 text-primary-foreground sm:p-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        Couro
                      </p>
                      <div>
                        <p className="font-heading text-6xl leading-none font-extrabold sm:text-7xl">
                          6 meses
                        </p>
                        <p className="mt-4 max-w-sm text-lg leading-8 text-white/75">
                          Para manter o couro bem cuidado, recomendamos esse
                          serviço a cada 6 meses, aproximadamente.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`rise min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                  <p className="font-heading text-5xl font-extrabold text-sand">{service.index}</p>
                  {service.eyebrow ? (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-tide">
                      {service.eyebrow}
                    </p>
                  ) : null}
                  <h3
                    className={`mt-2 font-heading leading-tight font-extrabold text-navy ${
                      service.id === "impermeabilizacao"
                        ? "text-[clamp(1.65rem,8.4vw,2.25rem)]"
                        : "text-4xl"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {"system" in service && service.system ? (
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tide">
                      {service.system}
                    </p>
                  ) : null}
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                    {service.body.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {service.points.length > 0 ? (
                    <>
                    {"pointsTitle" in service && service.pointsTitle ? (
                      <p className="mt-6 font-heading text-lg font-bold text-navy">
                        {service.pointsTitle}
                      </p>
                    ) : null}
                    <ul
                      className={`grid gap-3 ${
                        "pointsTitle" in service && service.pointsTitle
                          ? "mt-3"
                          : "mt-6"
                      } ${
                        service.id === "impermeabilizacao" || service.id === "couro"
                          ? ""
                          : "sm:grid-cols-2"
                      }`}
                    >
                      {service.points.map((point, pointIndex) => (
                        <li
                          key={point}
                          className="point-row flex gap-3 text-sm leading-5 text-navy"
                          style={{ animationDelay: `${pointIndex * 70}ms` }}
                        >
                          <span
                            aria-hidden
                            className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-xs text-tide"
                          >
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    </>
                  ) : null}
                  <WaLink
                    message={service.ask}
                    className="mt-7 h-auto w-fit max-w-full min-h-11 whitespace-normal px-5 py-2.5 text-center text-sm leading-5"
                  >
                    <MessageCircle className="size-4 shrink-0" />
                    <span className="min-w-0 text-balance">{service.cta}</span>
                  </WaLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="clean-panel relative overflow-hidden bg-navy px-4 py-20 text-primary-foreground sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Passo a passo
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            Como cuidamos do seu estofado
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/75">
            Cada sofá merece atenção e cuidado. Por isso, seguimos algumas
            etapas para fazer uma limpeza cuidadosa, respeitando as
            condições e o tipo de tecido.
          </p>
          <StepFlow />
          <QuoteButton className="mt-8 h-auto max-w-full min-h-12 bg-paper px-6 py-3 text-base whitespace-normal text-navy hover:bg-white">
            <MessageCircle className="size-4 shrink-0" />
            Quero cuidar do meu sofá
          </QuoteButton>
        </div>
        <figure className="rise">
          <div className="photo-frame overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/equipe-extratora.jpg"
              alt="Dois técnicos da Talento Max Clean em corpo inteiro, de uniforme, com a extratora e o piso visíveis."
              width={1087}
              height={1447}
              className="h-auto w-full object-contain"
            />
          </div>
          <figcaption className="mt-4 text-sm text-white/65">
            A dupla, com a extratora.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="garantia" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="clean-panel rise flex min-h-[320px] flex-col justify-between rounded-[1.75rem] bg-navy p-8 text-primary-foreground sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b07a]">
            Certificado profissional
          </p>
          <div>
            <p className="font-heading text-6xl leading-none font-extrabold sm:text-7xl">90 dias</p>
            <p className="mt-4 max-w-sm text-lg leading-8 text-white/75">
              Ao finalizar o serviço, entregamos o Certificado de Garantia
              Profissional de 90 dias.
            </p>
          </div>
        </div>
        <div className="rise">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Garantia
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl">
            Garantia de 90 dias.
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              Nosso cuidado começa antes mesmo da limpeza. Fazemos uma
              avaliação do estofado, registramos o tipo de tecido, as
              condições, o nível de sujeira e as manchas. Você assina essa
              inspeção e recebe uma cópia.
            </p>
            <p>
              Ao finalizar o serviço, entregamos o Certificado de Garantia
              Profissional de 90 dias.
            </p>
          </div>
          <p className="mt-6 font-heading text-lg font-bold text-navy">
            O que essa garantia oferece?
          </p>
          <ul className="mt-3 grid gap-3">
            {[
              "Ação bactericida de 99,99% durante a aplicação.",
              "Produtos VSC da Vonixx: Extractus, Bactran e Finalizador.",
              "Serviço realizado por técnico certificado VSC e parceiro Kärcher.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-navy">
                <span
                  aria-hidden
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-xs text-tide"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <WaLink
            message="Oi, Talento Max Clean. Quero o serviço com a garantia de 90 dias."
            className="mt-7 h-11 px-5 text-sm"
          >
            <MessageCircle className="size-4" />
            Quero o serviço com garantia
          </WaLink>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="resultados" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rise">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Antes e depois
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl">
            Olha a diferença que uma boa limpeza faz!
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Acompanhe o resultado: de um lado, o sofá antes da limpeza; do
            outro, depois de receber nossos cuidados. Arraste a faixa e veja
            a transformação de perto!
          </p>
          <ul className="mt-8 space-y-5">
            {principles.map((item, index) => (
              <li key={item.title} className="point-row" style={{ animationDelay: `${index * 90}ms` }}>
                <p className="font-heading text-xl font-bold text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rise">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="equipe" className="bg-paper px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              Equipe
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl">
              Quem vai cuidar dos seus estofados.
            </h2>
            <p className="mt-4 text-lg leading-7 text-navy">
              Técnicos especializados em higienização e impermeabilização.
            </p>
          </div>
          <div className="rise max-w-xl lg:pb-2">
            <div className="space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                Nossa equipe vai até você, uniformizada, com extratora
                profissional e produtos VSC Vonixx, levando tudo o que é
                necessário para realizar o serviço com cuidado e atenção.
              </p>
              <p>
                Ao finalizar, você recebe a ficha de avaliação completa, com
                o registro das condições do seu estofado e do serviço
                realizado.
              </p>
            </div>
            <QuoteButton className="mt-7 h-auto max-w-full min-h-11 px-5 py-2.5 text-sm whitespace-normal">
              <MessageCircle className="size-4 shrink-0" />
              Quero agendar com vocês.
            </QuoteButton>
          </div>
        </div>
        <div className="mt-12">
          <p className="font-heading text-lg font-bold text-navy">Nossa equipe</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              {
                src: "/images/team-barba.jpg",
                name: "David",
                alt: "David, técnico da Talento Max Clean, de barba e braços cruzados, com o polo da empresa.",
              },
              {
                src: "/images/team-curto.jpg",
                name: "Jeferson",
                alt: "Jeferson, técnico da Talento Max Clean, de cabelo curto e braços cruzados, com o polo da empresa.",
              },
            ].map((person) => (
              <figure key={person.name} className="rise">
                <div className="photo-frame overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={1086}
                    height={1448}
                    className="photo-zoom aspect-[4/5] h-auto w-full object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-center font-heading text-xl font-bold text-navy">
                  {person.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="duvidas" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rise lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Dúvidas
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl">
            O que costumam perguntar.
          </h2>
          <WaLink className="mt-8 hidden h-12 px-5 text-sm lg:inline-flex">
            <MessageCircle className="size-4" />
            Tirar dúvida no WhatsApp
          </WaLink>
        </div>
        <div className="rise">
          <FaqList />
        </div>
      </div>
    </section>
  );
}

const chatCues = [
  ["01", "Seu bairro", "Para verificarmos se atendemos sua região."],
  ["02", "A peça", "Sofá, colchão, cadeira, tapete, couro ou banco de carro."],
  ["03", "Uma foto", "Ajuda a gente a entender melhor as condições da peça antes de preparar o orçamento."],
] as const;

function Contact() {
  return (
    <section id="contato" className="px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="clean-panel relative mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-navy text-primary-foreground lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rise p-8 sm:p-12 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b07a]">
            WhatsApp
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            Mande uma foto da peça e a gente prepara seu orçamento!
          </h2>
          <div className="mt-5 max-w-lg space-y-4 text-base leading-7 text-white/72">
            <p>Chame a gente pelo WhatsApp {whatsappDisplay}, de segunda a sábado.</p>
            <p>
              Envie uma foto, seu bairro e conte o que você gostaria de
              limpar. Assim, conseguimos avaliar o serviço e combinar o valor
              e o melhor horário para você.
            </p>
          </div>
          <WaLink className="mt-8 h-14 bg-paper px-7 text-base text-navy hover:bg-white">
            <MessageCircle className="size-5" />
            Abrir WhatsApp
          </WaLink>
        </div>
        <ol className="flex flex-col justify-center gap-6 border-t border-white/10 bg-white/[0.04] p-8 sm:p-12">
          {chatCues.map(([index, title, body], item) => (
            <li
              key={index}
              className="rise grid grid-cols-[auto_1fr] gap-4"
              style={{ animationRange: `entry ${item * 10}% entry ${48 + item * 8}%` }}
            >
              <span className="font-heading text-2xl font-extrabold text-[#d7b07a]">{index}</span>
              <div>
                <p className="font-heading text-xl font-bold">{title}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[1.75rem] border border-sand bg-paper px-6 py-5 sm:mt-8 sm:px-8">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="min-w-0 text-base leading-7 text-navy">
            {`As fotos dos serviços estão no Instagram. Segue ${instagramHandle}.`}
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors hover:bg-navy/90 sm:w-auto"
          >
            <InstagramIcon className="size-4" />
            Ver no Instagram
          </a>
        </div>
        <div className="mt-6 min-w-0 border-t border-sand pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Última postagem
          </p>
          <ul className="mt-4 min-w-0">
            {instagramPosts.map((shortcode) => (
              <li
                key={shortcode}
                className="w-full min-w-0 max-w-[540px] overflow-hidden rounded-2xl border border-sand bg-white"
              >
                <iframe
                  src={`https://www.instagram.com/p/${shortcode}/embed`}
                  title={`Postagem de ${instagramHandle} no Instagram`}
                  loading="lazy"
                  className="block h-[540px] w-full max-w-full border-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#c9a15b]/40 bg-navy px-4 pt-8 pb-28 text-primary-foreground sm:px-6 md:pb-12">
      <div className="mx-auto max-w-6xl border-b border-[#c9a15b]/35 pb-8">
        <PartnerSeals />
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src="/images/mark.png"
            alt=""
            width={64}
            height={64}
            className="size-16 rounded-full"
          />
          <p className="mt-4 font-heading text-2xl font-black tracking-[0.06em] uppercase">
            Talento Max Clean
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
            Higienização de estofado em casa e no carro, com o Sistema VSC da Vonixx.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <InstagramIcon className="size-4" />
            {`Instagram ${instagramHandle}`}
          </a>
        </nav>
      </div>
    </footer>
  );
}
