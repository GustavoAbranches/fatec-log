import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import img from "../assets/orientaA_op1.png"
import Divisor from "../components/Divisor.jsx";

import textStyle from "../util/textStyle.js";

function OrientacaoCriacaoArtigo() {
  return (
    <>
      <div className={textStyle.divStyle}>
        <h1 className={textStyle.h1Style}>Como organizar meu artigo?</h1>
        <p className={textStyle.pStyle}>
          Para garantir que seu artigo esteja de acordo com os padrões do evento, 
          reunimos todas as orientações necessárias em um só lugar. Aqui, você encontrará 
          informações detalhadas sobre a estrutura e a formatação que devem ser seguidas 
          durante a criação do seu trabalho.
        </p>
        <p className={textStyle.pStyle}>
          Além disso, disponibilizamos um template de artigo para facilitar o 
          processo e assegurar que todos os requisitos técnicos sejam atendidos.
          Confira as orientações completas e faça o download do template abaixo. 
          Estamos ansiosos para conhecer o seu trabalho!
        </p>
        
        <div className="flex flex-row w-full h-auto my-20">
          <div className="w-10 mx-10 bg-fatec-orange"></div>
          <div>
            <h2 className={textStyle.h2Style}>Tamanho do artigo:</h2>
            <p className={textStyle.pStyle}>
              O artigo científico completo deve conter no mínimo de 10 e no máximo
              de 15 páginas, incluindo referências bibliográficas e notas. As
              citações de artigos (referências) no texto devem seguir as normas
              vigentes da Associação Brasileira de Normas Técnicas – ABN
            </p>
            <h2 className={textStyle.h2Style}>Formatação</h2>
            <p className={textStyle.pStyle}>
              O trabalho deve ser apresentado em formato eletrônico (.doc ou .docx;
              não serão aceitos arquivos em .pdf), configurando a página para o
              tamanho de papel A4, com orientação retrato, margem superior e
              esquerda igual a (3cm), inferior e direita igual a (2cm). Deve ser
              empregada a fonte Arial, corpo 12, espaçamento 1,5 linhas em todo o
              texto, parágrafo de 1,25 cm, alinhamento justificado, à exceção do
              título. As páginas devem ser numeradas embaixo e à direita, em
              algarismos arábicos
            </p>
            <h2 className={textStyle.h2Style}>Título:</h2>
            <p className={textStyle.pStyle}>
              Deve ser centralizado, escrito em letras maiúsculas, em negrito, fonte
              Arial, tamanho 14. Subtítulo, se houver, em letras minúsculas
            </p>
            <h2 className={textStyle.h2Style}>Autoria do trabalho</h2>
            <p className={textStyle.pStyle}>
              Sob o título, após dar um espaçamento (1,5 linhas), identificar
              o(s) autor(es) do trabalho, seguido(s) de nota de rodapé com
              titulação, curso, unidade e e-mail de cada auto
            </p>
            <p className={textStyle.pStyle}>
              A identificação do professor orientador segue a mesma forma de
              identificação, em nota de rodapé. Colocar o(s) nome(s) do(s)
              professor(es) orientador(es), apresentando a titulação destes (Es –
              para Especialista, Me – mestres, Dr – doutor, pos doc), além do
              endereço institucional (curso, unidade e núcleo a que pertence) e o
              endereço eletrônico (e-mail)
            </p>
          </div>
        </div>

      </div>

      <div>
        <Divisor />
      </div>

      <WorkshopDiv
        title="Com dúvidas ou querendo um caminho mais fácil?"
        text="Aqui temos um template para facilitar seu trabalho, boa pesquisa e não se esqueça dos prazos"
        btn="Template de Artigo"
        path=""
        color="amber"
        img={img}
      />

    </>
  );
}

export default OrientacaoCriacaoArtigo;
