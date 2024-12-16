import { useLocation, Link } from "react-router-dom";
import { linksData } from "../util/linksData";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const findTextForPath = (path) => {
    for (const section of linksData) {
      for (const link of section.links) {
        if (link.path === `/${path}`) {
          return link.text;
        }
      }
    }
    return path;
  };

  return (
    <nav className="flex items-center space-x-1 text-sm md:text-base text-gray-600 py-4 px-4 md:px-0">
      <Link to="/" className="hover:text-gray-900 transition-colors duration-200 pl-10">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const text = findTextForPath(value);

        return (
          <div key={to} className="flex items-center">
            <span className="text-gray-400 mx-1">›</span>
            {index === pathnames.length - 1 ? (
              <span className="text-fatec-red font-medium">{text}</span>
            ) : (
              <Link to={to} className="hover:text-gray-900 transition-colors duration-200">
                {text}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}