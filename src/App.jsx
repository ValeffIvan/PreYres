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

const App = () => {
  return (
    <Router>  
        <SideBarLogin/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
          <DiscoverPeople/> 
    </Router>
  );
}

export default App;
