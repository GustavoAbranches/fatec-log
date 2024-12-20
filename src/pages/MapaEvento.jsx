import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import mapa from "../assets/mapa_evento.png"

const MapaEvento = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row w-full items-center justify-evenly h-auto gap-10 my-20">
        <div className="md:w-1/2 px-32">
          <h1 className="text-black text-2xl font-bold">Mapa do evento</h1>
          <p className="text-slate-500">
                Baixe a versão em pdf do mapa para
                visualizar ele em seu dispositivo.
          </p>
        </div>
        <img src={mapa} alt="" className="md:w-3/4"/>
      </div>
    </>
  );
}

export default MapaEvento;