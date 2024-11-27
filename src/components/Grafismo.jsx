import PropTypes from "prop-types";

const Grafismo = ({grafismo}) => {

    return(
        <div
            className="flex justify-center items-center w-full h-40"
        >
            <img 
            src={grafismo} alt="Grafismo" />
        </div>
    );
};


Grafismo.propTypes = {
    grafismo: PropTypes.string.isRequired,
}

export default Grafismo