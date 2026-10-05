## Categorização editorial

Categorias (`lib/types.ts`): `produtos` (Melhores Produtos), `tipos`, `plantio`, `cuidados`,
`problemas`, `sintetica` e `paisagismo`.

O blog é sobre GRAMA: tipos, plantio, manutenção, problemas, grama sintética, produtos e
jardim com gramado. A monetização é por AdSense e afiliado (produtos). Toda pauta precisa
voltar para a grama; não vire blog genérico de jardinagem.

- **Melhores Produtos** (`category: "produtos"`): guia de compra ("como escolher") ou análise de
  produto (cortador, aparador, adubo, semente, irrigação), com link de afiliado Amazon,
  `kind: "review"` e nota por critério quando houver produto específico.
- As demais são guias informativos, sem link de compra.

O padrão editorial completo está em `docs/padrao-editorial.md`. Leia antes de escrever.

## Regras de segurança do conteúdo

- O site informa e orienta. Nunca receita defensivo agrícola, nunca indica dose de produto
  químico, nunca promete resultado garantido e nunca substitui visita de agrônomo.
- Praga ou doença é sempre "suspeita": mandar levar amostra a um agrônomo ou loja agropecuária.
- Artigo com máquina de corte ou produto químico traz aviso de segurança (rótulo, EPI,
  crianças e animais afastados).
- Afirmação técnica tem fonte (Embrapa, institutos agronômicos, universidades, fabricantes).
  Todo link externo é aberto e conferido antes de entrar.
- Nunca invente revisor. `author.reviewer` em `lib/author.ts` fica vazio até existir um
  profissional real (nome + registro CREA); com ele vazio, o selo de revisão não aparece.

## Identidade visual

- Marca "Três Folhas": três lâminas de grama saindo de uma linha de solo, em gradiente
  verde-folha (`#15803D`) para lima (`#84CC16`). Geometria em `lib/logo.ts`; rode
  `node scripts/build-brand-assets.mjs` para regenerar `app/icon.svg` e `public/logo*.svg`.
- Paleta (tokens em `app/globals.css`): fundo `#F6F9F1`, texto `#12301E`, destaque `#15803D`,
  secundária `#4D7C0F`, CTA âmbar `#B45309`. Tema escuro: fundo `#0C1A11`, destaque `#4ADE80`.
- Tipografia: Nunito (títulos) e Inter (texto).

## Imagens de produto (categoria Produtos)

Nunca usar gerador de imagem por IA para capa ou foto de produto: a IA erra marca e logo.
Use foto oficial do fabricante em `public/images/products/`, referenciada por `coverImage`,
e `node scripts/build-product-cover.mjs <entrada> <saida>` para fotos verticais.

## Botão de compra (categoria Produtos)

```html
<div class="buy-btn">
  <a href="https://www.amazon.com.br/dp/<ASIN>?tag=oblogdagrama-20" rel="sponsored noopener noreferrer" target="_blank">Comprar <Produto> agora ↗</a>
</div>
```

Tag de afiliado da Amazon Brasil: `oblogdagrama-20` (também em `site.amazonTag`, `lib/articles.ts`).
Use sempre `rel="sponsored noopener noreferrer"` e o aviso de afiliado visível no artigo.
Link só com `/dp/<ASIN>` + `?tag=oblogdagrama-20`, sem parâmetros extras de rastreio.

## Deploy

Vercel (a configurar). Domínio previsto: `www.oblogdagrama.com.br`. O workflow do GitHub
Pages é só preview auxiliar.

@AGENTS.md
