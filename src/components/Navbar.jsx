import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo_horizontal.png";
import { linksData } from "../util/linksData";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="relative justify-center bg-fatec-blue shadow-md md:px-10">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-28">
          <div className="flex items-center w-24 md:w-36">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className=" flex flex-row justify-center p-2 rounded-md text-white hover:text-gray-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {linksData.map((btn) => (
              <div key={btn.id} className="relative">
                <button
                  onClick={() => toggleDropdown(btn.id)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-white"
                >
                  <span>{btn.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdown === btn.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Desktop dropdown */}
                {openDropdown === btn.id && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      {btn.links.map((subItem) => (
                        <Link
                          key={subItem.text}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                          role="menuitem"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {linksData.map((btn) => (
            <div key={btn.id}>
              <button
                onClick={() => toggleDropdown(btn.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <span>{btn.title}</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    openDropdown === btn.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === btn.id && (
                <div className="pl-4">
                  {btn.links.map((subItem) => (
                    <Link
                      key={subItem.text}
                      to={subItem.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.text}
                    </Link>
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
