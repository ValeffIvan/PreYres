import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import DiscoverPeople from "./Components/SideBar/DiscoverPeople";
import SideBarLogin from "./Components/SideBar/SideBarLeft-notLogged";
import Profile from "./Pages/Profile";
import { useState, useEffect } from "react";
import SideBar from "./Components/SideBar/SideBarLeft-logged";
import Configuration from "./Pages/ConfigurationPage";
import Notifications from "./Pages/Notifications";
import Publication from "./Components/Posts/Publication";
import Ads from "./Components/SideBar/Ads";
import SearchPage from "./Pages/SearchPage";
import MobileMenu from "./Components/SideBar/MobileMenu";

const App = () => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('isAuth')));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      console.log(`Window width: ${window.innerWidth}, isMobile: ${window.innerWidth < 768}`);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {isAuth ? <DiscoverPeople /> : <Ads />}
      {isMobile && isAuth ? <MobileMenu /> : isAuth ? <SideBar /> : <SideBarLogin />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/configuracion" element={<Configuration />} />
        <Route path="/notificaciones" element={<Notifications />} />
        <Route path="/publicacion" element={<Publication />} />
        <Route path="/comentario" element={<Configuration />} />
        <Route path="/buscador" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
