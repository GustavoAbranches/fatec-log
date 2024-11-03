import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Supporters from "./Supporters";
import { linksData } from "../util/linksData";

export default function Footer() {

  return (
    <footer className="bg-white text-black">
      <Supporters />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {linksData.map((section) => (
            <div key={section.title} className="flex flex-col">
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

              {section.content && (
                <div className="space-y-3">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${
                        item.icon ? "gap-2" : ""
                      }`}
                    >
                      {item.icon === "phone" && <Phone className="w-5 h-5 text-gray-500" /> }
                      {item.icon === "map" && <MapPin className="w-10 h-10 text-gray-500" />}
                      <span className="text-gray-500">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Fatec Log. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer;
