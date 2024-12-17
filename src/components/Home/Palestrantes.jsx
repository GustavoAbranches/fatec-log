import palestrantes from "../../util/palestrantes"


const Palestrantes = () => {

    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap md:flex-row justify-center items-center md:items-start w-fit h-fit gap-5 mb-10">
                {palestrantes.map((item) => {
                    return (
                        <div key={item.id}
                            className="flex flex-col text-center text-wrap items-center w-1/2 sm:w-1/3 md:w-1/5 h-fit border-2"
                        >
                            <img className="w-full h-full object-cover" src={item.img} alt={item.nome} />
                            <h1 className="text-black font-semibold text-xl mt-4">{item.nome}</h1>
                            <span className="text-slate-500 mb-4">
                                {item.instituicao}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Palestrantes