import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";

import hotelData from "../util/hotelData.js";
import header from "../assets/header_img/img_hospedagem.png"


function Hospedagem() {
  return (
    <>
      <Header />
      <Navbar />
      <img src={header} alt="" />
      <Breadcrumb />

      <div className="p-10">
        <h1 className="font-bold text-3xl pb-5">
          Opçôes de hospedagem na região
        </h1>
        <p className="font-semibold text-md text-slate-700">
          A região de Carapicuíba, Osasco e Barueri, na Grande São Paulo,
          oferece diversas opções de hospedagem que atendem tanto a turistas
          quanto a quem viaja a negócios. Esses municípios contam com hotéis de
          diferentes categorias, desde os mais econômicos até opções de maior
          conforto, com infraestrutura moderna e serviços de qualidade. Muitos
          desses estabelecimentos estão localizados próximos a centros
          comerciais e opções de lazer, facilitando o acesso a atrações da
          região. Além disso, a proximidade com a capital paulista e com
          importantes vias de acesso torna essa área uma excelente escolha para
          quem busca conveniência e praticidade na hospedagem.
        </p>
      </div>
      <div>
        <Grafismo grafismo={arcoInferior} />
      </div>
      <div className="flex flex-col gap-6 w-full items-center">

      {hotelData.map((hotel) => {
        return(
          <div key={hotel.nome} className="flex flex-row items-center w-2/3 h-52 shadow-lg">
            <img src={hotel.img} alt={hotel.nome} className="h-48"/>
            <div className="flex flex-col ml-14 w-1/2 gap-2">
              <h1 className="text-black text-2xl font-bold">
                {hotel.unidade === "" ? hotel.nome : `${hotel.nome} - ${hotel.unidade}`}
              </h1>
              <p className="text-slate-500 font-semibold text-md">Avaliação: {hotel.avaliacao}</p>
              <p className="text-slate-500 font-semibold text-md">Endereço: {hotel.endereco}</p>
              <p className="text-slate-500 font-semibold text-md">Conatato: {hotel.contato}</p>
            </div>
          </div>
        )
      })}
      </div>

      <Footer />
    </>
  );
}

export default Hospedagem;
