import WorkshopDiv from "../components/WorkshopDiv.jsx";
import isncImg from "../assets/inscricao_op1.png";
import inscricao from "../assets/orientacao_inscricao.png";

import img_1 from "../assets/inscricao_img/1_inscricao_text.png";
import img_2 from "../assets/inscricao_img/2_inscricao_text.png";

const OrientacaoInscricao = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center justify-evenly h-auto gap-10 my-4 md:my-20 px-6 md:px-32">
        <div className="md:w-1/2">
          <h2 className="text-black text-2xl font-bold mb-5">
            Quem pode participar do evento?
          </h2>
          <p className="text-slate-500 mb-10">
            O Fateclog é um evento científico aberto focado na área de
            logística, ou seja todos podem participar, desde pessoas que estão
            trabalhando, até pessoas que tem o interesse em logística e
            inovação, além daqueles que vem prestigiar o evento temos também os
            patrocinadores, o comitê e palestrantes, e todos precisam realizar a
            incrição.
          </p>
          <h2 className="text-black text-2xl font-bold mb-5">
            Como fazer as inscrições para o evento?
          </h2>
          <p className="text-slate-500">
            Todos que irão participar do evento precisam estar inscritos, para
            fazer sua inscrição siga o tutorial a baixo no nosso sistema, você
            pode encontrar a página de cadastro em: Inscrição {">"} Acesso Ao
            Sistema
          </p>
        </div>
        <img src={inscricao} alt="" className="hidden md:block w-1/2" />
      </div>

      <div className="flex flex-col px-6 md:px-32 w-full justify-between mb-10 md:mt-0 mt-20">
        <h2 className="text-black text-2xl font-bold mb-5">
          Como entrar no sistema do FatecLog
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row gap-6">
          <div class="flex flex-1">
            <figure className="flex flex-auto justify-center items-center w-full max-w-16 h-16 me-6">
              <img src={img_1} alt="" className="h-full object-cover" />
            </figure>
            <div className="flex-1">
              <h3 className="text-black text-lg font-bold">
                Acesso ao Sistema
              </h3>
              <p className="text-slate-500">
                Para começar, você precisa acessar o site oficial do FATECLOG:
                www.fateclog.com.br. No menu principal, clique na opção “Entrar”
                para fazer login no sistema. Caso você já tenha um usuário
                criado, basta inserir seu e-mail e senha definidos durante o
                processo de registro. Se você ainda não possui um usuário, siga
                as instruções abaixo para criar um.
              </p>
            </div>
          </div>

          <div class="flex flex-row flex-1 px-6">
            <figure className="flex flex-auto justify-center items-center w-full max-w-16 h-16 me-6">
              <img src={img_2} alt="" className="h-full object-cover" />
            </figure>
            <div className="flex flex-wrap flex-col md:flex-row">
              <h3 className="text-black text-lg font-bold">
                Criação do Usuário
              </h3>
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
                  4. Após preencher as informações corretamente, clique em
                  “Criar Usuário”. Você será notificado sobre a conclusão do seu
                  cadastro.
                </li>
                <li>
                  5. <span className="text-fatec-blue">Importante:</span>{" "}
                  Certifique-se de usar um e-mail válido, pois será através dele
                  que você receberá atualizações sobre o evento.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:px-32 px-6 mx-auto">
        <h2 className="text-black text-2xl font-bold mb-10">
          Tipos de Inscrições
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="">
            <h3 className="bg-fatec-blue leading-none p-2 rounded-md text-lg font-bold mb-4 text-white inline-block">
              Inscrição no Evento
            </h3>
            <p className="text-slate-500">
              Depois de criar o seu usuário, acesse o site do FATECLOG novamente
              e faça login com o e-mail e a senha cadastrados. Após o login,
              você estará pronto para se inscrever no evento. Pague a taxa de
              R$10,00, conforme indicado no site. O pagamento pode ser feito
              diretamente na plataforma, utilizando as opções de pagamento
              disponíveis. Após a confirmação do pagamento, você poderá escolher
              a programação do evento e se inscrever nas atividades de sua
              preferência.
            </p>
          </div>
          <div className="">
            <h3 className="bg-fatec-blue leading-none p-2 rounded-md text-lg font-bold mb-4 text-white inline-block">
              Submissão de Artigo
            </h3>
            <p className="text-slate-500">
              Se você deseja submeter um artigo para o XV FATECLOG, após fazer
              login com seu usuário, clique na opção "Submeter Artigo" no painel
              do usuário. Assista ao tutorial específico para entender como
              preencher os campos obrigatórios e realizar o upload do seu
              artigo. Complete todos os campos exigidos, incluindo o upload do
              arquivo conforme as especificações de formatação. Revise todas as
              informações para garantir que estão corretas antes de finalizar a
              submissão.
            </p>
          </div>
          <div className="">
            <h3 className="bg-fatec-blue leading-none p-2 rounded-md text-lg font-bold mb-4 text-white inline-block">
              Cadastro de Parecerista
            </h3>
            <p className="text-slate-500">
              Acesse a área de cadastro de pareceristas no site FATECLOG.
              Assista ao vídeo tutorial que explicará como se cadastrar como
              especialista no campo da logística. Se você já tem um usuário,
              basta fazer login. Caso contrário, crie um novo seguindo os mesmos
              passos do cadastro do usuário. Preencha as informações
              obrigatórias, incluindo a sua expertise no campo da logística.
              Revise todos os dados e finalize o cadastro como parecerista.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:px-32 px-4 mx-auto my-32">
        <div className="max-w-[750px] mx-auto text-center px-4 text-black text-xl mb-10">
          Após seguir todos esses passos, você estará completamente cadastrado e
          poderá aproveitar todas as oportunidades oferecidas pelo{" "}
          <span className="text-fatec-blue">XVI FATECLOG</span>.
          <br />
          <br />
          <br />
          {/* TODO: ver se tem componente pra esse botão */}
          {/* TODO: link do sistema */}
          <button className="py-4 px-10 bg-fatec-red text-white">Acessar O Sistema</button>
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
    </>
  );
};

export default OrientacaoInscricao;
