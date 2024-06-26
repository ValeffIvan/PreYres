import CreatePost from "../Home/CreatePost";
import Post from "../Home/Post";
import { FaArrowLeft } from 'react-icons/fa';

const Publication = () => {

  const handleButtonClick = () => {
    // Your logic here
  };

  return (
    <>
      <div className="ml-96 mr-64 justify-center p-4">
        <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10 mt-5">
          <div className="flex items-center">
            <button className="flex items-center text-gray-900" onClick={() => setRegistered(3)}>
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          <br />
          <div className="items-center justify-center w-full">
            <div className="p-5 shadow-md bg-white">
              <div className="flex w-full justify-between pb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                  <div className="text-lg font-bold text-slate-700">Pregunta de Joe Smith</div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-xs text-neutral-500">2 hours ago</div>
                </div>
              </div>
              <div className="mt-4 mb-6">
                <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
              </div>
              <hr />
              <div>
                <div className="mt-4 mb-6">
                  <div className="mb-3 text-xl text-left font-bold text-gray-400">Muy Buena</div>
                </div>
                <div className="flex w-full justify-between pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                    <div className="text-lg text-gray-400">Respuesta de Joe Smith</div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-xs text-neutral-500 text-gray-400">2 hours ago</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <div className="flex space-x-4 md:space-x-8">
                  <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>4</span>
                  </div>
                </div>
              </div>
              <br />
              <CreatePost />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-96 mr-64 justify-center p-4">
        <div className="flex cursor-pointer items-center transition hover:text-slate-600">
          <h1 className="text-black pl-24 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span className="ml-2">COMENTARIOS</span>
          </h1>
        </div>
        <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10 mt-5">
          <div className="items-center justify-center w-full bg-gray-200">
            <div className="p-5 shadow-md">
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
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none text-white focus:ring-gray-50 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
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
          </div>
          <hr />
        </div>

        <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10">
          <div className="items-center justify-center w-full bg-gray-200">
            <div className="p-5 shadow-md">
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
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none text-white focus:ring-gray-50 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
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
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Publication;

import React, { useState, useEffect, useRef } from 'react';
import CreatePost from "../Home/CreatePost";
import { FaArrowLeft } from 'react-icons/fa';

const Publication = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownItems = [
    { label: 'Modificar', link: '#' },
    { label: 'Eliminar', link: '#' },
    { label: 'Dashboard', link: '#' },
    { label: 'Settings', link: '#' },
    { label: 'Earnings', link: '#' },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="flex items-center">
            <button className="flex items-center text-gray-900" onClick={() => setRegistered(3)}>
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          <br />
          <div className="p-5 shadow-md bg-white">
            <div className="flex w-full justify-between pb-3">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                <div className="text-lg font-bold text-slate-700">Pregunta de Joe Smith</div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-xs text-neutral-500">2 hours ago</div>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
            </div>
            <hr />
            <div>
              <div className="mt-4 mb-6">
                <div className="mb-3 text-xl text-left font-bold text-gray-400">Muy Buena</div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                  <div className="text-lg text-gray-400">Respuesta de Joe Smith</div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-xs text-neutral-500 text-gray-400">2 hours ago</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
            <br />
            <CreatePost />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="flex cursor-pointer items-center transition hover:text-slate-600">
            <h1 className="text-black pl-24 flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span className="ml-2">COMENTARIOS</span>
            </h1>
          </div>
          <div className="items-center justify-center mt-5">
            <div className="bg-gray-200">
              <div className="p-5 shadow-md">
                <div className="flex w-full justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                    <div className="text-lg font-bold text-slate-700">Joe Smith</div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-xs text-neutral-500">2 hours ago</div>
                    <button
                      id="dropdownMenuIconHorizontalButton"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none text-white focus:ring-gray-50 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
                      type="button"
                      onClick={handleButtonClick}
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
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
              {isDropdownVisible && (
                <div id="dropdownDotsHorizontal" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0 mt-2">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    {dropdownItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Publication;
