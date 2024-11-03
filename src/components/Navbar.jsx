import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";


export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const btnsDrop = [
    {
      id: 1,
      title: "Institucional",
      links: [
        { text: "Fatec Carapicuiba", path: "/Sobre" },
        { text: "Como chegar", path: "" },
        { text: "Manual de identidade individual", path: "" },
      ],
    },
    {
      id: 2,
      title: "O evento",
      links: [
        { text: "Sobre o Fatec Log", path: "" },
        { text: "Programação", path: "/Programacao" },
        { text: "Patrocinadores e apoiadores", path: "" },
        { text: "Mapa do evento", path: "" },
        { text: "Edições anteriores", path: "" },
      ],
    },
    {
      id: 3,
      title: "Inscrição",
      links: [
        { text: "Acesso ao sistema", path: "" },
        { text: "Orientação para inscrição", path: "" },
        { text: "Template de artigo", path: "" },
        { text: "Template de apresentação", path: "" },
        { text: "Boletim técnico", path: "" },
      ],
    },
    {
      id: 4,
      title: "Blog",
      links: [
        { text: "Notícias", path: "" },
        { text: "Vídeos tutoriais", path: "" },
      ],
    },
  ];

  const toogleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <nav className=" flex flex-row w-full h-28 justify-end items-center pr-28 bg-white">
      <div>
        <div className="flex space-x-4 ">
          {btnsDrop.map((btn) => (
            <div key={btn.id}>
              <button
                onClick={() => toogleDropdown(btn.id)}
                className="flex items-center space-x-1 py-4 px-2 hover:text-gray-300 transition-colors duration-200"
              >
                <span>{btn.title}</span>
                <div
                  className={`transform transition-transform duration-200 ease-in-out ${
                    openDropdown === btn.id ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {/* Abrindo o dropdown */}

              {openDropdown === btn.id && (
                <div className="absolute mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {btn.links.map((subItem) => (
                    <div key={subItem.text}>
                      <Link
                        key={subItem}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {subItem.text}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
