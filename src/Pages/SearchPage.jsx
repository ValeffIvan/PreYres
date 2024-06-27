import People from "../Components/Search/People";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:ml-96 sm:mr-64 mt-4">
      <div className="w-full max-w-5xl mb-10 flex items-center space-x-4">
        <button
          className="flex items-center text-gray-600 hover:text-gray-900"
          aria-label="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="ml-1">Volver</span>
        </button>
        <input
          placeholder="Buscar en PreYres..."
          className="border w-full sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block px-4 py-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
      </div>
      <div className="w-full max-w-5xl">
        <Tabs defaultActiveKey="persons" id="fill-tab-example" fill className='bg-gray-800 border-gray-700 hover:bg-gray-800 active:bg-gray-800 link:bg-gray-800 rounded-t-xl color-white' style={{ "--bs-nav-tabs-link-active-bg": "gray-700", "--bs-nav-tabs-border-width": "solid transparent", "--bs-nav-tabs-link-active-color": "white", "--bs-nav-link-color": "gray", "--bs-nav-link-hover-color": "gray" }}>
          <Tab eventKey="persons" title="Personas" className="bg-gray-100 h-full">
            <People />
          </Tab>
          <Tab eventKey="words" title="Palabras" className="bg-gray-100 h-full">
            {/* Puedes añadir más contenido aquí */}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchPage;
