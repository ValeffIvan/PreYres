import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import SideBar from "./Components/SideBar/SideBarLeft";
import DiscoverPeople from "./Components/SideBar/DiscoverPeople";

const App = () => {
  return (
    <Router>  
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
        
          <DiscoverPeople/> 
    </Router>
  );
}

export default App;
