import { useSelector } from "react-redux";
import { BsFillBagCheckFill } from "react-icons/bs"
import { MdOutlineCreditScore } from "react-icons/md"
import { FaCartArrowDown } from "react-icons/fa"
import { PiUserCircleFill } from "react-icons/pi"
import { MdOutlineFavorite } from "react-icons/md"
import { FaUserCog } from "react-icons/fa"
import React, { useState } from 'react';
import style from './UserProfile.module.css';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { WhisList } from "../Whislist/Whislist";

export const UserProfile = () => {
  const auth     = useSelector((state) => state.authData);
  const tabs     = [
    { name: 'Update Profile'    , icon: <FaUserCog />            },
    { name: 'Order History'     , icon: <BsFillBagCheckFill />   },
    { name: 'All transactions'  , icon: <MdOutlineCreditScore /> },
  ];
  console.log(auth);

  const tabContents = [
    <div className={style.userInfoGrid}>
      <div className={style.userPhotoCont}>
        {auth?.image 
        ? <img src={auth.image} alt="userPhoto"/> 
        : <PiUserCircleFill size={55}/>}
        <h1>
          {auth.name}
        </h1>
      </div>
      <div className={style.userDetailCont}> </div>
    </div>,
    <div>Contenido para Order History</div>,
    <div>Contenido para All transactions</div>,
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div className={style.content}>
      <ul className={style.tabContainer} role="tablist">
        {tabs.map((tab, index) => (
          <li className={`${style.tab} ${activeTabIndex === index ? style.tabActive : ''}`} key={index}>
            <a
              className={`${style.link} ${activeTabIndex === index ? style.linkActive : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              <span className={style.tabName}>{tab.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={style.tabContent}>
        {tabContents[activeTabIndex]}
      </div>
    </div>
  );
};
