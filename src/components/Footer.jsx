import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Supporters from "./Supporters";

const Footer = () => {
  const footerSections = [
    {
      title: "Institucional",
      links: [
        { text: "Fatec Carapicuiba", path: "/Sobre" },
        { text: "Como chegar", path: "" },
        { text: "Manual de identidade individual", path: "" },
      ],
    },
    {
      title: "Blog",
      links: [
        { text: "Notícias", path: "" },
        { text: "Vídeos tutoriais", path: "" },
      ],
    },
    {
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
      title: "Fale com a gente",
      content: [
        {
          text: "Estamos disponíveis de segunda a sexta-feira, das 8h às 19h",
          isInfo: true,
        },
        {
          icon: <Phone className="w-5 h-5" />,
          text: "(11) 4184-8404",
          isInfo: true,
        },
        {
          icon: <MapPin className="w-10 h-10" />,
          text: "Fatec Deputado Ary Fossen - Av. União dos Ferroviários, 1760",
          isInfo: true,
        },
      ],
    },
    {
      title: "Inscrição",
      links: [
        { text: "Acesso ao sistema", path: "" },
        { text: "Orientação para inscrição", path: "" },
        { text: "Template de artigo", path: "" },
        { text: "Template de apresentação", path: "" },
        { text: "Boletim técnico", path: "" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-black">
      <Supporters />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>

              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        to={link.path}
                        className="text-gray-500 hover:text-white transition-colors"
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
                      {item.icon}
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
};

export default Footer;
