import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const btnsDrop = [
    {
      id: 1,
      title: "Institucional",
      items: ["test", "test", "test"],
    },
    {
      id: 2,
      title: "O evento",
      items: ["test", "test", "test"],
    },
    {
      id: 3,
      title: "Inscrição",
      items: ["test", "test", "test"],
    },
    {
      id: 4,
      title: "Blog",
      items: ["test", "test", "test"],
    },
  ];

  const toogleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <nav className=" flex flex-row w-full h-28 justify-end items-center pr-20 bg-slate-800">
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
                <div className="absolute mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {btn.items.map((subItem) => (
                    <div key={subItem}>
                      <a
                        key={subItem}
                        href={subItem}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {subItem}
                      </a>
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
