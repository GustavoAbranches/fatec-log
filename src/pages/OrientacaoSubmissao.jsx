import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx"
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";

function OrientacaoSubmissão() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />
      <div>
        <Grafismo grafismo={arcoInferior} />
      </div>
      <Footer />
    </>
  );
};

export default OrientacaoSubmissão;