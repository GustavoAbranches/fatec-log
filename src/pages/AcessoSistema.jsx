import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import isncImg from "../assets/inscricao_op1.png";
import notebook from "../assets/notebook_inscricao.png"

const AcessoSistema = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="flex flex-row w-full items-center justify-evenly h-auto gap-10 my-20">
        <div className="w-1/2 px-20">
          <h1 className="text-black text-2xl font-bold">Acesse o sistema externo de inscrição </h1>
          <p className="text-slate-500">
            Se você já possui um cadastro ou deseja fazer um, 
            clique no botão abaixo para acessar o sistema.
          </p>
        </div>
        <img src={notebook} alt="" className="h-72"/>
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
}

export default AcessoSistema;