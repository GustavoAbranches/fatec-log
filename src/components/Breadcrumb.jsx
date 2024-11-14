import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-1 text-sm md:text-base text-gray-600 py-4 px-4 md:px-0">
      <Link to="/" className="hover:text-gray-900 transition-colors duration-200">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={to} className="flex items-center">
            <span className="text-gray-400 mx-1">›</span>
            {index === pathnames.length - 1 ? (
              <span className="text-red-600 font-medium">{value}</span>
            ) : (
              <Link to={to} className="hover:text-gray-900 transition-colors duration-200">
                {value}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}