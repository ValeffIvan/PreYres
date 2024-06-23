import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative items-center justify-center w-full">
      <button className='w-full' onClick={() => navigate("/publicacion")}>  
        <div className="p-5 shadow-md bg-white">
          <div className="flex w-full justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div className="text-lg font-bold text-slate-700">Joe Smith</div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs text-neutral-500">2 hours ago</div>
              <button
                id="dropdownMenuIconHorizontalButton"
                data-dropdown-toggle="dropdownDotsHorizontal"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none text-white focus:ring-gray-50 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
                type="button"
                onClick={handleButtonClick}
              > 
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>125</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      {isDropdownVisible && (
        <div id="dropdownDotsHorizontal" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg  w-44 bg-gray-700 divide-gray-600 right-0 top-12">
          <ul className="py-2 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white">Modificar</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white">Eliminar</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Post;
