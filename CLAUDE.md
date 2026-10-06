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

Três rotinas agendadas publicam conteúdo sozinhas (artigos, produtos e notícias). As instruções
vivem em `docs/rotinas/` e valem como parte deste arquivo. Rotinas nunca alteram `docs/`,
`CLAUDE.md`, `lib/`, `app/`, `components/` nem `scripts/`: só `content/`, `public/images/covers/` e `public/images/products/`.

## Deploy

Vercel (a configurar). Domínio previsto: `www.oblogdagrama.com.br`. O workflow do GitHub
Pages é só preview auxiliar.

@AGENTS.md
