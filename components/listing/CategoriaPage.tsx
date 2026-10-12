import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getArticlesByCategory,
  getCategory,
  isCategory,
  productCategories,
  productSubcategories,
  site,
} from "@/lib/articles";
import { ScoreScaleNote } from "@/components/ScoreScaleNote";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { ArticleListing } from "./ArticleListing";
import { JsonLd } from "./JsonLd";
import { categoryIntros } from "./categoryIntros";
import { listingMetadata, pagedTitle } from "./metadata";
import { ARTICLES_PER_PAGE, countPages, slicePage } from "./paginate";
import { pageHref } from "@/components/Pagination";

/**
 * "produtos" mostra tudo numa página só: o filtro (ProductCategoryFilter) só
 * funciona dentro dos cards que já estão na página, então paginar quebraria
 * o filtro pra quem está numa página diferente do que busca.
 */
function perPageFor(slug: string, total: number): number {
  return slug === "produtos" ? Math.max(total, 1) : ARTICLES_PER_PAGE;
}

export function categoriaBase(slug: string): string {
  return `/categoria/${slug}`;
}

export function categoriaTotalPages(slug: string): number {
  const total = getArticlesByCategory(slug).length;
  return countPages(total, perPageFor(slug, total));
}

/** Params de todas as categorias (para a rota raiz). */
export function categoriaParams(): { slug: string }[] {
  return categories.map((c) => ({ slug: c.slug }));
}

export function categoriaMetadata(slug: string, page: number): Metadata {
  const category = getCategory(slug);
  if (!category) return {};
  return listingMetadata({
    title: pagedTitle(category.label, page),
    description: category.description,
    path: pageHref(categoriaBase(slug), page),
  });
}

export function CategoriaPage({ slug, page }: { slug: string; page: number }) {
  if (!isCategory(slug)) notFound();
  const category = getCategory(slug);
  if (!category) notFound();

  const all = getArticlesByCategory(slug);
  const perPage = perPageFor(slug, all.length);
  const totalPages = countPages(all.length, perPage);
  if (page > totalPages) notFound();
  const items = slicePage(all, page, perPage);
  const base = categoriaBase(slug);

  const productFilter =
    slug === "produtos"
      ? {
          categories: productCategories.filter((c) => all.some((a) => a.productCategory === c.slug)),
          subcategories: productSubcategories.filter((s) => all.some((a) => a.productSubcategory === s.slug)),
        }
      : undefined;
  const path = pageHref(base, page);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pagedTitle(category.label, page),
    description: category.description,
    url: absoluteUrl(path),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: all.length,
      itemListElement: items.map((a, i) => ({
        "@type": "ListItem",
        position: (page - 1) * perPage + i + 1,
        name: a.title,
        url: absoluteUrl(`/artigos/${a.slug}`),
      })),
    },
  };

  return (
    <>
      <JsonLd data={collection} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: category.label, path: base },
        ])}
      />
      <ArticleListing
        label="Categoria"
        title={category.label}
        description={category.description}
        intro={categoryIntros[slug]}
        items={items}
        total={all.length}
        page={page}
        totalPages={totalPages}
        basePath={base}
        active={slug}
        productFilter={productFilter}
        emptyTitle="Os primeiros artigos desta categoria estão a caminho"
        emptyText="Publicamos conteúdo novo todos os dias. Enquanto isso, veja o que já está no ar nas outras categorias."
      >
        {slug === "produtos" && <ScoreScaleNote />}
      </ArticleListing>
    </>
  );
}
