# Rotina: 5 artigos por dia

Horário: 05:23 (Brasília), uma vez por dia. 5 artigos por rodada. Nome do clone: `grama-artigos`.
Siga `docs/rotinas/comum.md` além do que está aqui.

## Pautas

- Uma por categoria, alternando o conjunto a cada dia:
  - dias ímpares: `tipos`, `plantio`, `cuidados`, `problemas`, `sintetica`;
  - dias pares: `cuidados`, `problemas`, `paisagismo`, `plantio`, `tipos`.
  Se um tema não render, troque a categoria, mas nunca duas da mesma categoria com o mesmo assunto.
- A categoria `produtos` não entra aqui: tem rotina própria.
- Intenção de busca real de quem tem ou quer ter um gramado no Brasil: escolher a grama,
  plantar, adubar, regar, cortar, recuperar falhas, controlar ervas daninhas, grama sintética,
  grama com pet, grama na sombra, gramado em condomínio, campo de futebol. Varie o formato do
  título (guia, comparativo, "vale a pena?", "melhores X", passo a passo, calendário).
- Considere a época do ano no hemisfério sul (plantio, adubação, geada, seca, chuva).
- Use WebSearch para checar o que mudou recentemente (preços, variedades, orientações da
  Embrapa e de institutos agronômicos) e cite a fonte.

## Escrever

- `npm run content:new -- artigo <slug> <categoria>` cria o esqueleto com data de hoje e `seed`.
  Veja 2 artigos existentes como modelo e leia `lib/types.ts` para os campos.
- Campos: title (50 a 65 caracteres, keyword no início), seoTitle (até 60), excerpt e
  metaDescription (140 a 158), imageQuery (3 ou 4 palavras concretas em inglês, diferente das já
  usadas), keyPoints (3), sources (2 a 5), content, faq (4 a 6), readTime = Math.max(1, Math.round(palavras/200)).
- Corpo: 1.200 a 1.800 palavras de texto real. Abertura de 2 parágrafos (o primeiro responde a
  busca em 40 a 60 palavras). 5 a 8 h2 com 150 a 250 palavras. Tabela ou checklist. Exemplo
  brasileiro com números (m², cm, kg, R$ aproximado). Seção "Erros comuns". Seção "Quando chamar
  um profissional" nos temas de praga, doença ou instalação. Fechamento com CTA. Máximo 3 callouts.
- Links: 8 a 12 links internos distintos para slugs que existem (âncora natural, espalhados) e 2 a 4
  externos para fontes primárias (Embrapa, institutos agronômicos, universidades, MAPA, Inmetro,
  fabricantes), cada URL aberta e conferida.
- Capa: busque PRIMEIRO no Wikimedia Commons com `node scripts/wikimedia-cover.mjs search "<consulta>"`,
  baixe com `get`, cole o `coverImage` no artigo e abra a imagem para conferir que mostra o assunto
  (ordem completa no `CLAUDE.md`). Sem foto boa no Commons, deixe só o `imageQuery`.
- Não use `kind: "review"` nem link de afiliado nesta rotina.

## Informe final

Em poucas frases, sem travessão: quantos artigos entraram e em quais categorias, se
lint/build/check-content passaram, uma linha da checagem de segurança e o link
https://www.oblogdagrama.com.br
