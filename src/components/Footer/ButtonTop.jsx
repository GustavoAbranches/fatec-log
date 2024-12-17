import { ArrowUp } from "lucide-react"

const ButtonTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adiciona animação suave
        });
    };
    return(
        <button 
        onClick={scrollToTop}
        className="flex flex-row gap-2 items-center justify-center h-10 w-40 bg-fatec-orange hover:bg-amber-700"
    >
        <span>Voltar ao topo</span>
        <ArrowUp className="w-5 h-5" />
    </button>
    )
}

export default ButtonTop