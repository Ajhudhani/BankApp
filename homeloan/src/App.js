// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard/Dashboard";
import Loanapp from "./Components/Dashboard/Loanapp";
import Comingsoon from "./Components/Comingsoon/Comingsoon";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/loanapp" element={<Loanapp />} />
            <Route path="/comingsoon" element={<Comingsoon />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
