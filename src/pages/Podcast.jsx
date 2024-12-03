import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

import podcast from "../assets/header_img/podcast.png"


const Podcast = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <img src={podcast} alt="" />
        <Breadcrumb/>
        <Footer/>
        </>
    )
}
export default Podcast;