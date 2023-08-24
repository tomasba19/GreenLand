import { NavLink, useLocation } from 'react-router-dom'
import { MdFavorite } from "react-icons/md"
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import logoNav from '../../assets/logo_greenland.png'
import style from './NavBar.module.css'

const navLinks = [
    { to: '/home', text: 'Home' },
    { to: '/shop', text: 'Shop' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
];

export const NavBar = () => {
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);
    const [ fix, setFix ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

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
            <div className={`${showMenu ? style.navLinkRespon : style.navLinkCont}`}>
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
                <button className={`${showMenu ? style.navButtonShow : style.navButtonNoShow}`} onClick={toggleMenu}>
                    <FaTimes size={20}/>
                </button>
            </div>
            <button className={`${showMenu ? style.navButtonNoShow : style.navButtonShow}`} onClick={toggleMenu}>
                <FaBars size={20}/>
            </button>
            <div className={style.buttonCont}>
                <NavLink to={'/whislist'} className={style.buttonCart}><MdFavorite size={30}/></NavLink>
                <NavLink to={'/cart'} className={style.buttonCart}><FaShoppingBag size={30}/></NavLink>
                <NavLink to={'/login'} className={style.buttonLog}>Log In</NavLink>
                <NavLink to={'/signup'} className={style.buttonSign}>Sign Up</NavLink>
            </div>
        </div>
    )
}
