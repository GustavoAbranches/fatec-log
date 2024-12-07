import PropTypes from "prop-types";
import imgArcosFatec from "../assets/grafismo/Arcos_Fatecdonalds.svg";

const Divisor = ({ className, ...restProps }) => {
  return (
    <div
      className={`flex justify-center items-start w-full py-24 px-8 ${className || ""}`}
      {...restProps}
    >
      <img
        // style={{ transform: "translateY(-22.2%)" }}
        src={imgArcosFatec}
        alt=""
      />
    </div>
  );
};

Divisor.propTypes = {};

export default Divisor;
