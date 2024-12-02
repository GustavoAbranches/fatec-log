import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkshopDiv from "../components/WorkshopDiv";
import ReturnButton from "../components/ReturnButton";
import Breadcrumb from "../components/Breadcrumb.jsx"
import logImg from "../assets/log_op1.png"
import brandImg from "../assets/brand_op1.png"

import header from "../assets/header_img/img_fatec_carapicuiba.png"

function Sobre() {
  return (
    <>
      <Header />
      <Navbar />
      <img src={header} alt="" />
      <Breadcrumb />
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

      <WorkshopDiv
        title="Identidade visual da Fatec e do Evento "
        text="Descubra as diferentes aplicações da identidade visual do evento e como ela combina com a Fatec Carapicuíba"
        btn="Confira nossa Identidade Visual"
        path="/"
        color="amber"
        img={brandImg
          
        }
      />

      <div className="w-full h-[800px] p-24">
        <h1 className="text-3xl font-bold">Mapa do evento</h1>

        <div>
          <p className="flex justify-center items-center bg-lime-700 h-[600px] w-[1150px]">
            Image
          </p>
        </div>
      </div>

      <WorkshopDiv
        title="Conheça como Organizamos o evento!"
        text="Entenda como utilizamos o espaço da Fatec Carapicuíba, a formação da nossa equipe, e como organizamos o evento"
        btn="Estrutura Organizacional"
        path="/"
        color="blue"
        img={logImg}
      />
      <ReturnButton />

      <Footer />
    </>
  );
}

export default Sobre;
