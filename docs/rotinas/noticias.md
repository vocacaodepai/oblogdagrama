# Rotina: notícias do gramado

Horários: 07:40, 13:40 e 19:40 (Brasília). Nome do clone: `grama-noticias`.
Siga `docs/rotinas/comum.md` além do que está aqui. Se não houver notícia nova de verdade,
termine em silêncio, sem commit e sem mensagem. Publique no máximo 1 notícia por rodada.

## O que procurar (últimas 24 a 48 horas)

Use WebSearch (3 a 6 buscas) por fatos verificáveis sobre:
- pesquisas e anúncios da Embrapa, institutos agronômicos e universidades sobre gramas e gramados;
- novas variedades, produtores de grama e mercado de gramados e paisagismo no Brasil;
- clima que afeta gramado (geada, seca, onda de calor, chuva forte) e alertas oficiais de pragas;
- gramados de estádios e campos de futebol (troca de grama, grama híbrida, condição do gramado);
- lançamentos de equipamentos (cortadores, robôs, irrigação) e regras (crise hídrica e restrições de
  irrigação, normas de grama sintética);
- jardinagem e paisagismo no Brasil.

Só publique fato com `sourceUrl` de veículo ou fonte oficial que você abriu e conferiu. Nunca
invente, nunca reescreva boato. Compare com `grep -h sourceUrl content/news/*.ts` e pule o que já
foi coberto. Notícias nunca são apagadas.

## Escrever

- `npm run content:new -- noticia <slug>`. Slug curto com a keyword, sem acentos. Se a notícia for
  de ontem, ajuste `date` para a data do fato.
- Campos: title (55 a 75 caracteres, factual), summary (140 a 158, é a meta description),
  sourceName, sourceUrl (https), author "Equipe do Blog da Grama", content, faq opcional (2 ou 3).
- Capa (opcional): se a notícia tiver uma foto livre relevante, use a melhor que encaixar, de qualquer fonte,
  começando a busca pelo Wikimedia Commons (`node scripts/wikimedia-cover.mjs search` e `get`, ver
  `CLAUDE.md`). Sem foto boa, não coloque capa.
- content: no mínimo 900 palavras em HTML (p, h2, h3, ul, ol, li, a, strong, em, table, blockquote,
  div.callout-box), com pelo menos 3 `<h2>`. O fato em 2 parágrafos de abertura com a fonte citada e
  linkada (`rel="noopener noreferrer nofollow"`), um h2 de contexto, um h2 "Por que isso importa para
  o seu gramado" com análise própria, e mais um ou dois h2 de desdobramentos práticos. 3 a 6 links
  internos para artigos ou notícias existentes. Sem lista de fontes consultadas ao final.

## Informe

Só quando publicar: 1 ou 2 frases dizendo o que entrou, terminando com https://www.oblogdagrama.com.br
