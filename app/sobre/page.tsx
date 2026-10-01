import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { categories, site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/sobre";
const TITLE = "Sobre o Blog da Grama";
const DESCRIPTION =
  "O Blog da Grama é um blog independente sobre grama e gramado: tipos de grama, plantio, adubação, rega, corte, pragas, grama sintética e guias de compra de produtos.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function SobrePage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="Um blog em português do Brasil sobre grama e gramado, com informação clara, passo a passo e sem gastar à toa."
      path={PATH}
    >
      <h2 id="o-que-e">O que é o Blog da Grama</h2>
      <p>
        O {site.name} é escrito pela <Link href={author.url}>{author.name}</Link> para quem tem, vai
        plantar ou quer recuperar um gramado. Qual grama escolher, quanto de placa comprar, quando
        adubar, por que a grama amareleou, se a grama sintética compensa, qual cortador levar para
        casa. Aqui a proposta é explicar com calma, em linguagem simples, e dizer com clareza quando
        é hora de chamar um profissional.
      </p>
      <p>
        O conteúdo se divide em três frentes: <Link href="/artigos">artigos</Link> (guias e passo a
        passo), <Link href="/noticias">notícias</Link> (novidades do setor de gramados, jardinagem e
        paisagismo, explicadas para quem cuida de casa) e{" "}
        <Link href="/reviews">comparativos de produtos</Link>, com critérios públicos e nota de 0 a
        10. A prioridade do blog são os guias práticos de plantio e manutenção e os guias de compra.
      </p>

      <h2 id="para-quem">Para quem escrevemos</h2>
      <p>
        Para quem tem um quintal, um jardim, uma chácara ou uma área de lazer e quer um gramado
        bonito sem virar especialista: moradores de casa e condomínio, quem está construindo,
        paisagistas iniciantes e quem cuida de campo ou área de pet. As categorias do site refletem
        as dúvidas mais comuns:
      </p>
      <ul>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/categoria/${c.slug}`}>{c.label}</Link>: {c.description}
          </li>
        ))}
      </ul>

      <h2 id="como-o-conteudo-e-feito">Como o conteúdo é feito</h2>
      <p>
        Cada texto parte de fontes técnicas, como a Embrapa, institutos agronômicos, universidades
        públicas, o Ministério da Agricultura e Pecuária e os manuais dos próprios fabricantes. As
        fontes ficam listadas ao fim do artigo. O texto é escrito, checado e aprovado pela redação,
        que responde por ele.
      </p>
      <p>
        Um ponto importante, dito com transparência: quando um artigo for revisado por um
        profissional da área (por exemplo, um engenheiro agrônomo), o nome e o registro dele
        aparecem na própria página. Enquanto esse selo não aparece, o artigo não passou por revisão
        de um profissional. Quando um texto é corrigido ou ampliado, ele ganha a marcação
        &quot;Atualizado em&quot; com a nova data. Os detalhes estão na{" "}
        <Link href="/politica-editorial">política editorial</Link>.
      </p>

      <h2 id="o-que-o-site-nao-faz">O que o site não faz</h2>
      <ul>
        <li>
          Não receita defensivo agrícola nem dose de produto químico. Em caso de praga ou doença, o
          caminho é levar uma amostra a um engenheiro agrônomo ou a uma loja agropecuária.
        </li>
        <li>Não promete resultado garantido: clima, solo e manejo variam de terreno para terreno.</li>
        <li>Não vende curso, mentoria nem serviço de instalação.</li>
        <li>Não publica conteúdo pago disfarçado de artigo ou de análise de produto.</li>
      </ul>

      <h2 id="como-o-site-se-sustenta">Como o site se sustenta</h2>
      <p>
        O acesso é gratuito. A receita vem (ou virá) de anúncios do Google AdSense e de links de
        afiliado da Amazon, que aparecem somente na categoria{" "}
        <Link href="/categoria/produtos">Melhores Produtos</Link>, sempre sinalizados. Anúncio e
        afiliado não interferem em pauta, nota ou opinião. Explicamos tudo em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="como-falar-conosco">Como falar com a gente</h2>
      <p>
        Encontrou um erro, tem uma sugestão de pauta ou quer propor uma parceria? Escreva para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a>. Respondemos em até 5 dias úteis. A
        página de <Link href="/contato">contato</Link> explica o que mandar em cada caso, incluindo
        pedidos relacionados aos seus dados pessoais.
      </p>
    </InstitutionalPage>
  );
}
