const apoidores = [
  { nome: "apoiador1", img: "test" },
  { nome: "apoiador2", img: "test" },
  { nome: "apoiador3", img: "test" },
  { nome: "apoiador4", img: "test" },
];

const patrocinadores = [
  { nome: "patrocinador1", img: "test" },
  { nome: "patrocinador2", img: "test" },
  { nome: "patrocinador3", img: "test" },
  { nome: "patrocinador4", img: "test" },
];

const Supporters = () => {
  const styleDiv =
    "flex flex-row w-full h-44 justify-center items-center md:px-14 md:my-10";
  return (
    <>
      <h1>Apoidares</h1>
      <div className={styleDiv}>
        {apoidores.map((apoiador) => {
          return (
            <>
              <div className="flex flex-col w-full items-center">
                <div
                  className="w-16 h-16 md:w-36 md:h-36 bg-orange-500"
                  key={apoiador.nome}
                >
                  {apoiador.img}
                </div>
                {apoiador.nome}
              </div>
            </>
          );
        })}
      </div>
      <h1>Patrocinadores</h1>
      <div className={styleDiv}>
        {patrocinadores.map((patrocinador) => {
          return (
            <>
              <div className="flex flex-col w-full items-center">
                <div
                  className="w-16 h-16 md:w-36 md:h-36 bg-orange-500"
                  key={patrocinador.nome}
                >
                  {patrocinador.img}
                </div>
                {patrocinador.nome}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Supporters;
