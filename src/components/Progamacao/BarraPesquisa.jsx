import propTypes from 'prop-types';

const BarraPesquisa = ({searchTerm, setSearchTerm}) => {

    return(
        <div className="flex justify-center md:justify-start w-full  px-4 md:px-16 mt-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-3/4 md:w-1/3 p-2 border border-gray-300 rounded-md"
        />
      </div>
    )
}

BarraPesquisa.propTypes = {
    searchTerm:propTypes.string.isRequired,
    setSearchTerm:propTypes.func.isRequired,
}

export default BarraPesquisa;