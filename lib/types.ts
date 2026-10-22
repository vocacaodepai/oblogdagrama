/**
 * Tipos compartilhados do conteúdo editorial.
 * Os artigos vivem em content/articles/<slug>.ts (um arquivo por artigo) e
 * são reunidos pelo índice gerado em content/articles/index.ts.
 */
export type FaqItem = { question: string; answer: string };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // índice da opção correta
  explanation: string;
};

export const categories = [
  {
    slug: "produtos",
    label: "Melhores Produtos",
    description:
      "Guias de compra e análises de cortador, aparador, adubo, semente e irrigação para o seu gramado.",
  },
  {
    slug: "tipos",
    label: "Tipos de Grama",
    description:
      "Esmeralda, São Carlos, batatais, bermuda, amendoim e outras: como cada grama se comporta no sol, na sombra, com pet e com pouca manutenção.",
  },
  {
    slug: "plantio",
    label: "Plantio e Implantação",
    description:
      "Preparo do solo, plantio em placas, em tapetes ou por sementes, e o que fazer nas primeiras semanas para a grama pegar.",
  },
  {
    slug: "cuidados",
    label: "Cuidados e Manutenção",
    description:
      "Rega, corte, adubação, aeração e calendário do ano: a rotina simples que mantém o gramado verde, denso e bonito.",
  },
  {
    slug: "problemas",
    label: "Pragas e Falhas",
    description:
      "Grama amarelada, manchas, formigas, ervas daninhas, musgo e falhas no gramado: como identificar a causa e recuperar.",
  },
  {
    slug: "sintetica",
    label: "Grama Sintética",
    description:
      "Quando vale a pena, quanto custa, como instalar e como cuidar da grama sintética em jardim, varanda, área gourmet e playground.",
  },
  {
    slug: "paisagismo",
    label: "Jardim e Paisagismo",
    description:
      "Ideias para jardim e quintal com gramado: projeto, caminhos, canteiros, iluminação e como combinar grama com plantas.",
  },
] as const;

export type Category = (typeof categories)[number]["slug"];

/**
 * Taxonomia de produto, usada só pelo filtro de `/categoria/produtos` (não
 * confundir com `categories` acima, que é a categoria editorial do artigo).
 * Cada `productSubcategories` aponta pra um `category` daqui.
 */
export const productCategories = [
  { slug: "corte-poda", label: "Corte e poda" },
  { slug: "rega-solo", label: "Rega e solo" },
  { slug: "adubo-sementes", label: "Adubo e sementes" },
  { slug: "ferramentas", label: "Ferramentas manuais" },
  { slug: "protecao", label: "Proteção (EPI)" },
] as const;

export type ProductCategory = (typeof productCategories)[number]["slug"];

export const productSubcategories = [
  { slug: "cortador", label: "Cortador de grama", category: "corte-poda" },
  { slug: "aparador-rocadeira", label: "Aparador e roçadeira", category: "corte-poda" },
  { slug: "tesoura-de-grama", label: "Tesoura de grama", category: "corte-poda" },
  { slug: "soprador", label: "Soprador de folhas", category: "corte-poda" },
  { slug: "aspersor", label: "Aspersor", category: "rega-solo" },
  { slug: "mangueira", label: "Mangueira", category: "rega-solo" },
  { slug: "esguicho", label: "Esguicho", category: "rega-solo" },
  { slug: "temporizador", label: "Temporizador de torneira", category: "rega-solo" },
  { slug: "kit-irrigacao", label: "Kit de irrigação", category: "rega-solo" },
  { slug: "regador", label: "Regador", category: "rega-solo" },
  { slug: "medidor-de-umidade", label: "Medidor de umidade", category: "rega-solo" },
  { slug: "adubo", label: "Adubo", category: "adubo-sementes" },
  { slug: "semente", label: "Semente de grama", category: "adubo-sementes" },
  { slug: "espalhador", label: "Espalhador", category: "adubo-sementes" },
  { slug: "pulverizador", label: "Pulverizador", category: "adubo-sementes" },
  { slug: "rastelo", label: "Rastelo", category: "ferramentas" },
  { slug: "aerador", label: "Aerador manual", category: "ferramentas" },
  { slug: "pa", label: "Pá e enxada", category: "ferramentas" },
  { slug: "kit-ferramentas", label: "Kit de ferramentas", category: "ferramentas" },
  { slug: "carrinho-de-mao", label: "Carrinho de mão", category: "ferramentas" },
  { slug: "luvas", label: "Luvas", category: "protecao" },
  { slug: "oculos", label: "Óculos de proteção", category: "protecao" },
  { slug: "botas", label: "Botas", category: "protecao" },
] as const;

export type ProductSubcategory = (typeof productSubcategories)[number]["slug"];


/** Dados estruturados de um review de produto (artigos com kind: "review"). */
export type ReviewData = {
  /** Nome do produto avaliado. */
  tool: string;
  /** Nota final de 0 a 10, com uma casa decimal. */
  score: number;
  /** Critérios avaliados, cada um com nota de 0 a 10. */
  criteria: { label: string; score: number }[];
  pros: string[];
  cons: string[];
  /** Preço em texto, ex.: "Grátis" ou "US$ 20/mês". */
  price: string;
  /** Para quem o produto é ideal, em uma frase. */
  bestFor: string;
  /** Link de compra/afiliado do produto (https). */
  url: string;
  /** Quantos dias o produto foi testado antes do review (só se o teste aconteceu de fato). */
  testedDays?: number;
  /** Se há links de afiliado no artigo (exibe o aviso). Padrão: false. */
  affiliate?: boolean;
  /** Texto do botão principal. Padrão: "Conhecer {tool}". */
  ctaLabel?: string;
};

export type Article = {
  slug: string;
  title: string;
  /** Título curto para a tag <title> (até ~60 caracteres). Padrão: title. */
  seoTitle?: string;
  excerpt: string;
  /** Meta description (120-160 caracteres). Padrão: excerpt. */
  metaDescription?: string;
  category: Category;
  /** Taxonomia de produto (só artigos de `category: "produtos"`), para o filtro em /categoria/produtos. */
  productCategory?: ProductCategory;
  productSubcategory?: ProductSubcategory;
  /**
   * Nota editorial de 0 a 10 (uma casa decimal) do produto recomendado, usada pra mostrar o selo
   * de nota no card de todo artigo de produto, comparativo ou review único. Em `kind: "review"`,
   * normalmente igual a `review.score`; em comparativo (`kind: "guia"`), é a nota do produto que
   * indicamos no fim do texto (não existe campo `review` nesse caso, por comparar mais de um produto).
   * Guia "como escolher" sem produto específico não leva nota.
   */
  productScore?: number;
  date: string; // ISO (AAAA-MM-DD)
  /** Data da última atualização editorial (AAAA-MM-DD). */
  updated?: string;
  /** Minutos de leitura declarados; o site recalcula pelo texto (ver readingTime). */
  readTime: number;
  imageQuery: string;
  seed: number;
  /**
   * Foto real do produto (self-hosted em /public/images/products), usada no lugar do
   * banco de imagens só para reviews de produto físico (categoria produtos).
   */
  coverImage?: {
    url: string;
    width: number;
    height: number;
    credit: string;
    creditUrl: string;
    /** Legado: toda capa preenche a caixa (object-cover). */
    fit?: "cover" | "contain";
  };
  content: string; // HTML
  /** Tipo do artigo. Padrão: "guia". */
  kind?: "guia" | "review";
  /** Voz autoral do blog. Padrão: a redação do site (lib/author.ts). */
  author?: string;
  /** Resumo em 3 pontos exibido logo após a capa. */
  keyPoints?: string[];
  /** Dados do review (só para kind: "review"). */
  review?: ReviewData;
  /** Perguntas frequentes exibidas em acordeão ao fim do artigo. */
  faq?: FaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim do artigo. */
  quiz?: QuizQuestion[];
  /** Fontes primárias citadas no texto (Embrapa, institutos agronômicos, universidades, manuais de fabricantes). */
  sources?: { label: string; url: string }[];
  /** Profissional que revisou o conteúdo (nome e registro), exibido no topo do artigo. */
  reviewedBy?: string;
};

export type NewsFaqItem = FaqItem;
export type NewsQuizQuestion = QuizQuestion;

export type NewsItem = {
  slug: string;
  title: string;
  /** Resumo curto (também vira meta description, cortada em ~158 caracteres). */
  summary: string;
  author: string;
  sourceName: string;
  sourceUrl: string;
  date: string; // ISO (AAAA-MM-DD)
  /**
   * Texto completo da notícia (HTML), escrito a partir da fonte e exibido em
   * /noticias/[slug]. Opcional só nas notícias antigas; todo item novo deve ter.
   */
  content?: string;
  /** Perguntas frequentes exibidas em acordeão ao fim da matéria. */
  faq?: NewsFaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim da matéria. */
  quiz?: NewsQuizQuestion[];
};
