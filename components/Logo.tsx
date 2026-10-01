import Link from "next/link";
import { LOGO_BLADES, LOGO_GRADIENT, LOGO_GROUND, LOGO_VIEWBOX } from "@/lib/logo";

/** Ícone da marca (três folhas de grama). O solo herda a cor do texto; as folhas usam o gradiente. */
export function LogoIcon({
  size = 28,
  className = "",
  mono = false,
  id = "obdg",
}: {
  size?: number;
  className?: string;
  mono?: boolean;
  /** Prefixo único quando houver mais de um ícone na página (gradiente por id). */
  id?: string;
}) {
  const gradientId = `${id}-logo-gradient`;
  const bladeFill = mono ? "currentColor" : `url(#${gradientId})`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {!mono && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="0.35" y2="0">
            <stop offset="0" stopColor={LOGO_GRADIENT.from} />
            <stop offset="1" stopColor={LOGO_GRADIENT.to} />
          </linearGradient>
        </defs>
      )}
      {LOGO_BLADES.map((d) => (
        <path key={d} d={d} fill={bladeFill} />
      ))}
      <path d={LOGO_GROUND} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Marca horizontal: ícone + "O Blog da Grama" (com "Grama" em gradiente). */
export function Logo({
  size = 28,
  className = "",
  href = "/",
  mono = false,
  id = "obdg",
  priority = false,
}: {
  size?: number;
  className?: string;
  href?: string | null;
  mono?: boolean;
  id?: string;
  /** Usa <h1>-like peso visual no header; só estilo, não muda a semântica. */
  priority?: boolean;
}) {
  const inner = (
    <>
      <LogoIcon size={size} mono={mono} id={id} className="shrink-0" />
      <span
        className={`font-display font-bold tracking-tight ${priority ? "text-[16px] min-[400px]:text-[18px] sm:text-[20px]" : "text-[18px]"}`}
      >
        O Blog da{" "}
        <span className={mono ? "" : "text-gradient"}>Grama</span>
      </span>
    </>
  );
  const cls = `inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-foreground ${className}`;
  if (href === null) return <span className={cls}>{inner}</span>;
  return (
    <Link href={href} className={cls} aria-label="O Blog da Grama, página inicial">
      {inner}
    </Link>
  );
}
