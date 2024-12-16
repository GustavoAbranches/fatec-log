import { CircleArrowRight, ArrowDownToLine } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ScrollToTop from "./Main/ScrollToTop";

const colorClasses = {
  amber: "bg-fatec-yellow",
  blue: "bg-fatec-blue",
};

export default function WorkshopDiv({
  title,
  text,
  btn,
  path,
  color,
  img,
  icon,
}) {
  const bgColorClass = colorClasses[color] || "";
  return (
    <div
      className={`flex flex-col md:flex-row ${bgColorClass} min-h-[500px] py-12 md:py-0 px-12 md:px-24 items-center justify-around`}
    >
      <img
        src={img}
        className="w-full md:w-1/2 lg:w-[500px] h-auto md:left-12"
      />

      <div className="flex flex-col md:pl-10 md:w-1/2">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold pt-4 md:pt-0 mb-4">
          {title}
        </p>
        <p className="text-white leading-relaxed text-base md:text-lg font-medium w-full md:w-4/5 mb-6">
          {text}
        </p>

        <Link
          to={path}
          className="bg-fatec-red w-full md:w-[300px] h-8 text-white font-semibold flex items-center justify-center"
        >
          <ScrollToTop />
          {btn}

          {icon === "download" ? (
            <ArrowDownToLine className="w-5 h-5 ml-1 mt-1" />
          ) : (
            <CircleArrowRight className="w-5 h-5 ml-1 mt-1" />
          )}
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
  img: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
