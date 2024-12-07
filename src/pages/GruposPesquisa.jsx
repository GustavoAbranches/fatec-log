import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Divisor from "../components/Divisor";

import gruposData from "../util/gruposData.js"


const GrupoPesquisa = () => {

  return (
    <>

      <div className="w-full h-auto p-20">
        <h1 className="text-black text-2xl font-bold">Grupos de Pesquisa</h1>
        <p className="text-slate-500">
          Abaixo, você encontra os grupos de pesquisa que estarão presentes no
          FatecLog, compartilhando suas iniciativas e avanços na área de
          logística. Fique atento para descobrir mais sobre os projetos
          desenvolvidos e suas contribuições para o setor.
        </p>
      </div>
{/* ARrumar mobile */}
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
      <Divisor />
    </>
  );
};
export default GrupoPesquisa;
