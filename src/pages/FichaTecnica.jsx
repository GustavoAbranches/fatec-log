import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import Organizacao from "../components/ficha_tecnica/Organizacao.jsx";

const Fichatecnica = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />
        <Organizacao />
      <Footer />
    </>
  );
}

export default Fichatecnica;