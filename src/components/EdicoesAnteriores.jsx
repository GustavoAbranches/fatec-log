import { edicoes } from "../util/edicoes";

const EdicoesAnteriores = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-5">
      {edicoes.map((cartao) => {
        return (
          <div
            key={cartao.id}
            className="flex flex-col relative border border-black xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12"
          >
            

            <div className="relative">
              <img
                src={cartao.img}
                alt={cartao.titulo}
                className="flex items-center justify-center text-center w-full"
              />

              {cartao.divText === "" ? null : (
                <>
                  <div
                    className="absolute left-0 mx-6 bottom-6 bg-orange-500 px-3 py-1 text-white font-bold text-sm rounded-md"
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

            <div
              className="flex top-4 right-4 absolute font-bold text-xl"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                boxShadow:
                  "rgba(255, 255, 255, 0.8) 0px 0px 8px, rgba(255, 255, 255, 0.6) 0px 0px 15px, rgba(255, 255, 255, 1) 0px 0px 20px",
              }}
            >
              {cartao.ano}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EdicoesAnteriores;
