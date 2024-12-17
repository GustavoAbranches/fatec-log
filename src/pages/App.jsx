import Texts from "../components/Home/Texts";
import WorkshopDiv from "../components/WorkshopDiv";
import Localizacao from "../components/Localizacao";
import ContactForm from "../components/Home/ContactForm";
import img from "../assets/reuniao_op1.png";
import Divisor from "../components/Divisor";
import Palestrantes from "../components/Home/Palestrantes";

function App() {
  
  return (
    <>
      <Texts />
      <Palestrantes />
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

      <Divisor />
      
      <ContactForm />
    </>
  );
}

export default App;
