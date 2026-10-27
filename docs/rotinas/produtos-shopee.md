# Rotina: 20 produtos da Shopee por dia (categoria produtos)

Mesma cadência e volume da rotina da Amazon (`docs/rotinas/produtos.md`): 20 artigos por rodada
(10 comparativos + 10 reviews), sempre `category: "produtos"` e `store: "shopee"`, em 4 lotes de 5
redatores em paralelo, um único PR no fim. Nome do clone: `grama-produtos-shopee`. Siga
`docs/rotinas/comum.md`. Leia no `CLAUDE.md` a seção "Padrão de artigo de produto" e a seção
"Produtos da Shopee" (as trocas em relação à Amazon). `npm run check:content` barra o que fugir.

Exige `SHOPEE_APP_ID` e `SHOPEE_APP_SECRET` no ambiente. Se `node scripts/shopee-offers.mjs search "aspersor"`
falhar por credencial ou API, pare e informe; nunca invente link, nem use link da Amazon no lugar.

## Pautas

- 10 comparativos (`kind: "guia"`): 2 ou 3 anúncios da MESMA categoria, lado a lado.
- 10 reviews (`kind: "review"`): um anúncio, de categorias diferentes dos comparativos do lote.
- Categorias e regras de variedade iguais às da rotina da Amazon (cortador, aparador e roçadeira,
  soprador, mangueira e irrigação, adubo, semente, rastelo, carrinho de mão, luvas e óculos, grama sintética...).
  Todo produto serve ao gramado. Nunca repita produto já coberto (confira `grep -l "s.shopee.com.br" content/articles/*.ts`
  e os `itemId`/links) nem repita título.
- Busca: `node scripts/shopee-offers.mjs search "<consulta>" --limit 15 --sort sales`. Prefira anúncio
  com centenas de vendas e nota ≥ 4,6. Confirme com `item <itemId>`.

## Capas (sem zoom nem corte)

Igual à Amazon: review com `node scripts/build-product-cover.mjs <foto> <slug>-capa.jpg`; comparativo com
`node scripts/build-comparativo-cover.mjs <slug>-capa.jpg "<foto>::<Nome>" ...`. `coverImage` aponta para a
`-capa.jpg`, com `width`/`height` reais e sem `fit: "cover"`. Abra a imagem e confira.

## Escrever

- `npm run content:new -- artigo <slug> produtos` cria o esqueleto; acrescente `store: "shopee"`,
  `productCategory`, `productSubcategory` e nota (`review.score` ou `productScore`).
- Texto, botões (mínimo 5), preço, aviso e foto exatamente como na seção "Produtos da Shopee" do `CLAUDE.md`.
- Nunca alegue teste físico: é análise do anúncio e das avaliações de compradores.
- Corpo: 1.200 a 1.800 palavras, 5 a 8 h2, 8 a 12 links internos. Comparativo com tabela e "qual comprar".
- Segurança: aparador, roçadeira e cortador levam aviso (manual, EPI, crianças e animais afastados,
  voltagem correta); produto químico: sem dose, remeta ao rótulo e ao agrônomo.

## Informe final

Quantos entraram (meta 10 + 10), o que trocou de pauta, se lint/build/check-content passaram e o link do PR.
