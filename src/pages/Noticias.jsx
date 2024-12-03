import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

import noticias from "../assets/header_img/noticias.png"


const Noticias = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <img src={noticias} alt="" />
        <Breadcrumb/>
        <Footer/>
        </>
    )
}
export default Noticias;