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

const organizacoes = [
  { nome: "organizacao1", img: "test" },
  { nome: "organizacao2", img: "test" },
  { nome: "organizacao3", img: "test" },
  { nome: "organizacao4", img: "test" },
];

const Supporters = () => {
  const styleDiv = "w-full h-auto flex justify-center my-5 overflow-auto";
  return (
    <div className="mb-16">
      <h1 className="m-12 font-bold text-xl">Organização</h1>
      <div className={styleDiv}>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-14 md:gap-40">
          {organizacoes.map((organizacao) => (
            <div
              key={organizacao.nome}
              className="w-28 h-16 md:w-48 md:h-32 bg-slate-400"
            >
              {organizacao.img}
            </div>
          ))}
        </div>
      </div>

      <h1 className="m-12 font-bold text-xl">Apoiadores</h1>
      <div className={styleDiv}>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-14 md:gap-40">
          {apoidores.map((apoiador) => (
            <div
              key={apoiador.nome}
              className="w-28 h-16 md:w-48 md:h-32 bg-slate-400"
            >
              {apoiador.img}
            </div>
          ))}
        </div>
      </div>

      <h1 className="m-12 font-bold text-xl">Patrocinadores</h1>
      <div className={styleDiv}>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-14 md:gap-40">
          {patrocinadores.map((patrocinador) => (
            <div
              key={patrocinador.nome}
              className="w-28 h-16 md:w-48 md:h-32 bg-slate-400"
            >
              {patrocinador.img}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
