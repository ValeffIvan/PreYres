import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CreatePost from "../Home/CreatePost";

const Publication = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState({ main: false, comments: {} });
  const dropdownRef = useRef(null);

  const handleDropdownClick = (event, type, index) => {
    event.stopPropagation();
    setIsDropdownVisible(prevState => {
      if (type === 'main') {
        return { ...prevState, main: !prevState.main };
      } else {
        return {
          ...prevState,
          comments: {
            ...prevState.comments,
            [index]: !prevState.comments[index],
          }
        };
      }
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible({ main: false, comments: {} });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    console.log('Like clicked');
  };

  const dropdownItems = [
    { label: 'Modificar', link: '#' },
    { label: 'Eliminar', link: '#' },
  ];

  const comments = [
    {
      author: 'Michael Brown',
      time: 'hace 1 hora',
      avatar: 'https://i.pravatar.cc/32?img=3',
      text: 'Interesante perspectiva!',
      likes: 8,
    },
    {
      author: 'Jane Smith',
      time: 'hace 2 horas',
      avatar: 'https://i.pravatar.cc/32?img=4',
      text: 'Muy de acuerdo!',
      likes: 5,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 sm:ml-96 sm:mr-64 mt-5">
        <div className="w-full max-w-5xl">
          <div className="flex items-center mb-4">
            <button className="flex items-center text-gray-900" onClick={() => navigate(-1)}>
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          <div className="p-5 shadow-md bg-white rounded-lg relative">
            <div className="flex justify-between items-center pb-3">
              <div className="flex items-center space-x-3">
                <img
                  src="https://i.pravatar.cc/32?img=1"
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-slate-700">Pregunta de Joe Smith</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xs text-neutral-500">hace 3 horas</div>
                <button
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                  onClick={(e) => handleDropdownClick(e, 'main')}
                  ref={dropdownRef}
                >
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {isDropdownVisible.main && (
                  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {dropdownItems.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mb-4">
              <div className="text-base font-semibold mb-3">¿Qué opinas sobre la nueva película que salió esta semana?</div>
            </div>

            <hr />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://i.pravatar.cc/32?img=2"
                    alt="Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="text-gray-500">
                    <div className="text-sm font-semibold mb-1">Muy Buena</div>
                    <div className="text-xs">Respuesta de Jane Doe</div>
                  </div>
                </div>
                <div className="text-xs text-neutral-500">hace 2 horas</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-slate-500 mt-4">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex items-center transition cursor-pointer hover:text-slate-600" onClick={handleLikeClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span className="text-xs">4</span>
                </div>
              </div>
            </div>
            <br />
            <CreatePost />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 sm:ml-96 sm:mr-64">
        <div className="w-full max-w-5xl">
          <div className="flex items-center mb-4">
            <h1 className="text-black flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span className="ml-2">COMENTARIOS</span>
            </h1>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-5 shadow-md bg-white rounded-lg relative mb-4 last:mb-0">
                <div className="flex justify-between items-center pb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={comment.avatar}
                      alt="Avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">Comentario de {comment.author}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-neutral-500">{comment.time}</div>
                    <button
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                      onClick={(e) => handleDropdownClick(e, 'comment', index)}
                      ref={dropdownRef}
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                    {isDropdownVisible.comments[index] && (
                      <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          {dropdownItems.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 mb-4">
                  <div className="text-base font-semibold mb-3">{comment.text}</div>
                </div>

                <div className="flex items-center justify-between text-slate-500 mt-4">
                  <div className="flex space-x-4 md:space-x-8">
                    <div className="flex items-center transition cursor-pointer hover:text-slate-600" onClick={handleLikeClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span className="text-xs">{comment.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Publication;
