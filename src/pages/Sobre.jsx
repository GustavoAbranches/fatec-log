import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkshopDiv from "../components/WorkshopDiv";
import Breadcrumb from "../components/Breadcrumb.jsx";
import brandImg from "../assets/brand_op1.png";
import Divisor from "../components/Divisor.jsx";
import sobre from "../assets/sobre.png";

function Sobre() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Sobre a Fatec Carapicuíba</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-6">
            <p className="text-justify">
              A Fatec Carapicuíba iniciou as atividades no 1º semestre de 2006 e
              hoje oferece um total de 7 cursos (6 presenciais e 1 na modalidade
              EAD). A unidade está localizada na Avenida Francisco Pignatari,
              650, Vila Gustavo Correia, no município de Carapicuíba.
            </p>

            <p className="text-justify">
              Atualmente, a Fatec Carapicuíba conta com aproximadamente xxx
              alunos matriculados e já formou mais de xxx profissionais. A
              faculdade tem como missão &quot;formar o profissional Tecnólogo
              com base na competência profissional adequada às necessidades do
              setor produtivo mediante o desenvolvimento de habilidades que
              contribuam: para a elevação da qualidade e da produtividade dos
              processos, produtos e serviços; para a melhoria do padrão de vida
              do aluno e para o desenvolvimento social.&quot;
            </p>
          </div>

          <div className="md:w-1/2 md:pl-20">
            <h2 className="font-semibold mb-4">Nossos cursos</h2>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Análise e desenvolvimento de sistemas</li>
              <li>AMS - ADS</li>
              <li>Design de mídias digitais</li>
              <li>Jogos digitais</li>
              <li>Logística</li>
              <li>Secretariado</li>
              <li>Gestão empresarial (EAD)</li>
            </ul>

            <p className="mb-2">Para mais informações, nosso site:</p>
            <a
              href="https://fateccarapicuiba.edu.br"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              fateccarapicuiba.edu.br
            </a>
          </div>
        </div>
      </div>

      <Divisor />

      <div className="w-full text-slate-500 p-20">
        <h1 className="text-black font-bold text-2xl mb-5">
          Região e Proximidades
        </h1>
        <h2 className="text-black font-bold text-xl mb-5">
          Infraestrutura e Acessibilidade
        </h2>
        <p>
          A FATEC Carapicuíba está estrategicamente localizada na Grande São
          Paulo, oferecendo fácil acesso por transporte público. A estação
          Carapicuíba da CPTM (Linha 8 – Diamante) está a poucos minutos do
          campus, além de contar com diversas linhas de ônibus que conectam a
          região a outros bairros e cidades próximas. Nas imediações, há uma
          variedade de centros comerciais, restaurantes e serviços essenciais,
          atendendo às necessidades dos estudantes com praticidade.
        </p>
        <h2 className="text-black font-bold text-xl my-5">Hospedagem</h2>
        <p>
          A região de Carapicuíba e suas cidades vizinhas oferecem diversas
          opções de hospedagem para quem precisa se acomodar durante eventos ou
          visitas à FATEC. Desde hotéis econômicos a estabelecimentos mais
          sofisticados, as alternativas são abundantes e atendem a diferentes
          perfis e orçamentos. Com fácil acesso às principais rodovias e à
          estação de trem, os hotéis próximos garantem comodidade e praticidade,
          estando localizados em pontos estratégicos para facilitar o
          deslocamento.
        </p>
        <h2 className="text-black font-bold text-xl my-5">
          Patrimônio Histórico e Cultural
        </h2>
        <p>
          Carapicuíba se destaca também por sua rica herança cultural. Um dos
          principais marcos da cidade é a Aldeia de Carapicuíba, remanescente
          das aldeias jesuíticas do período colonial, sendo um dos poucos
          exemplos preservados no Brasil. Além disso, a região conta com parques
          e espaços de lazer, ideais para quem busca momentos de descontração ou
          estudo em ambientes tranquilos. A localização central e o ambiente ao
          redor tornam a FATEC Carapicuíba um espaço que combina acessibilidade,
          história e modernidade.
        </p>
      </div>
      <div className="flex w-full justify-center items-center">
        <img src={sobre} alt="" />
      </div>
      <WorkshopDiv
        title="Identidade visual da Fatec e do Evento "
        text="Descubra as diferentes aplicações da identidade visual do evento e como ela combina com a Fatec Carapicuíba"
        btn="Confira nossa Identidade Visual"
        path="/"
        color="amber"
        img={brandImg}
      />
    </>
  );
}

export default Sobre;
