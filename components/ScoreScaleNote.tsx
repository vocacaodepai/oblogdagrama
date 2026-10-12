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
    <section aria-labelledby="como-funciona-a-nota" className="mt-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="label-mono text-muted">Como ler a nota</p>
      <h2 id="como-funciona-a-nota" className="mt-1 font-display text-lg font-bold tracking-tight sm:text-xl">
        Nota de 0 a 10, com casa decimal de propósito
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
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
    </section>
  );
}
