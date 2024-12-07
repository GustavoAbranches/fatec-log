import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { linksData } from "../util/linksData";
import logo from "../assets/icons/logo_horizontal.png";
import Supporters from "./Supporters";
import SocialButton from "./SocialButtons";
import ButtonTop from "./Footer/ButtonTop";

export default function Footer() {
  return (
    <>
      <Supporters />

      <footer className=" bg-blue-800 text-white p-10 ">
        <div className="flex w-full h-auto justify-center relative bottom-14">
        <ButtonTop />
        </div>
        <div className="container w-full h-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {linksData.map((section) => (
              <div key={section.title} className="flex flex-col w-48">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>

                {section.links && (
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          to={link.path}
                          className="hover:text-black transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="flex flex-col items-center">
              <img src={logo} className="mb-10"/>
              <p>Redes Sociais</p>
              <SocialButton />
            </div>

            <div className="flex flex-col w-64">
              <h2 className="text-xl font-bold mb-4">Fale com a gente</h2>
              <div className="text-white space-y-2">
                <p className=" hover:text-black transition-colors ">
                  Estamos disponíveis de segunda a sexta-feira, das 8h às 19h
                </p>

                <div className="flex flex-row ">
                  <Phone className="w-5 h-7 mr-2" />
                  <p className=" hover:text-black transition-colors">
                    (11) 4184-8404
                  </p>
                </div>

                <div className="flex flex-row ">
                  <MapPin className="w-12 h-7 mr-2" />
                  <p className="flex hover:text-black transition-colors">
                    {" "}
                    Fatec Deputado Ary Fossen - Av. União dos Ferroviários, 1760
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-800">
            © {new Date().getFullYear()} Fatec Log. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </>
  );
}
