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
import { useState } from "react";
import SideBar from "./Components/SideBar/SideBarLeft-logged";
import Configuration from "./Pages/ConfigurationPage";
import Notifications from "./Pages/Notifications";
import Publication from "./Components/Posts/Publication";
import Ads from "./Components/SideBar/Ads";
import SearchPage from "./Pages/SearchPage";


const App = () => {

  const [isAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <Router>  
        {isAuth ? (<SideBar/>) : (<SideBarLogin/>)}
        {isAuth ? (<DiscoverPeople/>) :  (<Ads/>)}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile/>} />
          <Route path="/configuracion" element={<Configuration/>} />
          <Route path="/notificaciones" element={<Notifications/>} />
          <Route path="/publicacion" element={<Publication/>} />
          <Route path="/comentario" element={<Configuration/>} />
          <Route path="/buscador" element={<SearchPage/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
