import './Componet/Navbar.js'
import './App.css';
import Navbar from './Componet/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Componet/Login.js';
import Button from './Componet/Button.js';
import Home from './Pages/Home.js';
import Attendence from './Pages/Attendence.js';
import Register from './Pages/Register.js';
import CardMenu from './Componet/CardMenu.js';
import Menu from './Componet/Menu.js';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Button" element={<Button/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/CardMenu" element={<CardMenu/>} />
        <Route path="/Attendence" element={<Attendence/>} />
        <Route path="/Menu" element={<Menu/>} />
        </Routes>
      </Router>
  );
}

export default App;
