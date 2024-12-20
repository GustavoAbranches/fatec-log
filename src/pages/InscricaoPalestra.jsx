import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx"
import Divisor from "../components/Divisor";
import WorkshopDiv from "../components/WorkshopDiv.jsx"
import img from "../assets/orientaA_op1.png"

function InscricaoPalestra() {
  return (
    <>
      <Header/>
      <Navbar />
      <Breadcrumb />
      <Divisor />

      <WorkshopDiv 
        title = "Com dúvidas ou querendo um caminho mais fácil?"
        text = "Aqui temos um template para facilitar seu trabalho, boa palestra"
        btn = "Template de Apresentação"
        path = ""
        color = "blue"
        img = {img}
        icon = ""
      />
      <Footer />
    </>
  );
};

export default InscricaoPalestra;