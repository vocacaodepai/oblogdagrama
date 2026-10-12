"use client";

import { useState } from "react";

function chipClass(active: boolean, small = false): string {
  return `inline-flex items-center whitespace-nowrap rounded-lg border font-medium transition ${
    small ? "h-7 px-2.5 text-[11px]" : "h-8 px-3 text-xs"
  } ${
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
  }`;
}

/**
 * Filtro de /categoria/produtos: categoria de produto (Corte e poda, Rega e
 * solo...) e, dentro dela, o tipo específico (Cortador, Aspersor...).
 * Diferente do CategoryChips de artigo (tipos, plantio...), que não ajuda
 * quem está procurando um produto pra comprar. Filtra no navegador, sem recarregar a página, escondendo os
 * cards de `rootId` cujo `data-product-category`/`data-product-subcategory`
 * não bate com a seleção.
 */
export function ProductCategoryFilter({
  categories,
  subcategories,
  rootId,
  className = "",
}: {
  categories: { slug: string; label: string }[];
  subcategories: { slug: string; label: string; category: string }[];
  rootId: string;
  className?: string;
}) {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeSub, setActiveSub] = useState("todos");

  function apply(category: string, sub: string) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-product-category]").forEach((card) => {
      const catMatch = category === "todos" || card.dataset.productCategory === category;
      const subMatch = sub === "todos" || card.dataset.productSubcategory === sub;
      card.style.display = catMatch && subMatch ? "" : "none";
    });
  }

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setActiveSub("todos");
    apply(slug, "todos");
  }

  function selectSub(slug: string) {
    setActiveSub(slug);
    apply(activeCategory, slug);
  }

  const visibleSubs = subcategories.filter((s) => s.category === activeCategory);

  return (
    <div className={className}>
      <nav aria-label="Filtrar por categoria de produto" className="relative">
        <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
          <li className="snap-start">
            <button type="button" onClick={() => selectCategory("todos")} className={chipClass(activeCategory === "todos")}>
              Todos
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug} className="snap-start">
              <button type="button" onClick={() => selectCategory(c.slug)} className={chipClass(activeCategory === c.slug)}>
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {activeCategory !== "todos" && visibleSubs.length > 0 && (
        <nav aria-label="Filtrar por tipo de produto" className="relative mt-2">
          <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
            <li className="snap-start">
              <button type="button" onClick={() => selectSub("todos")} className={chipClass(activeSub === "todos", true)}>
                Todos
              </button>
            </li>
            {visibleSubs.map((s) => (
              <li key={s.slug} className="snap-start">
                <button type="button" onClick={() => selectSub(s.slug)} className={chipClass(activeSub === s.slug, true)}>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
