import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Texts from "./components/Texts";

import { CircleArrowRight } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Timer />
      <Texts />

      <div className="relative bg-gray-900 min-h-[500px] p-32 flex items-center justify-evenly">
        {/* Pontos decorativos */}
        <div className="absolute left-44 grid grid-cols-5 gap-[22px]">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
          ;
          <div className="absolute left-12 translate-y-10 w-[350px] h-[300px] bg-orange-400"></div>
        </div>

        <div className="ml-[600px] flex flex-col ">
          <p className="text-white text-4xl font-bold mb-4">Palestras, Workshops, Inovações e Muito Mais!</p>
          <p className="text-white leading-tight w-full text-lg font-medium md:w-4/5 mb-4">
            Uma oportunidade de aprender, trocar experiências e conhecer as
            inovações que estão moldando o futuro da logística
          </p>

          <button className="rounded-lg bg-red-600 w-[200px] h-8 text-white font-semibold flex items-center justify-center">
            Confira a Progamação
            <CircleArrowRight className="w-5 h-5 ml-1 mt-1" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
