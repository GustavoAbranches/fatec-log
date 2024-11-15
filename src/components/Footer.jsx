import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Supporters from "./Supporters";
import { linksData } from "../util/linksData";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <Supporters />

      <div className="container px-4 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {linksData.map((section) => (
            <div key={section.title} className="flex flex-col ">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>

              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        to={link.path}
                        className="text-gray-500 hover:text-black transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex flex-col w-64">
            <h2 className="text-xl font-bold mb-4">Fale com a gente</h2>
            <div className="text-gray-500 space-y-2">
              <p className=" hover:text-black transition-colors ">
                Estamos disponíveis de segunda a sexta-feira, das 8h às 19h
              </p>

              <div className="flex flex-row ">
                <Phone className="w-5 h-7 mr-2" />
                <p className="text-gray-500 hover:text-black transition-colors">
                  (11) 4184-8404
                </p>
              </div>

              <div className="flex flex-row ">
                <MapPin className="w-12 h-7 mr-2" />
                <p className="flex text-gray-500 hover:text-black transition-colors">
                  {" "}
                  Fatec Deputado Ary Fossen - Av. União dos Ferroviários, 1760
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-800">
            © {new Date().getFullYear()} Fatec Log. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};