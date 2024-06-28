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
import { useEffect, useState } from "react";
import SideBar from "./Components/SideBar/SideBarLeft-logged";
import Configuration from "./Pages/ConfigurationPage";
import Notifications from "./Pages/Notifications";
import Publication from "./Components/Posts/Publication";
import Ads from "./Components/SideBar/Ads";
import SearchPage from "./Pages/SearchPage";
import MobileMenu from "./Components/SideBar/MobileMenu";
import MobileLogin from "./Pages/MobileLogin";
import { useMediaQuery } from 'react-responsive';
import MobileConfig from "./Pages/MobileConfig";

const App = () => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('isAuth')));
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Router>
      <div className="flex">
        {!isMobile && (isAuth ? <DiscoverPeople /> : <Ads />)}
        {!isMobile ? (isAuth ? <SideBar /> : <SideBarLogin />) : <MobileMenu />}
        <div className=" flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/configuracion" element={<Configuration />} />
            <Route path="/notificaciones" element={<Notifications />} />
            <Route path="/publicacion" element={<Publication />} />
            <Route path="/comentario" element={<Configuration />} />
            <Route path="/buscador" element={<SearchPage />} />
            <Route path="/login" element={<MobileLogin />} />
            <Route path="/mobileConfig" element={<MobileConfig />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
