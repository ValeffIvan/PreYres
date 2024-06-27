import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MobileMenu.css";

const MobileMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setSelected("home");
    else if (path === "/perfil") setSelected("profile");
    else if (path === "/notificaciones") setSelected("notifications");
    else if (path === "/buscador") setSelected("search");
    else if (path === "/configuracion") setSelected("settings");
  }, [location]);

  const handleSelect = (buttonName, path) => {
    setSelected(buttonName);
    navigate(path);
  };

  return (
    <div className="mobile-menu fixed bottom-0 left-0 right-0 px-7 bg-white shadow-lg z-50">
      <div className="flex">
        <div className="flex-1 group">
          <button
            className={`flex flex-col items-center justify-center mx-auto px-4 pt-2 w-full ${
              selected === "home" ? "text-indigo-500" : "text-gray-400"
            }`}
            onClick={() => handleSelect("home", "/")}
          >
            <i className="far fa-home text-2xl mb-1"></i>
            <span
              className={`block w-5 h-1 mt-1 ${
                selected === "home" ? "bg-indigo-500" : "group-hover:bg-indigo-500"
              } rounded-full`}
            ></span>
          </button>
        </div>
        <div className="flex-1 group">
          <button
            className={`flex flex-col items-center justify-center mx-auto px-4 pt-2 w-full ${
              selected === "profile" ? "text-indigo-500" : "text-gray-400"
            }`}
            onClick={() => handleSelect("profile", "/perfil")}
          >
            <i className="far fa-user text-2xl mb-1"></i>
            <span
              className={`block w-5 h-1 mt-1 ${
                selected === "profile" ? "bg-indigo-500" : "group-hover:bg-indigo-500"
              } rounded-full`}
            ></span>
          </button>
        </div>
        <div className="flex-1 group">
          <button
            className={`flex flex-col items-center justify-center mx-auto px-4 pt-2 w-full ${
              selected === "notifications" ? "text-indigo-500" : "text-gray-400"
            }`}
            onClick={() => handleSelect("notifications", "/notificaciones")}
          >
            <i className="far fa-bell text-2xl mb-1"></i>
            <span
              className={`block w-5 h-1 mt-1 ${
                selected === "notifications" ? "bg-indigo-500" : "group-hover:bg-indigo-500"
              } rounded-full`}
            ></span>
          </button>
        </div>
        <div className="flex-1 group">
          <button
            className={`flex flex-col items-center justify-center mx-auto px-4 pt-2 w-full ${
              selected === "search" ? "text-indigo-500" : "text-gray-400"
            }`}
            onClick={() => handleSelect("search", "/buscador")}
          >
            <i className="far fa-search text-2xl mb-1"></i>
            <span
              className={`block w-5 h-1 mt-1 ${
                selected === "search" ? "bg-indigo-500" : "group-hover:bg-indigo-500"
              } rounded-full`}
            ></span>
          </button>
        </div>
        <div className="flex-1 group">
          <button
            className={`flex flex-col items-center justify-center mx-auto px-4 pt-2 w-full ${
              selected === "settings" ? "text-indigo-500" : "text-gray-400"
            }`}
            onClick={() => handleSelect("settings", "/configuracion")}
          >
            <i className="far fa-cog text-2xl mb-1"></i>
            <span
              className={`block w-5 h-1 mt-1 ${
                selected === "settings" ? "bg-indigo-500" : "group-hover:bg-indigo-500"
              } rounded-full`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
