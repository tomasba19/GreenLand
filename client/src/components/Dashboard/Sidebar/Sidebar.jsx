import React, { useState } from "react";
import style from './Sidebar.module.css'
import image from "../../../assets/index"
import { NavLink } from "react-router-dom";
import { SidebarData } from '../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

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
            {SidebarData.map((item, index) => (
            <div
                className={`${style.menuItem} ${selected === index ? style.active : ''}`}
                key={index}
                onClick={() => setSelected(index)}
            >
            <item.icon />
            <span>{item.heading}</span>
        </div>
      ))}
            {/* signoutIcon */}
            <div className={style.menuItem}>
                <NavLink to={"/home"}>
                <UilSignOutAlt/>
                </NavLink>
            </div>
        </div>
    </div>
  )
}



//<img className={style.logo_greenland} src={image.logo_greenland} alt="logo" />
