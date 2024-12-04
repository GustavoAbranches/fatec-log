import palestrantes from "../../util/palestrantes"


const Palestrantes = () => {

    return(
        <div className="flex flex-row justify-center items-center w-full h-96 gap-5 mb-10">
            {palestrantes.map((item) => {
                return (
                    <div key={item.id}
                        className="flex flex-col items-center w-1/5 h-full border-2"
                    >
                        <img src={item.img} alt={item.nome} />
                        <h1 className="text-black font-semibold text-xl">{item.nome}</h1>
                        <span className="text-slate-500">
                            {item.instituicao}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Palestrantes