import Map from "./Map";

export default function Localizacao() {
  return (
    <div className="flex flex-row w-full h-[600px] items-center justify-around p-20">
      <div className="flex flex-col justify-evenly w-1/2 h-1/2">
        <p className="text-red-700">LOCALIZAÇÃO</p>
        <p className="text-4xl font-semibold">Como chegar?</p>

        <p className="text-black text-2xl font-semibold">Endereço</p>
        <p className="text-slate-500 text-lg font-normal">
          Av.Francisco Pignatari, 650 - Vila Gustavo Correia, Carapicuíba
        </p>

        <p className="text-black text-2xl font-semibold">Referêrencias</p>
        <ul className="list-disc">
          <li className="text-slate-500 text-lg font-normal">
            10 minutos a pé da estação de Trem de Carapicuíba (Linha 8 -
            Diamante) e do terminal de Ônibus Carapicuíba.
          </li>
          <li className="text-slate-500 text-lg font-normal">
            Próxima à Rodoviaria Presidente Castelo Branco.
          </li>
        </ul>
      </div>
      <Map />
      <div></div>
    </div>
  );
}
