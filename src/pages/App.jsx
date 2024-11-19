import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Timer from "../components/Home/Timer";
import Texts from "../components/Home/Texts";
import WorkshopDiv from "../components/WorkshopDiv";
import Localizacao from "../components/Localizacao";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer";
import img from "../assets/reuniao_op1.png"


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Timer />
      <Texts />
      
      <WorkshopDiv
        title="Palestras, Workshops, Inovações e Muito Mais!"
        text=" Uma oportunidade de aprender, trocar experiências e conhecer as
            inovações que estão moldando o futuro da logística"
        btn="Confira a Progamação"
        path="/programacao"
        color="blue"
        img={img}
      />
      <Localizacao
        btnLoc= "ativo"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
