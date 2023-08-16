// Este es el componente principal de la app, aquí se renderizan los distintos componentes de la interfaz
import React from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/footer/Footer";

function App() {
  const location = useLocation();

  return (
    /*Estilos para el scroll-bar, pendiente de modularizar*/
    <div className="container-scroll">

    {
      location.pathname !== '/' && <NavBar/>
    }

    <Routes>
    
    </Routes>

    {
      location.pathname !== '/' && <Footer/>
    }


    </div>  
  )
}

export default App;
