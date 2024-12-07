import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import img from "../assets/orientaA_op1.png";
import Divisor from "../components/Divisor.jsx";
import header from "../assets/header_img/img_orientacao_artigo.png";

import textStyle from "../util/textStyle.js";

const OrientacaoBoletim = () => {
  return (
    <>

      <div className={textStyle.divStyle}>
        <div className="flex flex-col md:flex-row w-full">
          <h1 className="text-2xl text-black font-bold md:w-1/3 mr-10 md:mb-0 mb-8">
            O que é um Boletim Técnico?
          </h1>
          <p className="md:w-2/3 text-slate-500">
            O Boletim é uma publicação técnica que apresenta informações atuais
            e resultados experimentais ou observações de estudos e pesquisas em
            fase de evolução; trata-se, para tanto, de resultados parciais e
            intermediários de projetos de pesquisa. O objetivo do boletim é
            divulgar o conhecimento técnico, prático e científico a acadêmicos,
            técnicos, extensionistas e outros atores do setor de Logística e
            demais interessados. O objetivo do boletim é divulgar o conhecimento
            técnico, prático e científico a acadêmicos, técnicos, extensionistas
            e outros atores do setor de Logística e demais interessados.
          </p>
        </div>

        <Divisor />

        <div>
          <h1 className="text-2xl text-black font-bold my-10">
            Como preparar meu Boletim Técnico?
          </h1>
          <p className="text-slate-500">
            Para garantir que o seu boletim técnico esteja alinhado aos padrões
            exigidos, reunimos todas as informações necessárias em um só lugar.
            Nesta página, você encontrará diretrizes importantes sobre o
            conteúdo, a estrutura e a formatação que devem ser seguidas.
          </p>
          <p className="text-slate-500 mb-5">
            Além disso, disponibilizamos um template específico para facilitar a
            elaboração do documento e assegurar que todos os requisitos técnicos
            sejam atendidos.
          </p>
          <p className="text-slate-500">
            Confira as informações gerais abaixo e, em seguida, as instruções
            detalhadas de formatação. Estamos ansiosos para receber e divulgar
            seu trabalho!
          </p>
        </div>

        <div className="flex flex-row w-full h-auto my-20">
          <div className="w-5 mx-10 bg-orange-500"></div>
          <div>
            <ul className="list-disc text-slate-500">
              <li>
                Os textos submetidos deverão ser inéditos e autênticos,
                portanto, sem fraudes e/ou derivações de plágio (todos os textos
                recebidos serão submetidos a um software para detecção de
                similaridade);
              </li>
              <li>
                O conteúdo dos textos é da inteira responsabilidade de todos os
                autores nominados, os quais, caso necessário, assumem o
                compromisso de fornecer retratações ou correções de erros;
              </li>
              <li>
                Caso haja conflito de interesse, os autores deverão se
                manifestar, o que será analisado posteriormente pelo Comitê
                Editorial;
              </li>
              <li>
                Após a submissão do texto, não serão permitidas modificações nos
                dados de autoria, como a remoção ou inclusão de autores.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row w-full h-auto my-20">
          <div className="w-10 mx-10 bg-orange-500"></div>
          <div>
            <h2 className={textStyle.h2Style}>Apresentação:</h2>
            <p className={textStyle.pStyle}>
              Os trabalhos deverão ter no máximo 3 laudas conforme template
              disponibilizado. As páginas devem ser numeradas em sequência.
              Tema: Deverá conter descrição técnica de métodos, procedimentos,
              recomendações, normas e produtos decorrentes ou dependentes do
              conhecimento científico. Para facilitar a clareza e a
              objetividade, é aconselhável dividir o texto em itens e subitens.
            </p>
            <h2 className={textStyle.h2Style}>Idioma:</h2>
            <p className={textStyle.pStyle}>
              O Boletim deverá ser redigido em português, utilizando uma
              linguagem simples com termos acessíveis ao público-alvo.
            </p>
            <h2 className={textStyle.h2Style}>Título:</h2>
            <p className={textStyle.pStyle}>
              Deverá ser suscinto, claro e informativo, indicando o assunto
              tratado. Podem ser utilizados de 50 a 100 caracteres, ou menos de
              13 palavras. Nome(s) e endereço(s) do(s) autor(es): Os nomes e
              endereços dos autores devem ser completos e por extenso
            </p>
            <h2 className={textStyle.h2Style}>Resumo: </h2>
            <p className={textStyle.pStyle}>
              Deverá apresentar concisamente o assunto tratado em um único
              parágrafo. Palavras-chave: Abaixo do resumo e separado por um
              espaço, citar no máximo cinco palavras chave, separadas por ponto.
            </p>

            <h2 className={textStyle.h2Style}>Tabelas e Figuras:</h2>
            <p className={textStyle.pStyle}>
              Incluir título claro e conciso que possibilite o seu entendimento
              sem consultas ao texto. As figuras devem estar no formato jpg
              (fotos) ou gif (gráficos e esquemas).
            </p>

            <h2 className={textStyle.h2Style}>Citações: </h2>
            <p className={textStyle.pStyle}>
              Texto e citações devem ser conforme as normas ABNT atuais.
            </p>

            <h2 className={textStyle.h2Style}>Resumo: </h2>
            <p className={textStyle.pStyle}>
              Citar apenas as referências estritamente necessárias para a
              compreensão do trabalho..
            </p>
          </div>
        </div>
      </div>
        <div className={textStyle.divStyle}>
            <h1 className="text-2xl text-black font-bold mb-10">Processo de Avaliação</h1>
            <p className="text-slate-500">O texto submetido para o Boletim Técnico será analisado preliminarmente pelo Editor-chefe do Comitê Editorial. Na análise serão verificados seu escopo e adequação às normas, lembrando que a linguagem utilizada deve ser simples, com termos acessíveis aos usuários desse tipo de publicação. O texto que não atender às normas redatoriais ou que necessite de grande reformulação será rejeitado e devolvido aos autores. Estando de acordo com as normas, o texto será encaminhado para publicação.</p>
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
};

export default OrientacaoBoletim;
