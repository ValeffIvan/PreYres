import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaUser, FaBell, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const SideBar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const CloseSession = () => {
    try {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    } catch (ex) {
      console.error('Error al iniciar sesión:', ex);
    }
  };

  const menuItems = [
    {
      label: 'Perfil',
      icon: <FaUser className="w-6 h-6 text-white mr-2" />,
      onClick: () => navigate("/perfil"),
    },
    {
      label: 'Notificaciones',
      icon: <FaBell className="w-6 h-6 text-white mr-2" />,
      onClick: () => setDropdownOpen(!dropdownOpen),
    },
    {
      label: 'Configuración',
      icon: <FaCog className="w-6 h-6 text-white mr-2" />,
      onClick: () => navigate("/configuracion"),
    },
    {
      label: 'Cerrar Sesión',
      icon: <FaSignOutAlt className="w-6 h-6 text-white mr-2" />,
      onClick: CloseSession,
    },
  ];

  const notifications = [
    { id: 1, message: 'A Juanjo Ramires le gustó', image: 'https://i.pravatar.cc/32?img=1' },
    { id: 2, message: 'María comentó tu publicación', image: 'https://i.pravatar.cc/32?img=2' },
    { id: 3, message: 'Pedro comenzó a seguirte', image: 'https://i.pravatar.cc/32?img=3' },
    { id: 4, message: 'Ana compartió tu post', image: 'https://i.pravatar.cc/32?img=4' },
    { id: 5, message: 'Luis respondió tu comentario', image: 'https://i.pravatar.cc/32?img=5' },
    { id: 6, message: 'Karla le gustó tu foto', image: 'https://i.pravatar.cc/32?img=6' },
    { id: 7, message: 'Andrés comenzó a seguirte', image: 'https://i.pravatar.cc/32?img=7' },
    { id: 8, message: 'Carlos mencionó tu nombre', image: 'https://i.pravatar.cc/32?img=8' },
    { id: 9, message: 'Fernanda comentó tu post', image: 'https://i.pravatar.cc/32?img=9' },
    { id: 10, message: 'Rosa compartió tu foto', image: 'https://i.pravatar.cc/32?img=10' },
  ];

  return (
    <div className="h-full px-3 pt-7 overflow-y-auto fixed top-0 left-0 z-40 w-96 hidden lg:block bg-gray-800 border-gray-700">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-[20px] max-w-[300px] flex flex-col w-full">
          <button className="text-center" onClick={() => navigate("/")}>
            <h4 className="text-xl font-bold text-navy-700 text-white">PreYres</h4>
          </button>
         <div className="mt-5 flex flex-col space-y-2">
            {menuItems.map((item, idx) => (
             <div key={idx} className="relative w-full" x-data="{ open: false }">
                <button
                  className={`w-full flex justify-between items-center py-3 px-6 text-white bg-blue-800 rounded-full hover:bg-blue-700 focus:outline-none ${item.label === 'Notificaciones' && dropdownOpen ? 'rounded-b-none' : ''}`}
                  onClick={item.onClick}
                >
                <span className="flex items-center">
                    {item.icon}
                    {item.label}
                  </span>
                  
                </button>
                {item.label === 'Notificaciones' && dropdownOpen && (
                  <div >
                    {notifications.slice(0, 5).map((notification) => (
                      <button
                        key={notification.id}
                        className="flex px-4 py-3 w-full bg-[#1E367F] hover:bg-[#2A427E]"
                        onClick={() => navigate("/notificaciones")}
                      >
                        <div className="flex items-center">
                          <img
                            className="rounded-full w-6 h-6"
                            src={notification.image}
                            alt="Notification image"
                          />
                        </div>
                        <div className="w-full">
                          <div className="text-sm text-white text-left ml-4">
                            {notification.message}
                          </div>
                        </div>
                      </button>
                    ))}

                    <button
                      className="w-full py-2 text-sm font-medium text-center rounded-b-xl text-white bg-[#2B3D66] hover:bg-[#2A427E]"
                      onClick={() => navigate("/notificaciones")}
                    >
                      <div className="inline-flex items-center">
                        <FaSearch className="w-4 h-4 me-2 text-gray-400" />
                        Ver todos
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ))}
            <input
              placeholder="Buscar en PreYres..."
              className="border sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-2 pl-5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
