import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Texts from "../components/Texts";
import WorkshopDiv from "../components/WorkshopDiv";
import Localizacao from "../components/Localizacao";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
        path="/Programacao"
      />
      <Localizacao />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
