import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import certificado from "../assets/certificado.png"
import header from "../assets/header_img/img_certificado.png"

const Certificado = () => {
  return (
    <>
      <Header />
      <Navbar />
      <img src={header} alt="" />
      <Breadcrumb />

      <div className="flex flex-row w-full items-center justify-evenly h-auto gap-10 my-20">
        <div className="w-2/3 px-32 text-slate-500">
          <h1 className="text-black text-2xl font-bold">Como conseguir meu certificado?</h1>
          <p>
          Os certificados de participação e apresentação de artigos ou palestras
          estarão disponíveis através do botão abaixo.
          Basta clicar, preencher as informações solicitadas e acessar o seu certificado.
          </p>
          <p>
          Caso encontre algum problema, entre em contato com o suporte pelo 
          e-mail <span className="text-red-500">email@email.com.br</span> Estamos à disposição para ajudar!
          </p>
        </div>
        <img src={certificado} alt="" className="w-3/4"/>
      </div>
      <Footer />
    </>
  );
}

export default Certificado;