import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import isncImg from "../assets/inscricao_op1.png";
import textStyle from "../util/textStyle.js";

function OrientacaoEscricao() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className={`${textStyle.divStyle} `}>
        <h1 className={`${textStyle.h1Style}`}>Quem pode participar do evento?</h1>
        <p className={`${textStyle.pStyle}`}>
          O Fateclog é um evento científico aberto focado na área de logística,
          ou seja todos podem participar, desde pessoas que estão trabalhando,
          até pessoas que tem o interesse em logística e inovação, além daqueles
          que vem prestigiar o evento temos também os patrocinadores, o comitê e
          palestrantes, e todos precisam realizar a incrição.
        </p>

        <h1 className={`${textStyle.h1Style}`}>
          Como fazer as inscrições para o Evento?
        </h1>
        <p className={`${textStyle.pStyle}`}>
          Todos que irão participar do evento precisam estar inscritos, para
          fazer sua inscrição siga o tutorial a baixo no nosso sistema, você
          pode encontrar a página de cadastro em: Inscrição {">"} Acesso Ao
          Sistema
        </p>

        <div className="w-full md:w-1/2">
          <h1 className={`${textStyle.h1Style}`}>Inscrição de usuário</h1>
          <h2 className={`${textStyle.h2Style}`}>
            1. Assista ao vídeo atentamente:
          </h2>
          <ul className={textStyle.ulStyle}>
            <li className={textStyle.pStyle}>
              Aprenda passo a passo como criar seu usuário
            </li>
            <li className={textStyle.pStyle}>
              Observe as informações necessárias para preencher durante o
              processo
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className={`${textStyle.h2Style}`}>
              2. Acesse o site oficial do FATECLOG:
            </h2>
            <a 
            href="https://www.fateclog.com.br/congresso/login/"
            target="_blank"
            
            >
              www.fateclog.com.br/congresso
            </a>
          </div>

          <h2 className={`${textStyle.h2Style}`}>
            3. Siga as instruções do vídeo para criar seu usuário:
          </h2>
          <ul className={textStyle.ulStyle}>
            
              <li className={textStyle.pStyle}>
                Preencha os campos obrigatórios com precisão
              </li>
            <li className={textStyle.pStyle}>
              Certifique-se de utilizar um e-mail válido para receber
              notificações e atualizações
            </li>
          </ul>
          <h2 className={`${textStyle.h2Style}`}>
            4. Conclua o processo de criação do usuário:
          </h2>
          <ul className={textStyle.ulStyle}>
            <li className={textStyle.pStyle}>
              Após seguir as orientações do vídeo, você terá seu usuário criado
              no sistema do FATECLOG
            </li>
            <li className={textStyle.pStyle}>
              Após o pagamento da taxa de R$10,00 poderá efetuar sua inscrição
              na programação do evento
            </li>
          </ul>
        </div>
      </div>

      <WorkshopDiv
        title="É pesquisador? Entenda como submeter seu artigo"
        text="Saiba quais são as linhas de pesquisa, a formatação, datas de entrega e como submeter seu artigo"
        btn="Como Submeter meu artigo?"
        path="/orientacaosubmissão"
        color="amber"
        img={isncImg}
      />
      <Footer />
    </>
  );
}

export default OrientacaoEscricao;