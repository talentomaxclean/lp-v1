export const whatsappE164 = "5511919061005";
export const whatsappDisplay = "+55 11 91906-1005";
export const whatsappIntro =
  "Oi, Talento Max Clean. Quero um orçamento de higienização de estofado.";

export const instagramUrl = "https://www.instagram.com/talento_max_clean/";
export const instagramHandle = "@talento_max_clean";

/** Latest public post of @talento_max_clean. Fixed at build time. */
export const instagramPosts = ["DfuiXdpx2ZX"] as const;

export function whatsappHref(message: string = whatsappIntro) {
  return `https://wa.me/${whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#garantia", label: "Garantia" },
  { href: "/#metodo", label: "Como funciona" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#duvidas", label: "Dúvidas" },
] as const;

export const pieces = [
  "Sofás",
  "Poltronas",
  "Colchões",
  "Cadeiras",
  "Tapetes",
  "Almofadas",
  "Cabeceiras",
  "Couro",
] as const;

export const services = [
  {
    id: "higienizacao",
    index: "01",
    eyebrow: "",
    system: "Sistema VSC — Vonixx Smart Cleaning",
    title: "Higienização de estofados",
    image: "/images/servico-escova.jpg",
    imageAlt:
      "Técnico da Talento Max Clean escovando o estofado de um sofá claro com máquina.",
    width: 768,
    height: 1024,
    body: "Seu sofá está precisando de uma limpeza? A gente resolve! Vamos até sua casa ou empresa com os equipamentos necessários para cuidar dos seus estofados.\n\nFazemos a aspiração, escovação e extração da sujeira do tecido, utilizando o sistema VSC da Vonixx, que auxilia na eliminação de 99,99% de vírus, fungos e bactérias.\n\nAtendemos sofás, poltronas, cadeiras, colchões, tapetes, almofadas, cabeceiras e bancos de carro.",
    points: [
      "Não encharca",
      "Em casa ou no carro",
      "Proteção do VSC por até 3 meses",
    ],
    ask: "Oi, Talento Max Clean. Quero um orçamento de higienização.",
    cta: "Quero este serviço",
  },
  {
    id: "impermeabilizacao",
    index: "02",
    eyebrow: "Depois da limpeza",
    title: "Impermeabilização do estofado",
    image: "/images/servico-extratora.jpg",
    imageAlt:
      "Técnico da Talento Max Clean apoiando a ponteira extratora no sofá da sala.",
    width: 768,
    height: 1024,
    body: "Depois de deixar seu estofado limpinho, podemos oferecer um cuidado a mais: a impermeabilização.\n\nAplicamos o Pro Imper Base D'água, que cria uma barreira de proteção nas fibras do tecido, ajudando a evitar que líquidos como água, café e vinho sejam absorvidos com facilidade.",
    points: [
      "Mais proteção contra líquidos e pequenos acidentes.",
      "Menos risco de manchas no tecido.",
      "Preservação da aparência e do toque original do estofado.",
      "Aplicação somente após um teste para verificar se o tecido é adequado.",
    ],
    ask: "Oi, Talento Max Clean. Quero adicionar impermeabilização com Pro Imper Base D'água no orçamento.",
    cta: "Adicionar impermeabilização no meu orçamento",
  },
  {
    id: "couro",
    index: "03",
    eyebrow: "Outro cuidado",
    title: "Limpeza e hidratação de couro",
    image: null,
    imageAlt: "",
    width: 0,
    height: 0,
    body: "O couro precisa de um cuidado diferente dos tecidos. Por isso, fazemos a limpeza da superfície e das costuras e, em seguida, aplicamos um produto específico para hidratar e ajudar a evitar o ressecamento e as rachaduras.\n\nPara manter o couro bem cuidado, recomendamos esse serviço a cada 6 meses, aproximadamente.",
    pointsTitle: "Por que cuidar do couro?",
    points: [
      "Limpeza da superfície e das costuras.",
      "Hidratação para evitar o ressecamento e rachaduras.",
      "Manutenção recomendada a cada 6 meses.",
    ],
    ask: "Oi, Talento Max Clean. Quero um orçamento de limpeza de couro.",
    cta: "Quero este serviço",
  },
] as const;

export const steps = [
  {
    title: "Pré-avaliação",
    body: "Antes de começar, avaliamos o tecido, as manchas e as condições do estofado. Assim, entendemos o que ele precisa e qual o melhor tipo de limpeza.",
  },
  {
    title: "Testamos antes",
    body: "Antes de aplicar os produtos, fazemos um teste em uma pequena área para verificar se são compatíveis com o tecido.",
  },
  {
    title: "Aspiração",
    body: "Retiramos poeira, pelos e toda aquela sujeira solta que fica acumulada no estofado. Essa etapa prepara o tecido para receber a limpeza.",
  },
  {
    title: "Lavagem com extratora",
    body: "Utilizamos escovação, solução de limpeza e extração para remover a sujeira. Nessa etapa, o VSC também é aplicado, contribuindo para a higienização e deixando um aroma agradável.",
  },
  {
    title: "Cuidados adicionais",
    body: "Se o seu estofado precisar de um cuidado extra, também podemos incluir tratamento de manchas específicas, impermeabilização ou hidratação de couro no orçamento.",
  },
] as const;

export const principles = [
  {
    title: "Hora combinada",
    body: "Combinamos o melhor horário para você. Tudo organizado para que o atendimento aconteça sem surpresas.",
  },
  {
    title: "Tudo registrado",
    body: "Anotamos as condições do tecido, as manchas e os detalhes do serviço. Assim, você sabe exatamente o que foi feito.",
  },
  {
    title: "Seu sofá pronto para voltar a ser usado",
    body: "Ao finalizar, orientamos sobre o tempo de secagem para que você saiba quando poderá aproveitar seu sofá novamente.",
  },
] as const;

export const faqs = [
  {
    id: "encharcado",
    q: "O sofá fica encharcado?",
    a: "Não! Durante a limpeza, a extratora remove a água junto com a sujeira. Por isso, o sofá fica apenas úmido, e não encharcado. Em dias mais úmidos ou com tecidos mais grossos, pode demorar um pouquinho mais.",
  },
  {
    id: "tempo",
    q: "Quanto tempo dura a limpeza?",
    a: "Em média, a limpeza de um sofá de 3 lugares leva de 1h30 a 2h.\n\nEsse tempo pode aumentar quando há manchas mais difíceis ou quando precisamos limpar mais de uma peça.\n\nMas não se preocupe: avaliamos tudo antes e informamos uma previsão de duração junto com o orçamento.",
  },
  {
    id: "domicilio",
    q: "Vocês vão até a minha casa?",
    a: "Sim! Nós vamos até você, levando os equipamentos e produtos necessários para realizar a limpeza no local.\n\nPara confirmar se atendemos seu endereço, é só enviar seu bairro pelo WhatsApp. Assim, verificamos se a região está na nossa rota.\n\nNo atendimento, também registramos a placa do veículo na ficha de avaliação.",
  },
  {
    id: "pecas",
    q: "Quais peças vocês fazem?",
    a: "Fazemos a limpeza de diferentes tipos de estofados e superfícies:\nSofás e poltronas\nCadeiras\nColchões\nTapetes\nAlmofadas\nCabeceiras\nEstofados de couro\nBancos de carro",
  },
  {
    id: "manchas",
    q: "Que tipos de manchas vocês conseguem remover?",
    a: "Trabalhamos com diversos tipos de manchas, como café, suco, refrigerante, vinho, ferrugem, maquiagem, frutas, caneta, chocolate, sangue, urina, fezes, vômito, molho e graxa.\n\nTambém realizamos tratamentos para mau cheiro e problemas relacionados a fungos.\n\nCada mancha precisa ser avaliada, pois o resultado depende do tipo de tecido, da origem da sujeira e de há quanto tempo ela está ali.\n\nManchas antigas ou que já penetraram profundamente nas fibras podem não sair por completo. Mas pode ficar tranquilo: conversamos sobre as possibilidades e explicamos o que esperar antes de iniciar o serviço.",
  },
  {
    id: "cor",
    q: "A impermeabilização muda a cor do tecido?",
    a: "A impermeabilização não deve alterar a cor nem a aparência do tecido quando o material é adequado para receber o produto.\n\nAntes de aplicar, avaliamos o estofado e verificamos se o tecido é compatível com o tratamento.\n\nSe identificarmos qualquer risco ou incompatibilidade, não fazemos a aplicação. Nossa prioridade é cuidar do seu estofado com segurança.",
  },
  {
    id: "frequencia",
    q: "De quanto em quanto tempo é recomendado fazer novamente?",
    a: "A frequência depende do uso do estofado e da rotina da casa.\n\nO tratamento com VSC oferece proteção por até 3 meses. Em casas com crianças, pets ou pessoas com alergias, recomendamos esse intervalo para manter os cuidados em dia.\n\nJá os estofados de couro precisam de uma atenção diferente. A hidratação é recomendada aproximadamente duas vezes ao ano, para ajudar a evitar o ressecamento e as rachaduras.\n\nSe tiver dúvidas sobre o melhor intervalo para o seu estofado, a gente orienta você!",
  },
  {
    id: "orcamento",
    q: "Como faço para pedir um orçamento?",
    a: "É simples! É só chamar a gente pelo WhatsApp +55 11 91906-1005.\n\nPara preparar seu orçamento, envie:\nUma foto da peça que deseja limpar.\nO tipo de peça (sofá, colchão, poltrona etc.).\nSeu bairro ou região.\n\nCom essas informações, avaliamos o serviço e conversamos com você sobre o valor e os horários disponíveis.\n\nSerá um prazer cuidar do seu estofado!",
  },
] as const;
