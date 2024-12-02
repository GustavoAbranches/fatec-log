import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Grafismo from "../components/Grafismo";
import arcoInferior from "../assets/grafismo/arcos_inferior_linha.png";
import img from "../assets/grafismo/grafismo.png"
import logo from "../assets/icons/logo.png"

import miv from "../assets/header_img/img_miv.png"


const Manual = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <img src={miv} alt="" />
        <Breadcrumb/>

        <div className="flex flex-row justify-evenly items-center w-full h-auto my-20">
            <div className="w-1/3 ">
                <h1 className="text-black text-2xl font-bold">Manual de Identidade Visual</h1>
                <p className="text-slate-500">
                    Nesta página, você encontra o Manual de Identidade 
                    Visual desta edição do evento! Reunimos todas as diretrizes 
                    e elementos visuais que definem a personalidade da marca, 
                    garantindo consistência e harmonia em cada detalhe. Explore os núcleos, 
                    tipografias, logotipos e muito mais que tornam esta edição única!
                </p>
            </div>
            <img src={logo} alt="logo" className="w-60 "/>

            <div className="pb-40">
                <Grafismo grafismo={img}/>    
            </div>        
        </div>

        <Grafismo grafismo={arcoInferior}/>
        <Footer/>
        </>
    )
}
export default Manual;