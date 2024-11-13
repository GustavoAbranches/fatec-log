import { CircleArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const colorClasses = {
  amber: "bg-yellow-500",
  blue: "bg-blue-900",
};
export default function WorkshopDiv({ title, text, btn, path, color }) {
  const bgColorClass = colorClasses[color] || "";
  return (
    <div className={`relative ${bgColorClass} min-h-[500px] p-32 flex items-center justify-evenly`}>
      {/* Pontos decorativos */}
      <div className="hidden left-8 lg:left-44 top-1/4 absolute md:grid grid-cols-5 gap-[22px]">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
        ))}

        <div className="absolute left-12 translate-y-10 w-[350px] h-[300px] bg-orange-400"></div>
      </div>

      <div className="relative z-10 flex flex-col max-w-xl mx-auto md:ml-auto md:mr-8 lg:ml-[600px] lg:mr-0">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </p>
        <p className="text-white leading-relaxed text-base md:text-lg font-medium w-full md:w-4/5 mb-6">
          {text}
        </p>

        <Link
          to={path}
          className=" bg-red-600 w-[300px] h-8 text-white font-semibold flex items-center justify-center"
        >
          {btn}
          <CircleArrowRight className="w-5 h-5 ml-1 mt-1" />
        </Link>
      </div>
    </div>
  );
}

WorkshopDiv.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
