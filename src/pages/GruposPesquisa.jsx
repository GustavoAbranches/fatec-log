import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";

import gruposData from "../util/gruposData.js"

import grupo from "../assets/header_img/img_grupo_pesquisa.png";

const GrupoPesquisa = () => {

  return (
    <>
      <Header />
      <Navbar />
      <img src={grupo} alt="" />
      <Breadcrumb />

      <div className="w-full h-auto p-20">
        <h1 className="text-black text-2xl font-bold">Grupos de Pesquisa</h1>
        <p className="text-slate-500">
          Abaixo, você encontra os grupos de pesquisa que estarão presentes no
          FatecLog, compartilhando suas iniciativas e avanços na área de
          logística. Fique atento para descobrir mais sobre os projetos
          desenvolvidos e suas contribuições para o setor.
        </p>
      </div>

        <div className="grid grid-rows-3 grid-cols-2 gap-20 ml-40">
            {gruposData.map((grupo) => {
                return(
                    <div 
                    key={grupo.id}
                    className="flex flex-col justify-center items-center w-96 p-5 bg-slate-200"
                    >
                        <div className="mb-10 flex flex-col justify-center items-center">
                            <h1 className="text-xl font-semibold">{grupo.titulo}</h1>
                            <h2 className="text-lg font-medium">{grupo.lider}</h2>
                        </div>
                        <div>
                            <p className="text-slate-700 text-base leading-relaxed">
                                {grupo.texto}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
      <Grafismo grafismo={arcoInferior} />
      <Footer />
    </>
  );
};
export default GrupoPesquisa;
