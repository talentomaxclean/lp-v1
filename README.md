# Talento Max Clean

Landing page da Talento Max Clean: higienização com Sistema VSC da Vonixx, remoção de manchas, impermeabilização e limpeza de couro, em domicílio e em veículo.

A página descreve o que a equipe faz na visita, os três serviços e o comparador de antes e depois. Pedir orçamento abre um formulário e manda os dados no WhatsApp +55 11 91906-1005.

## Como rodar

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe em [http://localhost:3847](http://localhost:3847).

Para gerar a versão de produção:

```bash
npm run build
npm start -- --port 3847
```

## WhatsApp da equipe

O número publicado é +55 11 91906-1005, em `src/lib/site.ts`. Cada chamada de orçamento abre essa conversa.

## Seções

- Serviços: higienização com Sistema VSC, impermeabilização e couro
- Como funciona: inspeção, spot test, aspiração, escovação, extração e acabamento
- Resultados: arraste a divisão da foto para comparar antes e depois
- Equipe e dúvidas
- Orçamento: o botão abre um formulário e envia os dados no WhatsApp
