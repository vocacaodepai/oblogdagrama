const SCALE = [
  { range: "Até 6,9", label: "Vale com ressalva", text: "Resolve o básico, mas tem um ponto fraco real que pesa na decisão." },
  { range: "7,0 a 7,9", label: "Bom, compensa o preço", text: "Sem defeito grave; é a faixa onde cai a maioria das indicações daqui." },
  { range: "8,0 a 8,9", label: "Muito bom", text: "Se destaca de verdade dentro da própria categoria de produto." },
  { range: "9,0 a 10", label: "Excelente", text: "Poucos produtos chegam aqui; recomendação sem nenhuma ressalva." },
];

/**
 * Explica a régua de nota 0-10 dos produtos, reaproveitada na home (seção de
 * produtos) e no topo de /categoria/produtos. Nota
 * "quebrada" (ex.: 7,8) é intencional, não erro de arredondamento: mostra a
 * diferença real entre dois produtos que, em estrelas inteiras, pareceriam
 * empatados.
 */
export function ScoreScaleNote() {
  return (
    <details className="group mt-6 rounded-xl border border-border bg-surface">
      <summary
        aria-labelledby="como-funciona-a-nota"
        className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 sm:px-6 [&::-webkit-details-marker]:hidden"
      >
        <span>
          <span className="label-mono text-muted">Como ler a nota</span>
          <span id="como-funciona-a-nota" className="mt-0.5 block font-display text-base font-bold tracking-tight">
            Nota de 0 a 10, com casa decimal de propósito
          </span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </summary>
      <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          A nota não é a avaliação de estrelas da Amazon: é a nossa análise do produto, considerando preço,
          ficha técnica e o volume real de avaliação de quem já comprou. A casa decimal (ex.: 7,8) é
          proposital: mostra a diferença entre dois produtos que, arredondados, pareceriam iguais.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SCALE.map((s) => (
            <div key={s.range} className="rounded-lg border border-border bg-background p-3.5">
              <p className="font-mono text-xs font-semibold text-accent">{s.range}</p>
              <p className="mt-1 font-display text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
