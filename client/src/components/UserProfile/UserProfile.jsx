import { useDispatch, useSelector } from "react-redux"
import { BsFillBagCheckFill } from "react-icons/bs"
import { PiUserCircleFill } from "react-icons/pi"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaUserCog } from "react-icons/fa"
import { getOrdersPerUser } from "../../redux/action"
import React, { useEffect, useState } from "react"
import style from "./UserProfile.module.css"
import countries from "countries-list"
import axios from "axios"
const { VITE_SERVER_URL } = import.meta.env

export const UserProfile = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.authData)
  const tabs = [
    { name: "Account Profile", icon: <FaUserCog /> },
    { name: "Order History", icon: <BsFillBagCheckFill /> },
    { name: "Change Password", icon: <RiLockPasswordFill /> },
  ]
  const nameParts = auth?.name ? auth.name.split(" ") : []
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: nameParts[0] || null,
    lastname: nameParts[1] || null,
    email: auth?.email || null,
    genre: null,
    dateOfBirth: null,
    phone: null,
    country: null,
    address: null,
  })
  const [password, setPassword] = useState({
    newPassword: null,
    confirmNewPassword: null,
  })

  const countryOptions = Object.keys(countries.countries).map((countryCode) => (
    <option key={countryCode} value={countryCode.name}>
      {countries.countries[countryCode].name}
    </option>
  ))

  const handleInputs = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = () => {}

  const handlePassword = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setPassword({
      ...password,
      [name]: value,
    })
  }
  const handleSubmitPass = async () => {
    console.log("entre a handleSubmitPass === ")
    console.log(password.newPassword)
    try {
      const token = JSON.parse(localStorage.getItem("profile"))?.token
      const { data } = await axios.post(
        `${VITE_SERVER_URL}/users/updatePassword`,
        {
          confirmNewPassword: password.confirmNewPassword,
          newPassword: password.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      alert("error: " + error.response.data.error)
    }
  }

  console.log(auth)

  const isFormDataComplete = () => {
    const requiredFields = [
      "name",
      "lastname",
      "genre",
      "dateOfBirth",
      "phone",
      "country",
      "address",
    ]

    return requiredFields.every((field) => !!formData[field])
  }

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
        <form onSubmit={handleSubmit}>
          <div className={style.formRow}>
            <div className={style.input}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputs}
              ></input>
            </div>
            <div className={style.input}>
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputs}
              ></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.input}>
              <label htmlFor="genre">Genre</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleInputs}
              >
                <option value="None">None</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className={style.input}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputs}
              ></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.input}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="(+51) 555 555 555"
                onChange={handleInputs}
              ></input>
            </div>
            <div className={style.input}>
              <label htmlFor="country">Country</label>
              <select
                value={formData.country}
                name="country"
                onChange={handleInputs}
              >
                <option>Select a country</option>
                {countryOptions}
              </select>
            </div>
          </div>

          <div className={`${style.input} ${style.inputRow}`}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={formData.address}
              placeholder="Whashington 123"
              name="address"
              onChange={handleInputs}
            ></input>
          </div>

          <div className={`${style.input} ${style.inputRow}`}>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleInputs}
              disabled
            ></input>
          </div>
          <div className={style.errorMessage}>
            {isFormDataComplete() ? null : "Please complete all fields"}
          </div>
          <button disabled={!isFormDataComplete()}>Save Changes</button>
        </form>
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
        <span>You haven't made any purchases yet.</span>
      )}
    </div>,
    <div className={style.passwordContainer}>
      <form onSubmit={handleSubmitPass}>
        <div className={style.formRow}>
          <div className={style.input}>
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePassword}
            ></input>
          </div>
          <div className={style.input}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              value={password.confirmNewPassword}
              onChange={handlePassword}
            ></input>
          </div>
        </div>

        <button
          type="submit"
          // disabled={!password.newPassword || !password.confirmNewPassword}
        >
          Change password
        </button>
      </form>
    </div>,
  ]

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex)
  }

  useEffect(() => {
    dispatch(getOrdersPerUser(auth?.id))
  }, [dispatch])

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
