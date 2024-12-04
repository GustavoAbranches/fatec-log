import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TabelaComite from "../components/comite/TabelaComite.jsx";

const ComiteFatecLog = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />
        <TabelaComite />
      <Footer />
    </>
  );
}

export default ComiteFatecLog;