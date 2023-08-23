import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom'
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/footer/Footer";
import { Products } from "./components/Products/Products";
import { Login }  from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { About } from "./components/About/About";
import { Form } from "./components/Form/Form";
import { Detail } from "./components/Detail/Detail";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Landing } from "./components/Landing/Landing";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

function App() { 
  const location = useLocation();
  return (
    /*Estilos para el scroll-bar, pendiente de modularizar*/
    <div className="containerScroll">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Products/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      {location.pathname !== '/' && <Footer/>}
    </div>  
  )
}

export default App;