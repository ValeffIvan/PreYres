import People from "../Components/Search/People";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const SearchPage = () => {
  return (
    <div className="sm:ml-96 sm:mr-64 mt-5 ">
      <div className="flex m-4 ">
        <button
          className=" mr-4 flex text-gray-600 hover:text-gray-900 p-2 "
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
          </svg><span>Volver</span>
        </button>
        <input
          placeholder="Buscar en PreYres..."
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-2/4 px-2 py-2 pl-5 mr-12 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark"
        />
      </div>
      <div className="mr-4 ml-4">
      <Tabs defaultActiveKey="questions" id="fill-tab-example" fill className='sm:bg-gray-800 sm:border-gray-700 hover:sm:bg-gray-800 active:sm:bg-gray-800 link:sm:bg-gray-800 rounded-t-xl color-white' style={{ "--bs-nav-tabs-link-active-bg": "gray-700", "--bs-nav-tabs-border-width": "solid transparent", "--bs-nav-tabs-link-active-color": "white", "--bs-nav-link-color": "gray", "--bs-nav-link-hover-color": "gray" }}>
          <Tab eventKey="questions" title="Preguntas" className='text-black bg-gray-100 h-full'>
           <People />
          </Tab>
          <Tab eventKey="answers" title="General" className='text-black bg-gray-100 h-full'>
  
          </Tab>
        </Tabs>
      </div>
      
    </div>
  );
};

export default SearchPage;