import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeProgramacao from "../components/Progamacao/GradeProgramacao";
import WorkshopDiv from "../components/WorkshopDiv.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx"
import proImg from "../assets/programacao_op1.png"
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";

import header from "../assets/header_img/img_programacao.png"
import Palestrantes from "../components/Home/Palestrantes.jsx";

function Programacao() {
  return (
    <>
      <Header />
      <Navbar />
      <img src={header} alt="" />
      <Breadcrumb/>
      <Palestrantes />
      <GradeProgramacao />

      <div>
        <Grafismo grafismo={arcoInferior} />
      </div>
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
