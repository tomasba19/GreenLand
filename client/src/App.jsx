// Este es el componente principal de la app, aquí se renderizan los distintos componentes de la interfaz
import React from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from "./components/NavBar/NavBar";
import { Landing } from "./components/Landing/Landing";
import { Footer } from "./components/footer/Footer";
import { Products } from "./components/Products/Products";
import { Login }  from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { About } from "./components/About/About";

function App() { 
  const location = useLocation();

  return (
    /*Estilos para el scroll-bar, pendiente de modularizar*/
    <div className="container-scroll">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/shop" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>  
  )
}

export default App;