import { Link } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import Map from "./Map";

export default function Localizacao({ btnLoc }) {
  const styletext =
    "text-slate-500 text-sm md:text-lg font-normal leading-relaxed";

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <div className="space-y-2">
            <p className="text-red-700 text-sm md:text-lg font-medium tracking-wide">
              LOCALIZAÇÃO
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Como chegar?
            </h1>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Endereço
            </h2>
            <p className={styletext}>
              Av.Francisco Pignatari, 650 - Vila Gustavo Correia, Carapicuíba
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Referências
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li className={styletext}>
                10 minutos a pé da estação de Trem de Carapicuíba (Linha 8 -
                Diamante) e do terminal de Ônibus Carapicuíba.
              </li>
              <li className={styletext}>
                Próxima à Rodoviaria Presidente Castelo Branco.
              </li>
            </ul>
            {btnLoc === "ativo" ? (
              <Link
                to="/comochegar"
                className="bg-red-600 w-full md:w-[300px] h-8 text-white font-semibold flex items-center justify-center"
              >
                {"Confira mais Informaçoes "}
                <CircleArrowRight className="w-5 h-5 ml-1 mt-1" />
              </Link>
            ) : null}
          </div>
        </div>
        <Map />
      </div>
    </div>
  )
};

Localizacao.propTypes = {
  btnLoc: PropTypes.string.isRequired,
};

