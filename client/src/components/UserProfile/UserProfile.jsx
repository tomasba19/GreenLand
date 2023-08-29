import React from 'react'
import style from './UserProfile.module.css'
import { useSelector } from "react-redux";
import { AiOutlineDashboard } from "react-icons/ai"
import { BsFillBagCheckFill } from "react-icons/bs"
import { MdOutlineCreditScore } from "react-icons/md"
import { FaCartArrowDown } from "react-icons/fa"
import { MdOutlineFavorite } from "react-icons/md"
import { FaUserCog } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"

export const UserProfile = () => {
  const auth = useSelector((state) => state.authData);
  console.log(auth);

  return (
    <div className={style.parent}>
      <div className={style.menuProfile}> 
        <img src={auth?.image} alt=''/>
        <div>
          <AiOutlineDashboard size={30}/>
          Dashboard
        </div>
        <div>
          <BsFillBagCheckFill size={30}/>
          Order History
        </div>
        <div>
          <MdOutlineCreditScore size={30}/>
          All transactions
        </div>
        <div>
          <MdOutlineFavorite size={30}/>
          Favorite List
        </div>
        <div>
          <FaCartArrowDown size={30}/>
          Saved Products
        </div>
        <div>
          <FaUserCog size={30}/>
          Update Profile
        </div>
        <div>
          <BiLogOut size={30}/>
          LogOut
        </div>
      </div>
      <div className={style.detailProfile}> </div>
    </div>
  )
}
