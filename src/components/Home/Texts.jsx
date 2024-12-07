import textStyle from "../../util/textStyle";

export default function Texts() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex flex-col md:flex-row items-center md:justify-evenly w-auto h-auto md:h-96 p-2 md:p-10 m-2 md:m-10 max-w-[1250px]">
        
          <div className="pb-12 md:pb-52">
            <h1 className="font-medium text-blue-600">SOBRE O EVENTO</h1>
            <h2 className="font-bold text-2xl md:text-4xl text-gray-900">
              O que é o Fateclog?
            </h2>
          </div>
        
        <div className="w-full md:w-3/4 space-y-6 text-gray-700 leading-relaxed">
          <p className={textStyle.pStyle}>
            Nasceu em 2010, organizado pelo comitê de coordenadores do curso
            superior de tecnologia em logística das Fatecs, que atualmente conta
            com os representantes de 24 Fatecs, abrangendo os cursos de
            logística, gestão de logística integrada, logística aeroportuária,
            transporte terrestre e gestão portuária.
          </p>
          <p className={textStyle.pStyle}>
            É um evento anual, itinerante, realizado com rotatividade nas Fatecs
            que oferecem os cursos relacionados e apresenta uma média de 3000
            congressistas em cada edição. tem os objetivos de estimular a
            publicação e divulgação de trabalhos científicos de docentes e
            alunos das Fatecs; aproximar a academia e a comunidade empresarial,
            para desenvolver parcerias e colaborações que sustentem a evolução
            do ensino tecnológico e da pesquisa aplicada.
          </p>
          <p className={textStyle.pStyle}>
            O evento, aberto às comunidades acadêmica e empresarial, prevê
            várias atividades, como palestras (contando com a presença dos
            maiores expoentes da logística no horizonte nacional), workshops,
            visitas técnicas e apresentação de artigos científicos (com uma
            média de mais de 400 trabalhos publicados), além da apresentação de
            novas tecnologias e inovações por parte dos parceiros e
            patrocinadores.
          </p>
        </div>
      </div>
    </div>
  );
}
