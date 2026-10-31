import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "teste-das-latas-como-medir-a-rega-do-gramado",
  title: "Teste das latas: como medir quanto a rega molha o gramado",
  seoTitle: "Teste das latas: como medir a rega do gramado",
  excerpt:
    "Teste das latas passo a passo: meça em mm quanto o aspersor ou a mangueira molha, converta em litros por m², ajuste o tempo e ache pontos secos e encharcados.",
  metaDescription:
    "Teste das latas passo a passo: meça em mm quanto o aspersor ou a mangueira molha, converta em litros por m², ajuste o tempo e ache pontos secos e encharcados.",
  category: "cuidados",
  date: "2026-10-31",
  readTime: 9,
  imageQuery: "sprinkler head uneven lawn",
  seed: 952,
  coverImage: {
    url: "/images/covers/teste-das-latas-como-medir-a-rega-do-gramado.jpg",
    width: 1080,
    height: 810,
    fit: "cover",
    credit: "Famartin / Wikimedia Commons (CC BY-SA 4.0)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:2023-07-06_19_10_10_A_sprinkler_watering_a_lawn_along_New_Jersey_State_Route_29_(River_Road)_in_the_Mountainview_section_of_Ewing_Township,_Mercer_County,_New_Jersey.jpg",
  },
  kind: "guia",
  author: "Equipe do Blog da Grama",
  keyPoints: [
    "O teste das latas mede, em milímetros, a água que o aspersor ou a mangueira realmente deixa no gramado: espalhe recipientes de boca reta, ligue por um tempo conhecido e meça a altura da água em cada um.",
    "Cada 1 mm de lâmina equivale a 1 litro por m². Com a média das latas você descobre os mm por hora e calcula quantos minutos faltam para chegar à lâmina que a sua grama pede.",
    "Se uma lata vem quase vazia e outra transborda, o problema é a distribuição, não o tempo. Ajuste ou limpe o equipamento antes de regar mais, e use um pluviômetro para saber quanto a chuva já entregou.",
  ],
  sources: [
    { label: "Embrapa Cerrados: Espaçamento entre aspersores e entre linhas laterais na irrigação por aspersão convencional (Comunicado Técnico 86)", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/567585/1/comtec86.pdf" },
    { label: "IDR-Paraná: Manejo de água no solo para irrigação de pastagens na região Noroeste do Paraná", url: "https://www.idrparana.pr.gov.br/system/files/publico/Anexos%20de%20noticias/ManAguaSolo_IrrigacacaoPastagensNoroestePR_3Ed%20(5).pdf" },
    { label: "UF/IFAS Extension Duval County: Florida Irrigation Calibration (teste do catch can)", url: "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/duval/horticulture/commercial-hort/DuvalCo-How-to-Calibrate-Your-Sprinkler-System-Illustrations-2024-FNL-Digital.pdf" },
    { label: "NMSU: How to Perform a Catch Can Irrigation Audit on a Home Lawn Sprinkler System (H-510)", url: "https://pubs.nmsu.edu/_h/H510/index.html" },
  ],
  content: `
<p>O <strong>teste das latas</strong> é a forma mais simples de medir a rega do gramado: você espalha latas ou potes de boca reta, liga o aspersor ou a mangueira por um tempo conhecido e mede a altura da água em cada um. O resultado, em milímetros, mostra quanta água cai e se cai igual em todo o jardim.</p>
<p>Quase todo mundo rega por sensação: "uns 20 minutos" ou "até a terra escurecer". O problema é que dois aspersores diferentes, ou a mesma mangueira em dois horários, entregam quantidades muito diferentes. Neste guia você faz o teste, converte mm em litros por m², calcula o tempo certo e descobre onde o gramado está seco ou encharcado. A frequência e o horário ficam no guia de <a href="/artigos/como-regar-a-grama-frequencia-horario-e-quantidade">como regar a grama</a>; aqui o foco é medir.</p>

<h2>O que é o teste das latas e por que ele funciona?</h2>
<p>É uma medida direta da chuva que o seu equipamento "fabrica". Em vez de confiar no tempo no relógio, você coloca recipientes iguais no gramado e deixa a água cair neles do mesmo jeito que cai na grama. Como o recipiente tem lados retos, a altura da água dentro dele é a lâmina aplicada naquele ponto.</p>
<p>A técnica não é invenção de blog. Pesquisadores da <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/567585/1/comtec86.pdf" rel="noopener noreferrer" target="_blank">Embrapa Cerrados</a> usaram latas de óleo de 1 litro como coletores, espaçadas de 2 em 2 metros, para medir a precipitação de aspersores. A <a href="https://sfyl.ifas.ufl.edu/media/sfylifasufledu/duval/horticulture/commercial-hort/DuvalCo-How-to-Calibrate-Your-Sprinkler-System-Illustrations-2024-FNL-Digital.pdf" rel="noopener noreferrer" target="_blank">Universidade da Flórida (UF/IFAS)</a> e a <a href="https://pubs.nmsu.edu/_h/H510/index.html" rel="noopener noreferrer" target="_blank">Universidade Estadual do Novo México (NMSU)</a> publicam versões para jardim de casa, chamadas de "catch can test" e "catch can audit". São fontes de outro clima, mas a física da água que sai do bico é a mesma no Brasil.</p>
<p>O teste responde duas perguntas. A primeira é quanta água cai por hora, o que permite calcular o tempo de rega. A segunda é se cai igual em todo lugar, o que explica aquele canto que amarela enquanto outro vira lodo. Quem já se perguntou por que a grama "nunca fica boa" mesmo regando todo dia costuma ter a resposta na segunda pergunta.</p>

<h2>Como fazer o teste das latas passo a passo</h2>
<p>Use pelo menos 10 recipientes iguais, de lado reto: lata de atum, pote de requeijão ou copo cilíndrico. A UF/IFAS pede 10 ou mais, todos do mesmo tamanho. A NMSU recomenda ao menos 24 para um sistema fixo de jardim e diz que latas calibradas são mais precisas, embora lata de comida funcione.</p>
<ol>
<li>Escolha um dia sem vento forte. A NMSU indica fazer a auditoria com vento de até 5 milhas por hora (cerca de 8 km/h).</li>
<li>Espalhe as latas no gramado. Com aspersor de mangueira, a UF/IFAS manda alinhá-las em linha reta, afastando-se do aspersor. Com sistema fixo, teste uma zona de cada vez e distribua as latas por toda a área.</li>
<li>Deixe as latas a uns 30 a 60 cm da borda do gramado (a NMSU cita 12 a 24 polegadas), para não medir só o respingo da calçada.</li>
<li>Ligue a água por um tempo marcado no relógio. A UF/IFAS usa 15 minutos por zona.</li>
<li>Meça a altura da água em cada lata com uma régua e anote. Some tudo e divida pelo número de latas para obter a média.</li>
</ol>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Faça o teste no horário em que você costuma regar. A UF/IFAS recomenda calibrar na hora em que o sistema roda normalmente, porque pressão e vento mudam ao longo do dia.</p></div>

<h2>Como converter mm em litros por m²</h2>
<p>A conversão é direta: 1 mm de lâmina equivale a 1 litro por m². O <a href="https://www.idrparana.pr.gov.br/system/files/publico/Anexos%20de%20noticias/ManAguaSolo_IrrigacacaoPastagensNoroestePR_3Ed%20(5).pdf" rel="noopener noreferrer" target="_blank">manual do IDR-Paraná</a> mostra isso ao explicar que 1 mm corresponde a 10.000 litros em 1 hectare (10.000 m²). Portanto, se a média das suas latas deu 6 mm, o gramado recebeu 6 litros em cada metro quadrado.</p>
<p>Para saber o volume total, multiplique a lâmina pela área. Um gramado de 60 m² que recebeu 15 mm levou 900 litros, o equivalente a 45 baldes de 20 litros. É uma conta que ajuda a perceber o tamanho do gasto, principalmente quem rega de mangueira.</p>
<p>Se você não tem régua à mão, dá para medir a água em mililitros. Numa lata de boca com 8 cm de diâmetro, a área da abertura é de cerca de 50 cm², e cada milímetro de lâmina corresponde a uns 5 mL (conta de geometria, feita a partir da área do círculo). A NMSU segue esse caminho: mede o volume de cada lata e divide pela área da abertura.</p>
<table>
<thead><tr><th>Água na lata (boca de 8 cm)</th><th>Lâmina</th><th>Litros por m²</th></tr></thead>
<tbody>
<tr><td>10 mL</td><td>2 mm</td><td>2</td></tr>
<tr><td>25 mL</td><td>5 mm</td><td>5</td></tr>
<tr><td>50 mL</td><td>10 mm</td><td>10</td></tr>
<tr><td>75 mL</td><td>15 mm</td><td>15</td></tr>
</tbody>
</table>

<h2>Como ajustar o tempo de rega com o resultado</h2>
<p>Imagine um quintal de 60 m² com grama esmeralda no interior do Paraná, regado por um aspersor giratório na mangueira. Em 15 minutos, a média das latas foi de 4 mm, então o equipamento entrega 16 mm por hora. Depois é só dividir a lâmina que você quer pela taxa. A Embrapa Cerrados faz a mesma conta num de seus testes: com uma taxa de 21,8 mm por hora, são necessárias 1 hora e 23 minutos para aplicar 30 mm.</p>
<p>Para o gramado, a UF/IFAS recomenda não passar de 1/2 a 3/4 de polegada por rega, ou seja, de 13 a 19 mm. A referência de 10 a 20 mm por rega também aparece no guia de <a href="/artigos/como-regar-a-grama-frequencia-horario-e-quantidade">frequência, horário e quantidade</a>. A tabela abaixo mostra como o tempo muda para chegar a 15 mm.</p>
<table>
<thead><tr><th>Lata em 15 minutos</th><th>Taxa por hora</th><th>Tempo para 15 mm</th></tr></thead>
<tbody>
<tr><td>3 mm</td><td>12 mm/h</td><td>75 minutos</td></tr>
<tr><td>4 mm</td><td>16 mm/h</td><td>56 minutos</td></tr>
<tr><td>6 mm</td><td>24 mm/h</td><td>38 minutos</td></tr>
</tbody>
</table>
<p>Atenção ao escorrimento: a Embrapa registra que taxas de aplicação muito altas podem causar escorrimento superficial. Se a água começar a empoçar ou correr antes de acabar o tempo, pare, espere infiltrar e continue depois, em duas passadas. Em solo argiloso isso é mais comum, como mostra o guia de <a href="/artigos/como-plantar-grama-em-solo-argiloso-ou-arenoso">solo argiloso ou arenoso</a>.</p>

<h2>Rega uniforme: como achar pontos secos e encharcados</h2>
<p>Olhe para a diferença entre as latas, não só para a média. Se uma tem 8 mm e outra tem 2 mm, a grama do segundo ponto fica com um quarto da água do primeiro. A UF/IFAS orienta que, se houver lata sem água ou com água demais, o sistema precisa ser inspecionado de perto para descobrir o motivo.</p>
<p>A NMSU usa a uniformidade de distribuição (DU): ordene as latas, tire a média do quarto mais baixo e divida pela média geral. Imagine 8 latas com 8, 7, 7, 6, 6, 5, 4 e 3 mm. A média é 5,75 mm, as duas mais baixas (3 e 4) dão 3,5 mm, e a DU é de cerca de 61%. Na tabela americana para sprays fixos, 55% é "bom" e 65% é "muito bom", então esse resultado fica na faixa boa. A Embrapa usa ideia parecida, comparando a lâmina mínima com a média.</p>
<p>As causas mais prováveis são bico entupido, cabeça torta ou afundada, pressão baixa, vento e sobreposição ruim entre aspersores. A NMSU sugere consertar cabeças quebradas, entupidas ou desalinhadas antes de medir. Aumentar o tempo para "salvar" o canto seco só encharca o canto molhado, e áreas que alagam pedem o diagnóstico do guia de <a href="/artigos/gramado-encharcado-causas-e-como-melhorar-a-drenagem">gramado encharcado e drenagem</a>.</p>

<h2>Quando usar o pluviômetro (e quando as latas bastam)</h2>
<p>As latas medem o que o seu equipamento entrega, e o pluviômetro mede o que o céu entrega. O manual do IDR-Paraná explica que muita gente instala o pluviômetro justamente para saber a lâmina acumulada durante uma chuva e transformá-la em volume. Para o gramado, isso responde a pergunta "preciso regar hoje?": se choveram 15 mm, a rega do dia já foi feita pela natureza.</p>
<p>Use o pluviômetro quando quiser acompanhar a chuva da semana, decidir se pula uma rega ou conferir se o temporizador está programado de forma coerente. Veja como um modelo se comporta na prática no <a href="/artigos/review-pluviometro-para-jardim">review do pluviômetro para jardim</a>.</p>
<p>Para o teste da rega, as latas improvisadas bastam e custam nada. Quem quer automatizar depois de medir pode comparar os <a href="/artigos/temporizador-de-torneira-comparativo-para-rega-automatica">temporizadores de torneira para rega automática</a>. Já o medidor de solo mostra a umidade na raiz, o que as latas não fazem, e aparece no <a href="/artigos/review-medidor-de-umidade-do-solo">review do medidor de umidade do solo</a>.</p>

<h2>Erros comuns ao medir a rega</h2>
<p>O erro mais frequente é medir uma vez e esquecer o resultado. Refaça o teste ao trocar de aspersor, de mangueira ou de horário. Outro erro é usar recipiente de lado inclinado ou de boca larga e fundo estreito, porque a altura da água deixa de representar a lâmina.</p>
<ul>
<li><strong>Latas só perto do aspersor:</strong> o centro costuma receber mais água do que as bordas, e a média fica enganosa.</li>
<li><strong>Testar com vento:</strong> a água desvia e o resultado não vale para um dia calmo.</li>
<li><strong>Medir só a média:</strong> uma média boa pode esconder canto seco e canto encharcado.</li>
<li><strong>Aumentar o tempo para tapar falha:</strong> a causa costuma ser equipamento torto ou entupido, ou um aspersor que não cobre o canto, como nos modelos do comparativo de <a href="/artigos/comparativo-aspersores-de-setor-e-rotativos-de-base">aspersores de setor e rotativos de base</a>.</li>
<li><strong>Ignorar a chuva:</strong> sem pluviômetro, você rega em cima de uma chuva que já deu a lâmina.</li>
</ul>
<div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se a água empoça ou corre antes de acabar o tempo calculado, pare. Solo saturado sufoca a raiz e favorece musgo e doenças. Dividir a rega em duas passadas costuma resolver.</p></div>

<h2>Quando chamar um profissional</h2>
<p>Se o sistema é fixo, com tubulação enterrada, e as latas continuam desiguais depois de limpar bicos e alinhar cabeças, chame um instalador de irrigação. Ele confere pressão, espaçamento e dimensionamento, que não se corrigem com ajuste simples. A própria UF/IFAS lembra que, em alguns casos, a ajuda de um profissional certificado é necessária.</p>
<p>Se o gramado seguir amarelo ou com manchas mesmo com a rega medida e uniforme, a causa pode ser outra. Pode ser sombra, compactação ou uma suspeita de praga ou doença, e quem confirma é um agrônomo ou uma loja agropecuária, com uma amostra da grama. Antes disso, vale ler sobre <a href="/artigos/grama-seca-ou-queimada-pelo-sol-como-diferenciar">grama seca ou queimada pelo sol</a> e sobre <a href="/artigos/aeracao-do-gramado-quando-e-como-arejar-a-grama">aeração do gramado</a>, que melhora a entrada da água no solo.</p>
<p>Neste fim de semana, pegue dez potes, ligue por 15 minutos e anote o resultado. Com a média em mãos, ajuste o tempo e use o guia de <a href="/artigos/como-cuidar-da-grama-guia-completo-para-o-ano-todo">cuidados com a grama</a> para encaixar a rega no calendário do ano, ou veja os <a href="/artigos/comparativo-kits-de-irrigacao-por-aspersao-fixa">kits de irrigação por aspersão fixa</a> se o seu jardim já pede automação.</p>
  `,
  faq: [
    {
      question: "Como fazer o teste das latas no gramado?",
      answer:
        "Espalhe pelo menos 10 recipientes iguais, de lado reto, pelo gramado, ligue o aspersor ou a mangueira por um tempo marcado (a UF/IFAS usa 15 minutos), meça a altura da água em cada um com uma régua e calcule a média. Faça em dia sem vento e no horário em que você costuma regar.",
    },
    {
      question: "Quantos litros por m² equivalem a 1 mm de água?",
      answer:
        "Cada milímetro de lâmina de água equivale a 1 litro por m². O manual do IDR-Paraná mostra isso ao explicar que 1 mm corresponde a 10.000 litros em 1 hectare. Assim, 15 mm num gramado de 60 m² somam 900 litros. A conta vale para chuva, para mangueira e para aspersor.",
    },
    {
      question: "Como calcular o tempo de rega a partir do teste das latas?",
      answer:
        "Descubra a taxa por hora: se a média das latas em 15 minutos foi 4 mm, o equipamento entrega 16 mm por hora. Divida a lâmina desejada pela taxa. Para 15 mm, são cerca de 56 minutos. Se a água empoçar antes, divida em duas passadas, esperando a água infiltrar entre elas.",
    },
    {
      question: "O que significa quando as latas ficam com volumes muito diferentes?",
      answer:
        "Significa que a rega é desigual: alguns pontos recebem pouca água e outros demais. Procure bico entupido, cabeça torta, pressão baixa, vento ou sobreposição ruim entre aspersores. A UF/IFAS manda inspecionar o sistema se houver lata vazia ou cheia demais. Aumentar o tempo só encharca os pontos que já recebem bastante.",
    },
    {
      question: "Preciso de um pluviômetro para regar a grama?",
      answer:
        "Não é obrigatório, porque latas improvisadas medem a rega do equipamento. O pluviômetro mede a chuva e ajuda a decidir se você pula uma rega: segundo o IDR-Paraná, ele serve para saber a lâmina acumulada na chuva. Vale a pena para quem acompanha o tempo e quer evitar rega em cima de chuva forte.",
    },
    {
      question: "Quanta água a grama precisa por rega?",
      answer:
        "Para gramados, a UF/IFAS recomenda não passar de 1/2 a 3/4 de polegada por rega, ou seja, de 13 a 19 mm. A necessidade real muda com solo, espécie, calor e chuva, e a referência é de um clima diferente do brasileiro. Observe a grama e confira o guia de rega completo para ajustar a frequência.",
    },
  ],
};
