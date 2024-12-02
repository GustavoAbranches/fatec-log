import { edicoes } from "../util/edicoes";

const EdicoesAnteriores = () => {
  return (
    <div className="relative grid w-80 md:w-[1200px] h-auto md:grid-cols-3 ml-20 md:grid-rows-5 gap-5">
      {edicoes.map((cartao) => {
        return (
          <div
            key={cartao.id}
            className="flex flex-col w-auto h-auto border border-black"
          >
            <div className="relative">
              <div className="flex pl-80 absolute font-bold text-xl ">{cartao.ano}</div>
              <img src={cartao.img} alt={cartao.titulo} className="flex items-center justify-center">
              </img>
              {cartao.divText === "" ? null : (
                <>
                  <div
                    className="w-auto bg-orange-500 mr-10 m-2 p-2 text-white font-bold
                    text-sm rounded-md justify-center absolute top-28"
                  >
                    {cartao.divText}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col w-full justify-center items-center p-5">
              <p className="pb-2">{cartao.titulo}</p>
              <a href={cartao.linkAnais}>Links dos anais aprovados do evento</a>
              <a href={cartao.linkCertificado}>Certificado do evento</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EdicoesAnteriores;
