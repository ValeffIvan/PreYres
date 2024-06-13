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


const App = () => {

  const [isAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <Router>  
        {isAuth ? (<SideBar/>) : (<SideBarLogin/>)}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <DiscoverPeople />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Profile />
              <DiscoverPeople />
            </>
          } />
          
        </Routes>
        
    </Router>
  );
}

export default App;
