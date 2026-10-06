# Rotinas automáticas do Blog da Grama: regras comuns

Vale para as três rotinas (artigos, produtos, notícias). Cada rotina roda sozinha, sem
perguntar nada, e termina com o conteúdo publicado na `main` (deploy automático na Vercel).

## Ambiente e git

- Faça TODO o trabalho num clone próprio e isolado em `/tmp` (as rotinas podem rodar em
  paralelo): `git clone https://github.com/vocacaodepai/oblogdagrama /tmp/grama-<rotina>-$(date +%s)`.
  Remova o clone ao final.
- Branch da rodada: `git checkout -B claude/grama-<rotina>-$(TZ=America/Sao_Paulo date +%Y%m%d-%H%M) origin/main`,
  depois `npm ci --silent`.
- Datas sempre em `America/Sao_Paulo`. Nunca publique data futura.
- Antes de escrever, leia `CLAUDE.md` e `docs/padrao-editorial.md` inteiros. São a regra do jogo.
- Liste o que já existe (`ls content/articles content/news` e `grep -h "title:" content/articles/*.ts`).
  Não repita tema: rejeite a pauta se 3 ou mais palavras do slug novo já aparecem juntas em um slug existente.

## Validar (o build falha se o padrão não for cumprido)

1. `npm run check:content` com zero ERRO.
2. `npm run lint`.
3. `npm run build`.

Corrija sozinho até passar. Se sobrar erro real de build que você não conseguiu resolver, não
mescle e registre no informe.

## Segurança (toda rodada)

- **Escopo de arquivos, para todas as rotinas:** `content/` (artigos, notícias e índices gerados),
  `public/images/covers/` (capas de qualquer rotina) e, só na rotina de produtos,
  `public/images/products/`. Este parágrafo é a definição completa do escopo e prevalece sobre a
  frase resumida "trabalhe só em ..." que aparece no texto da rotina agendada: capas em
  `public/images/covers/` fazem parte do trabalho e não são "fora de escopo".

- `git diff --stat` só pode ter arquivos em `content/` (índices incluídos), em `public/images/covers/` (capas) e, na
  rotina de produtos, em `public/images/products/`. Nunca altere `docs/`, `CLAUDE.md`, `lib/`, `app/`,
  `components/`, `scripts/` nem configuração.
- Nenhum segredo no diff (Pexels, Pixabay, AdSense, qualquer chave). `.env.local` fica fora do git.
- Nenhum HTML com script, iframe ou handler (o `check-content` já barra).

## Publicar

- Commit em português, sem citar modelo ou IA na mensagem, com o rodapé de atribuição padrão.
- Push da branch, PR contra `main`, esperar os checks (Vercel, quando existir) ficarem verdes e
  mesclar por squash. Autorizado pelo usuário para estas rotinas: não pedir confirmação.
  Se o PR não tiver nenhum check configurado, mescle depois de lint, build e check-content passarem localmente.
- Conflito nos índices (`content/*/index.ts`): são gerados. Faça `git merge origin/main`, rode
  `npm run content:index` (nunca edite à mão), valide de novo e dê push.
- Depois do merge, confirme `merged: true` e remova o clone temporário.

## Regras de conteúdo que valem sempre

- Sem travessão (—), sem "Em resumo", sem "É importante ressaltar", sem "como já discutimos".
- Nada de dose de defensivo, fungicida ou herbicida; praga e doença são sempre "suspeita" que
  um agrônomo ou loja agropecuária confirma. Nada de promessa de resultado garantido.
- Artigo com máquina de corte ou produto químico traz aviso de segurança (rótulo, EPI,
  crianças e animais afastados).
- Hemisfério sul: estações e épocas de plantio invertidas em relação ao norte.
- Preço só com "verificado em dd/mm/aaaa" e a ressalva de que varia por região.
- Nunca mencione IA, Claude ou Anthropic no conteúdo do site.
- Capas: siga "Imagens de capa (ordem de busca)" no `CLAUDE.md`. A regra é a MELHOR foto que encaixar
  no assunto, de qualquer fonte; a busca começa pelo Wikimedia Commons
  (`node scripts/wikimedia-cover.mjs search` e `get`) e compara com as outras fontes. Sempre abra a
  foto e confira o tema. Todo `coverImage` leva autor, fonte e link.
- Cada URL externa é aberta com WebFetch e conferida antes de entrar (não abre = não entra).
- Sem crase nem `${}` dentro de `content`. Atributos HTML sempre entre aspas duplas.
