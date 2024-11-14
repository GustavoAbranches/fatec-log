import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeProgramacao from "../components/Progamacao/GradeProgramacao";
import Breadcrumb from "../components/Breadcrumb.jsx"

function Programacao() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb/>
      <GradeProgramacao />
      <Footer />
    </>
  );
};

export default Programacao;
