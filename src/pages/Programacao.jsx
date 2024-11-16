import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeProgramacao from "../components/Progamacao/GradeProgramacao";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx"
import proImg from "../assets/programacao_op1.png"

function Programacao() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb/>
      <GradeProgramacao />
      <WorkshopDiv
        title = "Precisa da Programação em PDF?"
        text = "Clique e faça o download"
        btn = "Download PDF"
        path = ""
        color = "amber"
        img = {proImg}
        icon = "download"
      />
      <Footer />
    </>
  );
};

export default Programacao;
