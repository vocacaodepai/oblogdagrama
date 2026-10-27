# Rotina: 20 produtos por dia (categoria produtos)

Horário: 06:23 (Brasília), uma vez por dia. 20 artigos por rodada (10 comparativos + 10 reviews), sempre
`category: "produtos"`. Trabalhe em 4 lotes de 5 redatores em paralelo (subagentes): valide, escreva e
confira cada lote antes de abrir o seguinte; no fim, um único PR com tudo.
Nome do clone: `grama-produtos`. Siga `docs/rotinas/comum.md` além do que está aqui.
Leia no `CLAUDE.md` a seção "Padrão de artigo de produto" inteira (botões, aviso de afiliado, preço,
nota, taxonomia, título) e as seções "Imagens de produto" e "Botão de compra". O `check:content` barra
artigo de produto fora desse padrão.

## Pautas (produto real vendido na Amazon Brasil)

- 10 comparativos (`kind: "guia"`): 2 ou 3 produtos reais da MESMA categoria.
- 10 reviews de produto único (`kind: "review"`), de categorias diferentes dos comparativos do mesmo lote.
- Dentro do dia, cada lote usa subcategorias diferentes; uma subcategoria só se repete com modelos
  diferentes dos já publicados (confira com `grep -h "^  title:" content/articles/*.ts` e pelos ASINs).
  Nunca repita produto já coberto no site. Se faltar produto novo na pauta, vá para a próxima
  subcategoria da lista; nunca vire blog genérico de jardinagem (todo produto precisa servir ao gramado).
- Categorias de produto (varie de lote para lote e de dia para dia): cortador de grama
  elétrico, a bateria, a gasolina e manual; aparador e roçadeira; soprador e aspirador de folhas;
  mangueira, aspersor e kit de irrigação; temporizador de torneira; adubo para gramado; semente de
  grama; rastelo e escarificador; carrinho de mão; luvas e óculos de proteção; robô cortador; grama sintética.
- Use WebSearch para achar produtos bem avaliados (muitas avaliações, nota alta). Nunca invente
  produto, preço, ASIN ou especificação. Abra a página oficial do fabricante (WebFetch) para
  confirmar o nome exato do modelo, a ficha técnica e a foto oficial.

## Imagens (regra crítica)

- NUNCA use gerador de imagem por IA para capa ou foto de produto. Só foto real.
- Produto específico: foto oficial do fabricante (abaixo). O Wikimedia Commons (e as outras fontes livres) só entram para fotos de
  ambiente ou de categoria genérica (por exemplo, a capa de um comparativo de aspersores), nunca
  para foto de um modelo comercial.
- Baixe a foto oficial do site do FABRICANTE (nunca capture da página da Amazon). Salve em
  `public/images/products/<slug-do-produto>.<ext>`.
- Review com foto vertical: rode `node scripts/build-product-cover.mjs <entrada> <saida>` antes de usar.
- Comparativo: monte um card branco com sombra suave por produto, nome do modelo escrito por você
  embaixo, sobre fundo com leve gradiente (com sharp). Use também as fotos individuais como `<figure>`.
- Todo artigo leva `productCategory`, `productSubcategory` e nota (`review.score` ou `productScore`).
- Preencha `coverImage` (`url`, `width`, `height`, `credit` = fabricante + "(imagem oficial do produto)",
  `creditUrl` = página oficial do produto). Sem `fit` (padrão contain, com margem).

## Escrever

- `npm run content:new -- artigo <slug> produtos` cria o esqueleto.
- Review: preencha o bloco `review` completo (tool, score, criteria, pros, cons, price, bestFor,
  url = link de afiliado, affiliate: true, ctaLabel). Critérios: desempenho, facilidade, durabilidade,
  preço, avaliações reais.
- Botões `buy-btn`: mínimo 5 por artigo, texto "Comprar <produto> na Amazon agora ↗", link
  `https://www.amazon.com.br/dp/<ASIN real>?tag=oblogdagrama-20` com `rel="sponsored noopener noreferrer"`.
  Confirme que o produto existe de verdade na Amazon Brasil. Posições dos botões no `CLAUDE.md`.
- Faixa de preço e nota de compradores: pesquise na internet inteira (lojas, comparadores, site do
  fabricante, avaliações de várias lojas), não só na Amazon. A seção "Variação de preço" com valores em reais
  termina com: "Observação: esta faixa de preço foi consultada em lojas e sites da internet, não só na
  Amazon, e muda por vendedor, região e promoção." O botão é sempre "Comprar <produto> na Amazon agora ↗".
- Preço: h2 "Variação de preço" com faixa de mercado arredondada por produto, sem datas e sem preço no
  título, resumo, meta description ou botão.
- Aviso de afiliado: comparativo leva o callout "Transparência Amazon" uma vez no corpo; review único não
  (a página já mostra).
- Título variado entre os 20 artigos da rodada e entre rodadas.
- Nunca alegue teste físico pessoal: é análise a partir da ficha técnica oficial e das avaliações
  de compradores.
- Corpo: 1.200 a 1.800 palavras, 5 a 8 h2, 8 a 12 links internos. Tabela comparativa e seção
  final "qual comprar" nos comparativos.

## Informe final

Quantos produtos entraram (meta: 10 comparativos + 10 reviews) e quais trocaram de pauta, se lint/build/check-content passaram e o
link https://www.blogdagrama.com.br
