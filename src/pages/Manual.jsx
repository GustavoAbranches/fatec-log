import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
// import Grafismo from "../components/Grafismo";
// import img from "../assets/grafismo/grafismo.png"
import logo from "../assets/icons/logo.png"
import Divisor from "../components/Divisor";



const Manual = () => {
    return(
        <>

        <div className="flex flex-col md:flex-row px-4 md:px-0 justify-evenly items-center w-full h-auto my-20">
            <div className="md:w-1/3 ">
                <h1 className="text-black text-2xl font-bold">Manual de Identidade Visual</h1>
                <p className="text-slate-500">
                    Nesta página, você encontra o Manual de Identidade 
                    Visual desta edição do evento! Reunimos todas as diretrizes 
                    e elementos visuais que definem a personalidade da marca, 
                    garantindo consistência e harmonia em cada detalhe. Explore os núcleos, 
                    tipografias, logotipos e muito mais que tornam esta edição única!
                </p>
            </div>
            <img src={logo} alt="logo" className="w-60 mt-16 md:mt-0"/>

            <div className="pb-4 md:pb-40">
                {/* <Grafismo grafismo={img}/>
                TODO: arrumar grafismo diagonal */}
            </div>        
        </div>

        <Divisor />
        </>
    )
}
export default Manual;