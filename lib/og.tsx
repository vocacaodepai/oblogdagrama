import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO_BLADES, LOGO_GROUND } from "@/lib/logo";

export const OG_SIZE = { width: 1200, height: 630 };

// Fontes lidas uma vez por processo de build (assets/fonts, licença OFL).
const fontsPromise = Promise.all([
  readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-700.ttf")),
  readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-500.ttf")),
  readFile(join(process.cwd(), "assets/fonts/JetBrainsMono-500.ttf")),
]);

function LogoMark({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <defs>
        <linearGradient id="og-g" x1="0" y1="1" x2="0.35" y2="0">
          <stop offset="0" stopColor="#22C55E" />
          <stop offset="1" stopColor="#BEF264" />
        </linearGradient>
      </defs>
      {LOGO_BLADES.map((d) => (
        <path key={d} d={d} fill="url(#og-g)" />
      ))}
      <path d={LOGO_GROUND} stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/**
 * Imagem Open Graph padrão do site (1200x630): fundo escuro, brilho da marca,
 * rótulo em mono, título grande em Space Grotesk e rodapé com domínio/autor.
 */
export async function renderOgImage({
  title,
  eyebrow,
  footer = "oblogdagrama.com.br",
  byline,
}: {
  title: string;
  /** Rótulo pequeno acima do título (categoria, "Notícia", "Review"). */
  eyebrow?: string;
  footer?: string;
  /** Texto à direita no rodapé (ex.: "Por Equipe do Blog da Grama · 27 set 2026"). */
  byline?: string;
}) {
  const [bold, medium, mono] = await fontsPromise;
  const size = title.length > 90 ? 48 : title.length > 60 ? 56 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: "#0C1A11",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(34,197,94,0.45) 0%, rgba(34,197,94,0) 45%), radial-gradient(circle at 15% 95%, rgba(190,242,100,0.28) 0%, rgba(190,242,100,0) 40%)",
          color: "#ECF5EA",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <LogoMark />
            <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1, color: "#FFFFFF" }}>
              O Blog da Grama
            </span>
          </div>
          {eyebrow && (
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 20,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#86EFAC",
                border: "1px solid rgba(141,184,245,0.5)",
                borderRadius: 8,
                padding: "8px 14px",
              }}
            >
              {eyebrow}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: size,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            color: "#FFFFFF",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            color: "#A7BDAF",
          }}
        >
          <span>{footer}</span>
          {byline && <span>{byline}</span>}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
