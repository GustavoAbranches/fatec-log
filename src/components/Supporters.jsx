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
    "w-full h-auto flex justify-center my-5";
  return (
    <>
      <h1 className="m-4 font-bold text-2xl">Apoidares</h1>
      <div className={styleDiv}>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-14 md:gap-40">
          {apoidores.map((apoiador) => (
            <div
              key={apoiador.nome}
              className="w-20 h-20 md:w-36 md:h-36 bg-orange-500"
            >
              {apoiador.img}
            </div>
          ))}
        </div>
      </div>

              
      <h1 className="m-4 font-bold text-2xl">Patrocinadores</h1>
      <div className={styleDiv}>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-14 md:gap-40">
          {patrocinadores.map((patrocinador) => (
            <div
              key={patrocinador.nome}
              className="w-20 h-20 md:w-36 md:h-36 bg-orange-500"
            >
              {patrocinador.img}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Supporters;
