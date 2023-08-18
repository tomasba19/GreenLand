import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logoNav from '../../assets/logo_greenland.png'
import style from './NavBar.module.css'

const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/shop', text: 'Shop' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
];

export const NavBar = () => {
    const location        = useLocation();
    const [ fix, setFix ] = useState(false);

    function setFixed(){
        if(window.scrollY >= 150){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    
    window.addEventListener("scroll", setFixed)

    return (
        <div className={`${style.navCont} ${fix ? style.navContFix : ''}`}>
            <img src={logoNav} alt="logo" />
            <div className={style.navLink}>
            {navLinks.map((link) => (
                <NavLink
                    key={link.to}
                    className={`${style.navLink} ${
                    fix ? style.navLinkFix : ''
                    } ${location.pathname === link.to && fix ? style.activeFix : ''} ${
                    location.pathname === link.to ? style.active : ''
                    }`}
                    to={link.to}
                >
                    {link.text}
                </NavLink>
            ))}
      </div>
            <div className={style.buttonCont}>
                <button className={style.buttonLog}>Log In</button>
                <button className={style.buttonSign}>Sign Up</button>
            </div>
        </div>
    )
}
