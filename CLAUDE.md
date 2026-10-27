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

## Imagens de capa (ordem de busca)

Regra: **a melhor foto que encaixar no assunto, de qualquer fonte.** A busca começa SEMPRE pelo
Wikimedia Commons (licenças livres e muita foto de espécie, equipamento e gramado), mas ele não
ganha por ser o Wikimedia: se outra fonte tiver uma foto que mostra melhor o tema do artigo, use a outra.

1. **Comece pelo Wikimedia Commons.** `node scripts/wikimedia-cover.mjs search "<consulta>"`
   (nome científico ou inglês rende mais: "Zoysia japonica lawn", "Stenotaphrum secundatum lawn",
   "artificial turf", "lawn mower"). O script só lista foto com licença livre (CC0, domínio público,
   CC BY, CC BY-SA), em paisagem e com 1.200 px ou mais. Para usar uma:
   `node scripts/wikimedia-cover.mjs get "File:Nome.jpg" <slug-do-artigo>` e cole o bloco `coverImage`
   que ele imprime (autor, licença e link da página do arquivo, que é a atribuição exigida).
   O Wikimedia limita requisições por IP: o script espera e tenta de novo sozinho; não repita em laço.
2. **Compare com as outras fontes** quando o Commons não tiver foto boa ou quando houver dúvida:
   Unsplash e Pixabay (se a sessão tiver conector ou chave), ou Pexels/Pixabay pelo `imageQuery`
   (o site busca no build, quando as chaves existem). Baixe a foto para
   `public/images/covers/<slug>.jpg` (1080 px de largura) e preencha `coverImage` com `fit: "cover"`,
   autor, fonte e link da página.
3. **Abra a imagem e confira**: tem que mostrar de verdade o assunto (a grama certa, o equipamento
   certo, o problema certo). Foto bonita que não é do tema perde para uma foto simples do tema.
4. Sem nenhuma foto adequada, o site usa a capa ilustrada de fallback. É melhor do que uma foto errada.

Produtos (categoria Produtos) seguem a regra própria abaixo: foto oficial do fabricante.
Nunca use imagem gerada por IA. Fotos de capa ficam em `public/images/covers/<slug>.jpg`.

## Padrão de artigo de produto (categoria Produtos)

Padrão replicado do Portal da AI (AI Indica), adaptado para grama. Vale para todo artigo de
`category: "produtos"` com produto específico e link de compra (comparativo ou review). O
`npm run check:content` barra o que fugir disso nos artigos publicados ou atualizados a partir de
11/10/2026. Guia "como escolher" sem produto específico e sem link da Amazon não leva nota nem botões.

**Dois formatos**
- **Comparativo** (`kind: "guia"`): 2 ou 3 produtos reais da mesma categoria, lado a lado, com tabela,
  nota por critério e "qual comprar". Sem campo `review`.
- **Review de produto único** (`kind: "review"`): um produto, com o bloco `review` completo (`tool`,
  `score`, `criteria`, `pros`, `cons`, `price`, `bestFor`, `url` de afiliado, `affiliate: true`, `ctaLabel`).

**Rótulo e listagem.** Comparativo (`isComparativo` em `lib/articles.ts`: `category: "produtos"`, `kind` diferente de
`review` e com botões de compra) leva o rótulo "Comparativos" e aparece só em `/reviews` (menu "Comparativos"),
nunca em "Melhores Produtos". Review de produto único e guia "como escolher" ficam em Melhores Produtos
(`/categoria/produtos`). Nada a preencher no artigo: o rótulo sai do próprio conteúdo.

**Nota 0-10 em todo artigo de produto.** O card mostra o selo de nota. Review: vem de `review.score`.
Comparativo: campo `productScore` (0 a 10, uma casa decimal) com a nota editorial do produto que o
texto recomenda no fim, não a média de estrelas da Amazon. A régua da nota é explicada em
`components/ScoreScaleNote.tsx` (home e topo de `/categoria/produtos`). Nota quebrada (7,8) é proposital.

**Taxonomia e filtro.** Todo artigo de produto precisa de `productCategory` e `productSubcategory`
(`lib/types.ts`: `productCategories` e `productSubcategories`). Eles alimentam o filtro de duas camadas
em `/categoria/produtos` (que mostra tudo numa página só). Produto de tipo novo: adicione a
subcategoria (e a categoria, se preciso) em `lib/types.ts` antes de publicar.

**Botão de compra (`buy-btn`).**
```html
<div class="buy-btn">
  <a href="https://www.amazon.com.br/dp/<ASIN>?tag=oblogdagrama-20" rel="sponsored noopener noreferrer" target="_blank">Comprar <Nome curto do produto> na Amazon agora ↗</a>
</div>
```
- O texto sempre cita a Amazon e nunca leva preço. No review, o botão do bloco de veredito usa
  `ctaLabel: "Comprar <Nome curto> na Amazon agora"` (sem a seta: o componente já acrescenta o ↗).
  `review.price` também é faixa: `"aprox. R$ 125 a R$ 210 (varia)"`, sem data e sem centavos.
- **Mínimo 5 botões por artigo**, espalhados, nunca mais de ~3 parágrafos longos seguidos sem um botão.
  Comparativo: logo abaixo da foto de cada produto (`<figure>`), depois da seção de preço e no veredito
  final. Review único: depois da introdução ou do veredito curto, depois de prós e contras, depois de
  "para quem vale a pena", depois da seção de preço e no fecho.
- `href` sempre com ASIN real e `tag=oblogdagrama-20`. Sem ASIN real, sem botão.

**Aviso de afiliado (uma vez só).** Review único: a página já mostra a caixa "Transparência" logo abaixo do
veredito (`ReviewDisclosure`), então o `content` NÃO leva o callout. Comparativo (sem `review`): leva o
callout `<div class="callout-box"><span class="callout-label">Transparência Amazon</span>...</div>` uma vez,
perto do início do texto (Associado da Amazon, comissão sem custo extra, o preço do dia aparece ao clicar).

**Preço: faixa de mercado, nunca preço exato.**
- Todo artigo de produto tem um h2 próprio, "Variação de preço" (ou título parecido), com a faixa
  aproximada de cada produto ("costuma variar de R$ X a R$ Y"): faixa larga e arredondada (±15%,
  múltiplos de R$ 5; R$ 10 acima de R$ 500), a partir de pesquisa de mercado (Amazon Brasil, Zoom,
  Buscapé, site do fabricante). Comparativo: uma faixa por produto e qual costuma sair mais em conta e
  qual tem melhor custo-benefício. Review: a faixa, o que faz o preço subir ou cair e o custo-benefício.
  A seção fecha dizendo que o preço do dia aparece ao clicar no botão de compra.
- A faixa de preço e a nota de compradores vêm da pesquisa na internet inteira (lojas, comparadores,
  site do fabricante, avaliações de várias lojas), nunca só da Amazon. Toda seção de preço com valores em
  reais leva a observação: "Observação: esta faixa de preço foi consultada em lojas e sites da internet,
  não só na Amazon, e muda por vendedor, região e promoção." O botão de compra continua sempre
  "Comprar <produto> na Amazon agora ↗".
- Sem data de verificação ("verificado em dd/mm"). Chame de "faixa de mercado", nunca "da Amazon". Se
  nenhuma fonte der o valor, escreva a seção sem números.
- Nunca preço com centavos. Nunca preço ou faixa no `title`, `seoTitle`, `excerpt`, `metaDescription`
  nem no botão. Nota e número de avaliações de compradores podem ser citados, sem data.

**Título variado.** `title` e `seoTitle` não podem cair sempre no molde "<produto> vale a pena?". Alterne:
superlativo e ano ("Os 3 melhores aspersores para gramado de 2026"), pergunta direta, comparação direta
("Tramontina ou Trapp: qual cortador elétrico comprar?"), uso ou cenário ("Mangueira para jardim pequeno: qual
não enrosca"), veredito antecipado.
Evite a mesma estrutura em dois artigos da mesma rodada.

**Imagens.** Foto de modelo comercial vem do site do fabricante (regra "Imagens de produto" abaixo). No
corpo do comparativo, as fotos em `<figure><img><figcaption>` saem com tamanho padronizado por CSS
(`.prose-article figure img`, caixa 4:3).

**Home.** O card grande da home preenche a altura da coluna ao lado (herói em altura total), como no Portal.

## Produtos da Shopee (categoria Produtos, `store: "shopee"`)

Mesmo padrão de artigo de produto acima (comparativo e review, nota, taxonomia, preço em faixa, mínimo 5
botões, título variado), com estas trocas. O artigo leva `store: "shopee"` e NUNCA mistura link da Amazon.
- **Origem do produto e do link:** só a API de afiliados da Shopee (`node scripts/shopee-offers.mjs search
  "<consulta>"`). O `offerLink` (`https://s.shopee.com.br/<código>`) é o link do botão; não monte link à mão.
  Credenciais em `SHOPEE_APP_ID` e `SHOPEE_APP_SECRET` (ambiente ou `.env.local`), nunca no repositório.
- **Escolha do anúncio:** vendas altas (centenas de vendidos), nota de 4,6 ou mais, vendedor com nome
  estável. A Shopee tem muita marca genérica: descreva o produto pelo que o anúncio informa (potência,
  voltagem, itens do kit) e deixe claro que o anúncio muda por vendedor. Nada de afirmar marca, garantia
  ou desempenho que o anúncio não traz. Equipamento elétrico: bivolt/voltagem e aviso de segurança.
- **Botão:** `<div class="buy-btn"><a href="<offerLink>" rel="sponsored noopener noreferrer" target="_blank">Comprar <Nome curto> na Shopee agora ↗</a></div>`.
  Review: `review.url` = offerLink, `affiliate: true`, `ctaLabel: "Comprar <Nome curto> na Shopee agora"`.
- **Aviso:** comparativo leva o callout "Transparência Shopee" (Afiliado da Shopee, comissão sem custo
  extra, preço e vendedor do dia aparecem ao clicar, análise a partir do anúncio e das avaliações de
  compradores, sem teste físico nosso). Review único: a página já mostra.
- **Preço:** faixa arredondada a partir de `priceMin`/`priceMax` da API e de outras lojas; mesma observação
  de faixa consultada em lojas e sites da internet. Nada de preço exato, centavos ou data.
- **Foto e capa (igual à da Amazon, sem zoom nem corte):** baixe a foto do anúncio com
  `node scripts/shopee-offers.mjs image <itemId> <slug>` (vai para `public/images/products/<slug>.jpg`).
  Review: `node scripts/build-product-cover.mjs <slug>.jpg <slug>-capa.jpg` (capa 16:9 com o fundo na cor da
  própria foto) e `coverImage.url` = a `-capa.jpg`. Comparativo: `node scripts/build-comparativo-cover.mjs
  <slug>-capa.jpg "<foto1>::<Nome 1>" "<foto2>::<Nome 2>" ["<foto3>::<Nome 3>"]` (um card branco por produto,
  nome do modelo embaixo). Em ambos, `coverImage` leva `width`/`height` reais da capa, SEM `fit: "cover"`;
  `credit` = "Imagem do anúncio na Shopee (<loja>)", `creditUrl` = `productLink`. Abra a capa e confira que o
  produto aparece inteiro; as fotos individuais seguem em `<figure>` no corpo.
- Rotina: `docs/rotinas/produtos-shopee.md`.

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

## Rotina editorial diária

Quatro rotinas agendadas publicam conteúdo sozinhas (artigos, produtos e notícias). As instruções
vivem em `docs/rotinas/` e valem como parte deste arquivo. Rotinas nunca alteram `docs/`,
`CLAUDE.md`, `lib/`, `app/`, `components/` nem `scripts/`: só `content/`, `public/images/covers/` e `public/images/products/`.

## Deploy

Vercel. Domínio de produção: `www.blogdagrama.com.br` (sem o "o" no começo; `oblogdagrama.com.br` não existe). O workflow do GitHub
Pages é só preview auxiliar.

@AGENTS.md
