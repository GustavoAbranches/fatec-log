import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import Divisor from "../components/Divisor.jsx";

const Premio = () => {
  return (
    <>

      <div className="flex flex-row w-full items-center justify-evenly h-auto gap-10 my-4 md:my-20">
        <div className="w-full px-4 md:px-32 text-slate-500">
          <h1 className="text-black text-2xl font-bold py-4 md:py-20">
            Quem foi Osvaldo Contador Junior? 
          </h1>
          <p>
          O Professor Osvaldo Contador Junior lecionava na Fatec de Jundiaí, 
          sempre atento aos seus alunos, percebeu que haviam poucos eventos 
          relacionado a a área de logística que pudesse levar ou mencionar para 
          os estudantes, então no ano de 2009 decidiu montar um evento acadêmico, 
          onde os alunos pudessem participar e entender mais sobre a área que 
          fossem seguir, pessoas da área, interessados, e pesquisadores foram 
          convidados e um tema foi decidido, marcando assim o inicio do que viria a 
          ser um grande evento realizados todos os anos e sediados em diversas Fatecs.
          </p>
          <h1 className="text-black text-2xl font-bold pb-4 pt-16 md:py-20">
            Prêmio Osvaldo Contador Junior
          </h1>
          <p className="pb-5">
          Na edição de 2025 foi instituído um prêmio especial em homenagem ao 
          professor Osvaldo Contador Junior, fundador e criador do evento 
          FATECLOG que faleceu recentemente. Esta premiação é uma forma de 
          celebrar a memória de quem começou tudo e honrar sua contribuição 
          para todos que participaram do evento.
          </p>
          <p className="pb-5">
          A premiação ocorrerá no XXX, no dia XX/XX. Serão premiados os X 
          primeiros colocados. Disputarão o prêmio quem cumprir os seguintes requisitos:
          </p>
          <ul className="list-disc pl-8 md:pl-16 pb-2 md:pb-5 text-slate-500">
            <li>Ter se inscrito e apresentado seu artigo</li>
            <li>Seu artigo ter sido aprovado entre os X primeiros colocados</li>
            {/* TODO: ????? */}
            <li>XXXX</li>
          </ul>
        </div>
      </div>

      <Divisor />

      <div className="w-full px-4 md:px-32 text-slate-500">
        <h1 className="text-black text-2xl font-bold py-10"> Lista de Prêmiados </h1>
        <ul className="list-disc pl-8 md:pl-16 pb-2 md:pb-5 text-slate-500">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="list-disc pl-8 md:pl-16 pb-2 md:pb-5 text-slate-500">
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    </>
  );
}

export default Premio;