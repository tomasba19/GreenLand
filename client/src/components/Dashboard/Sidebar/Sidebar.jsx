import React, { useState } from "react";
import style from './Sidebar.module.css'
import image from "../../../assets/index"
import { NavLink } from "react-router-dom";
import { SidebarData } from '../Data/Data'
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";

export const Sidebar = () => {
const [selected, setSelected] = useState(0);



  return (
    <div className={style.sidebar}>
        {/*Logo */}
        <div className={style.logo}>
            <span>GreenLand</span>
        </div>
        {/*menu */}
        <div className={style.menu}>
        <NavLink
          to="/dashboard"
          className={`${style.menuItem} ${selected === 0 ? style.active : ''}`}
          onClick={() => setSelected(0)}
        >
            <UilEstate />
            <span className={style.noUnderline}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/dashboard/orders"
          className={`${style.menuItem} ${selected === 1 ? style.active : ''}`}
          onClick={() => setSelected(1)}
        >
          <UilClipboardAlt />
          <span className={style.noUnderline}>Orders</span>
        </NavLink>
        <NavLink
          to="/dashboard/customers"
          className={`${style.menuItem} ${selected === 2 ? style.active : ''}`}
          onClick={() => setSelected(2)}
        >
          <UilUsersAlt />
          <span className={style.noUnderline}>Customers</span>
        </NavLink>
        <NavLink
          to="/dashboard/products"
          className={`${style.menuItem} ${selected === 3 ? style.active : ''}`}
          onClick={() => setSelected(3)}
        >
          <UilPackage />
          <span className={style.noUnderline}>Products</span>
        </NavLink>
        <NavLink
          to="/dashboard/analytics"
          className={`${style.menuItem} ${selected === 4 ? style.active : ''}`}
          onClick={() => setSelected(4)}
        >
          <UilChart />
          <span className={style.noUnderline}>Analytics</span>
        </NavLink>
            {/* signoutIcon */}
            <div className={style.menuItem}>
                <NavLink to={"/home"} className={style.menuItem}>
                <UilSignOutAlt/>
                </NavLink>
            </div>
        </div>
    </div>
  )
}



//<img className={style.logo_greenland} src={image.logo_greenland} alt="logo" />


/*
<div className={style.menu}>
            {SidebarData.map((item, index) => (
            <NavLink
                to={`/${item.heading.toLowerCase()}`} // Genera la ruta basada en el título
                className={`${style.menuItem} ${selected === index ? style.active : ''}`}
                key={index}
                onClick={() => setSelected(index)}
            >
            <item.icon />
            <span>{item.heading}</span>
        </NavLink>
*/