import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";

import { edicoes } from "../util/edicoes.js";

function EdicoesAnteriores() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="grid w-80 md:w-[1200px] h-auto md:grid-cols-3 ml-20 md:grid-rows-5 gap-5">
        {edicoes.map((cartao) => {
          return (
            <div
              key={cartao.id}
              className="flex flex-col w-auto h-auto border border-black"
            >
              <div className="flex items-center justify-center">
                {cartao.ano}
              </div>
              <div className="flex items-center justify-center">
                {cartao.img}
              </div>

              {cartao.divText === "" ? null : (
                <>
                  <div 
                  className="w-auto bg-orange-500 mr-10 m-2 p-2 text-white font-bold 
                  text-sm rounded-md justify-center">
                    {cartao.divText}
                  </div>
                </>
              )}

              <div className="flex flex-col w-full justify-center items-center p-5">
                <p className="pb-2">{cartao.titulo}</p>
                <a href={cartao.linkAnais}>
                  Links dos anais aprovados do evento
                </a>
                <a href={cartao.linkCertificado}>Certificado do evento</a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default EdicoesAnteriores;
