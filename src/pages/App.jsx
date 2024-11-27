import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Timer from "../components/Home/Timer";
import Texts from "../components/Home/Texts";
import WorkshopDiv from "../components/WorkshopDiv";
import Localizacao from "../components/Localizacao";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer";
import img from "../assets/reuniao_op1.png";
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Timer />

      <div className="rotate-180">
        <Grafismo grafismo={arcoInferior} />
      </div>

      <Texts />

      <WorkshopDiv
        title="Palestras, Workshops, Inovações e Muito Mais!"
        text=" Uma oportunidade de aprender, trocar experiências e conhecer as
            inovações que estão moldando o futuro da logística"
        btn="Confira a Programação"
        path="/programacao"
        color="blue"
        img={img}
        icon=""
      />
      <Localizacao btnLoc="ativo" />
      <div>
        <Grafismo grafismo={arcoInferior} />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
