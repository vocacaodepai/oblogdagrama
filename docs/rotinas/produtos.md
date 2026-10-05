# Rotina: 5 produtos por dia (categoria produtos)

Horário: 06:23 (Brasília), uma vez por dia. 5 artigos por rodada, sempre `category: "produtos"`.
Nome do clone: `grama-produtos`. Siga `docs/rotinas/comum.md` além do que está aqui.
Leia no `CLAUDE.md` as seções "Imagens de produto" e "Botão de compra".

## Pautas (produto real vendido na Amazon Brasil)

- 3 comparativos (`kind: "guia"`): 2 ou 3 produtos reais da MESMA categoria.
- 2 reviews de produto único (`kind: "review"`), de categorias diferentes dos comparativos da rodada.
- Categorias de produto (varie a cada rodada, nunca repita a da rodada anterior): cortador de grama
  elétrico, a bateria, a gasolina e manual; aparador e roçadeira; soprador e aspirador de folhas;
  mangueira, aspersor e kit de irrigação; temporizador de torneira; adubo para gramado; semente de
  grama; rastelo e escarificador; carrinho de mão; luvas e óculos de proteção; robô cortador; grama sintética.
- Use WebSearch para achar produtos bem avaliados (muitas avaliações, nota alta). Nunca invente
  produto, preço, ASIN ou especificação. Abra a página oficial do fabricante (WebFetch) para
  confirmar o nome exato do modelo, a ficha técnica e a foto oficial.

## Imagens (regra crítica)

- NUNCA use gerador de imagem por IA para capa ou foto de produto. Só foto real.
- Baixe a foto oficial do site do FABRICANTE (nunca capture da página da Amazon). Salve em
  `public/images/products/<slug-do-produto>.<ext>`.
- Review com foto vertical: rode `node scripts/build-product-cover.mjs <entrada> <saida>` antes de usar.
- Comparativo: monte um card branco com sombra suave por produto, nome do modelo escrito por você
  embaixo, sobre fundo com leve gradiente (com sharp). Use também as fotos individuais como `<figure>`.
- Preencha `coverImage` (`url`, `width`, `height`, `credit` = fabricante + "(imagem oficial do produto)",
  `creditUrl` = página oficial do produto). Sem `fit` (padrão contain, com margem).

## Escrever

- `npm run content:new -- artigo <slug> produtos` cria o esqueleto.
- Review: preencha o bloco `review` completo (tool, score, criteria, pros, cons, price, bestFor,
  url = link de afiliado, affiliate: true, ctaLabel). Critérios: desempenho, facilidade, durabilidade,
  preço, avaliações reais.
- Link de afiliado: sempre `https://www.amazon.com.br/dp/<ASIN real>?tag=oblogdagrama-20`, com
  `rel="sponsored noopener noreferrer"`. Confirme que o produto existe de verdade na Amazon Brasil.
- Callout de transparência no topo (Associado da Amazon, ganha comissão, preço muda, confira antes
  de comprar). Callout de segurança em máquina de corte.
- Nunca alegue teste físico pessoal: é análise a partir da ficha técnica oficial e das avaliações
  de compradores.
- Corpo: 1.200 a 1.800 palavras, 5 a 8 h2, 8 a 12 links internos. Tabela comparativa e seção
  final "qual comprar" nos comparativos.

## Informe final

Quais 5 produtos entraram (3 comparativos + 2 reviews), se lint/build/check-content passaram e o
link https://www.oblogdagrama.com.br
