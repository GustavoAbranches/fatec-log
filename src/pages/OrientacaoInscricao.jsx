import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import isncImg from "../assets/inscricao_op1.png";
import inscricao from "../assets/orientacao_inscricao.png";

import img_1 from "../assets/inscricao_img/1_inscricao_text.png";
import img_2 from "../assets/inscricao_img/2_inscricao_text.png";

const OrientacaoInscricao = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="flex flex-row w-full items-center justify-evenly h-auto gap-10 my-20 px-32">
        <div className="w-1/2">
          <h1 className="text-black text-2xl font-bold mb-5">
            Quem pode participar do evento?
          </h1>
          <p className="text-slate-500 mb-10">
            O Fateclog é um evento científico aberto focado na área de
            logística, ou seja todos podem participar, desde pessoas que estão
            trabalhando, até pessoas que tem o interesse em logística e
            inovação, além daqueles que vem prestigiar o evento temos também os
            patrocinadores, o comitê e palestrantes, e todos precisam realizar a
            incrição.
          </p>
          <h1 className="text-black text-2xl font-bold mb-5">
            Como fazer as inscrições para o evento?
          </h1>
          <p className="text-slate-500">
            Todos que irão participar do evento precisam estar inscritos, para
            fazer sua inscrição siga o tutorial a baixo no nosso sistema, você
            pode encontrar a página de cadastro em: Inscrição {">"} Acesso Ao
            Sistema
          </p>
        </div>
        <img src={inscricao} alt="" className="w-1/2" />
      </div>

      <div className="flex flex-col px-32 w-full justify-between mb-10">
        <h1 className="text-black text-2xl font-bold mb-5">
          Como entrar no sistema do FatecLog
        </h1>
        <div className="flex flex-row">
          <img src={img_1} alt="" className="h-16 mr-4" />
          <div className="w-2/5">
            <h1 className="text-black text-lg font-bold">Acesso ao Sistema</h1>
            <p className="text-slate-500">
              Para começar, você precisa acessar o site oficial do FATECLOG:
              www.fateclog.com.br. No menu principal, clique na opção “Entrar”
              para fazer login no sistema. Caso você já tenha um usuário criado,
              basta inserir seu e-mail e senha definidos durante o processo de
              registro. Se você ainda não possui um usuário, siga as instruções
              abaixo para criar um.
            </p>
          </div>

          <img src={img_2} alt="" className="h-16 mx-4" />
          <div className="w-1/2">
            <h1 className="text-black text-lg font-bold">Criação do Usuário</h1>
            <ul className="text-slate-500">
              <li>
                1. Acesse a página de inscrição para criar seu usuário no
                FATECLOG.
              </li>
              <li>
                2. Assista ao vídeo tutorial para entender o passo a passo do
                processo de criação.
              </li>
              <li>
                3. Preencha todos os campos obrigatórios com atenção,
                especialmente o seu e-mail, pois ele será usado para enviar
                notificações importantes sobre o evento.
              </li>
              <li>
                4. Após preencher as informações corretamente, clique em “Criar
                Usuário”. Você será notificado sobre a conclusão do seu
                cadastro.
              </li>
              <li>
                5. <span className="text-blue-600">Importante:</span> Certifique-se de usar um e-mail válido, pois será
                através dele que você receberá atualizações sobre o evento.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <WorkshopDiv
        title="Não sabe como fazer login no nosso sistema? Confira nosso tutorial"
        text="Aqui temos um template para facilitar seu trabalho, boa pesquisa e não se esqueça dos prazos"
        btn="Acessar tutorial"
        path=""
        color="blue"
        img={isncImg}
      />
      <Footer />
    </>
  );
};

export default OrientacaoInscricao;
