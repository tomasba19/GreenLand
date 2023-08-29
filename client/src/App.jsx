import { useEffect } from "react";
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
import { WhisList } from "./components/Whislist/Whislist";
import { useDispatch } from "react-redux";
import { authData, logout } from "./redux/action";
import decode from "jwt-decode";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { OrderSection } from "./components/Dashboard/OrderSection/OrderSection";
import { DashboardLayout } from "./components/Dashboard/DashboardLayout";
import { MainDash } from "./components/Dashboard/MainDash/MainDash";
import { RightSide } from "./components/Dashboard/RightSide/RightSide";
import { CustomerSection } from "./components/Dashboard/CustomerSection/CustomerSection";
import ProductSection from "./components/Dashboard/ProductSection/ProductSection";
import AnalyticSection from "./components/Dashboard/AnalyticSection/AnalyticSection";

function App() { 
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile) {
      const decodedToken = decode(storedProfile?.token)
      if (decodedToken.exp * 1000 < new Date().getTime()) dispatch(logout)
      else dispatch(authData(storedProfile));
    }
  }, [dispatch])

  return (
    /*Estilos para el scroll-bar, pendiente de modularizar*/
    <>
      {(location.pathname !== '/' && 
      location.pathname !== '/dashboard' &&
      location.pathname !== '/dashboard/orders' &&
      location.pathname !== '/dashboard/customers'&&
      location.pathname !== '/dashboard/products'&&
      location.pathname !== '/dashboard/analytics') && <NavBar />}
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
        <Route path="/wishlist" element={<WhisList/>}/>
        <Route path="/dashboard" element={<DashboardLayout><MainDash /><RightSide /></DashboardLayout>}/>
        <Route path="/dashboard/orders" element={<DashboardLayout><OrderSection /></DashboardLayout>}/>
        <Route path="/dashboard/customers" element={<DashboardLayout><CustomerSection /></DashboardLayout>}/>
        <Route path="/dashboard/products" element={<DashboardLayout><ProductSection /></DashboardLayout>}/>
        <Route path="/dashboard/analytics" element={<DashboardLayout><AnalyticSection /></DashboardLayout>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes>
      {(location.pathname !== '/' && 
      location.pathname !== '/dashboard' &&
      location.pathname !== '/dashboard/orders' &&
      location.pathname !== '/dashboard/customers'&&
      location.pathname !== '/dashboard/products'&&
      location.pathname !== '/dashboard/analytics') && <Footer/>}
    </>  
  )
}

export default App;
