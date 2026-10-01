/**
 * Geometria da marca "Três Folhas": três lâminas de grama nascendo de uma linha
 * de solo. As lâminas levam o gradiente verde-folha para lima; o solo herda a
 * cor do texto. viewBox 0 0 32 32.
 * Usada pelo componente <Logo/>, pelo favicon e pela imagem Open Graph.
 */
export const LOGO_VIEWBOX = "0 0 32 32";
export const LOGO_BLADES = [
  // folha central, a mais alta
  "M16 25.5C13.6 19 13.8 11 16 3.5C18.2 11 18.4 19 16 25.5Z",
  // folha esquerda, curvando para fora
  "M11.6 25.5C10 20.5 7.6 15.5 4.8 10.4C9.6 12.4 13.2 17.4 14.6 25.5Z",
  // folha direita (espelho da esquerda)
  "M20.4 25.5C22 20.5 24.4 15.5 27.2 10.4C22.4 12.4 18.8 17.4 17.4 25.5Z",
] as const;
export const LOGO_GROUND = "M4.5 28.4H27.5";
/** Do pé da folha (verde-folha) até a ponta (lima). */
export const LOGO_GRADIENT = { from: "#15803D", to: "#84CC16" };

/**
 * SVG da marca como string (para favicon, OG image e arquivos em public/).
 * `mono` desliga o gradiente; `background` desenha o quadrado arredondado atrás.
 */
export function logoIconSvg({
  size = 32,
  color = "#12301E",
  mono = false,
  background,
}: {
  size?: number;
  color?: string;
  mono?: boolean;
  background?: string;
} = {}): string {
  const fill = mono ? color : "url(#obdg-g)";
  const defs = mono
    ? ""
    : `<defs><linearGradient id="obdg-g" x1="0" y1="1" x2="0.35" y2="0"><stop offset="0" stop-color="${LOGO_GRADIENT.from}"/><stop offset="1" stop-color="${LOGO_GRADIENT.to}"/></linearGradient></defs>`;
  const bg = background ? `<rect width="32" height="32" rx="7" fill="${background}"/>` : "";
  const inner = background ? `<g transform="translate(3.2 3.2) scale(0.8)">` : "<g>";
  const blades = LOGO_BLADES.map((d) => `<path d="${d}" fill="${fill}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${LOGO_VIEWBOX}" role="img" aria-label="O Blog da Grama">${defs}${bg}${inner}${blades}<path d="${LOGO_GROUND}" stroke="${color}" stroke-width="2.4" stroke-linecap="round" fill="none"/></g></svg>`;
}
