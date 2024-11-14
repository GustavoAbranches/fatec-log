import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx"

function Hospedagem() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="p-10">
        <h1 className="font-bold text-3xl pb-5">Opçôes de hospedagem na região</h1>
        <p className="font-semibold text-md text-slate-700">
        A região de Carapicuíba, Osasco e Barueri, na Grande São Paulo, oferece diversas 
        opções de hospedagem que atendem tanto a turistas quanto a quem viaja a negócios.
        Esses municípios contam com hotéis de diferentes categorias, desde os mais econômicos 
        até opções de maior conforto, com infraestrutura moderna e serviços de
        qualidade. Muitos desses estabelecimentos estão localizados próximos a 
        centros comerciais e opções de lazer, facilitando o acesso a atrações da região. 
        Além disso, a proximidade com a capital paulista e com importantes vias de acesso torna 
        essa área uma excelente escolha para quem busca conveniência e praticidade na
        hospedagem.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Hospedagem;