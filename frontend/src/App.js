import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "./components/Home.js";
import City from "./components/City.js";
import Update from "./components/Update.js";
import Lifestyle from "./components/Lifestyle.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



function App() {
  const [token,setToken] = useState(null);

  useEffect(() => {


  });
  if(!token) return (
    <div className="app">

    <div id="routes">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  </div>
  );
  return (
    <div className="app">

    <div id="routes">
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/city" element={<City/>} />
          <Route path="/lifestyle" element={<Lifestyle/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
