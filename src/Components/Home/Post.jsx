import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);
  const dropdownRefs = useRef([]);

  const handleDropdownClick = (event, index) => {
    event.stopPropagation();
    setIsDropdownVisible(isDropdownVisible === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRefs.current.some(ref => ref && !ref.contains(event.target))) {
      setIsDropdownVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const posts = [
    {
      question: "¿Qué opinas sobre la nueva película que salió esta semana?",
      questionAuthor: "Joe Smith",
      questionTime: "hace 3 horas",
      questionAvatar: "https://i.pravatar.cc/32?img=1",
      answer: "Muy Buena",
      answerAuthor: "Jane Doe",
      answerTime: "hace 2 horas",
      answerAvatar: "https://i.pravatar.cc/32?img=2",
    },
    {
      question: "¿Cuál es tu libro favorito?",
      questionAuthor: "Emily Johnson",
      questionTime: "hace 1 hora",
      questionAvatar: "https://i.pravatar.cc/32?img=3",
      answer: "Cien años de soledad",
      answerAuthor: "Michael Brown",
      answerTime: "hace 30 minutos",
      answerAvatar: "https://i.pravatar.cc/32?img=4",
    },
  ];

  const handleLikeClick = (event) => {
    event.stopPropagation();
    console.log('Like clicked');
  };

  const dropdownItems = [
    { label: 'Modificar', link: '#' },
    { label: 'Eliminar', link: '#' },
  ];

  return (
  <>
      <div className="w-full max-w-5xl">
        {posts.map((post, index) => (
          <button
            key={index}
            onClick={() => navigate('/publicacion')}
            className="w-full text-left relative"
          >
            <div className="p-4 shadow-md bg-white rounded-lg mb-4">
              <div className="flex justify-between items-center pb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.questionAvatar}
                    alt="Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Pregunta de {post.questionAuthor}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-xs text-neutral-500">{post.questionTime}</div>
                  <button
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                    onClick={(event) => handleDropdownClick(event, index)}
                    ref={el => dropdownRefs.current[index] = el}
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {isDropdownVisible === index && (
                    <div className="z-10 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {dropdownItems.map((item, idx) => (
                          <li key={idx}>
                            <button href={item.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 mb-4">
                <div className="text-base font-semibold mb-3">{post.question}</div>
              </div>

              <hr />

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.answerAvatar}
                      alt="Avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="text-gray-500">
                      <div className="text-sm font-semibold mb-1">{post.answer}</div>
                      <div className="text-xs">Respuesta de {post.answerAuthor}</div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500">{post.answerTime}</div>
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
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Post;


