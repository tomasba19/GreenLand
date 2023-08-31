import { useDispatch, useSelector } from "react-redux"
import { BsFillBagCheckFill } from "react-icons/bs"
import { PiUserCircleFill } from "react-icons/pi"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaUserCog } from "react-icons/fa"
import { getOrdersPerUser } from "../../redux/action"
import React, { useEffect, useState } from "react"
import style from "./UserProfile.module.css"

export const UserProfile = () => {
  const dispatch = useDispatch()
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const auth = useSelector((state) => state.authData)
  const tabs = [
    { name: "Account Profile", icon: <FaUserCog /> },
    { name: "Order History", icon: <BsFillBagCheckFill /> },
    { name: "Change Password", icon: <RiLockPasswordFill /> },
  ]

  useEffect(() => {
    dispatch(getOrdersPerUser(auth?.id))
  }, [dispatch])

  const tabContents = [
    <div className={style.userInfoGrid}>
      <div className={style.userPhotoCont}>
        {auth?.image ? (
          <img src={auth.image} alt="userPhoto" />
        ) : (
          <PiUserCircleFill size={55} />
        )}
        <h1>{auth?.name}</h1>
      </div>
      <div className={style.userDetailCont}>
        <form>
          <div className={style.formRow}>
            <div className={style.input}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"></input>
            </div>
            <div className={style.input}>
              <label htmlFor="lastname">LastName</label>
              <input type="text"></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.input}>
              <label htmlFor="genre">Genre</label>
              <input type="text" name="name"></input>
            </div>
            <div className={style.input}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="text"></input>
            </div>
          </div>

          <div className={`${style.input} ${style.inputRow}`}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="name"></input>
          </div>

          <div className={`${style.input} ${style.inputRow}`}>
            <label htmlFor="address">Address</label>
            <input type="text"></input>
          </div>

          <div className={`${style.input} ${style.inputRow}`}>
            <label htmlFor="emailAddress">Email Address</label>
            <input type="text"></input>
          </div>
        </form>
        <button>Save Changes</button>
      </div>
    </div>,
    <div className={style.orderContainer}>
      {auth?.orders?.length > 0 ? (
        auth.orders.map((order) => (
          <div className={style.orderRowContainer} key={order.id}>
            <div className={style.orderRow}>
              <h1>Order ID</h1>
              <h2>{order.id.toString().padStart(8, "0")}</h2>
            </div>

            <div className={style.orderRow}>
              <h1>Date</h1>
              <h2>{order.date}</h2>
            </div>

            <div className={style.orderRow}>
              <h1>Total Price</h1>
              <h2>${order.totalPrice}</h2>
            </div>

            <div className={style.orderRow}>
              <h1>Status Order</h1>
              <h2>{order.status}</h2>
            </div>
          </div>
        ))
      ) : (
        <p>You haven't made any purchases yet.</p>
      )}
    </div>,
  ]

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex)
  }

  return (
    <div className={style.content}>
      <ul className={style.tabContainer} role="tablist">
        {tabs.map((tab, index) => (
          <li
            className={`${style.tab} ${
              activeTabIndex === index ? style.tabActive : ""
            }`}
            key={index}
          >
            <a
              className={`${style.link} ${
                activeTabIndex === index ? style.linkActive : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              <span className={style.tabName}>{tab.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={style.tabContent}>{tabContents[activeTabIndex]}</div>
    </div>
  )
}
