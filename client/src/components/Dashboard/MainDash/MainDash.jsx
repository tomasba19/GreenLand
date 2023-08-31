import React from 'react'
import style from './MainDash.module.css'

import { RecentOrders } from '../Table/Table'
import { Cards } from '../Card/Card'


export const MainDash = () => {
  return (
    <div className={style.MainDash}>
        <h1>Dashboard</h1>
        <Cards/>
        
        <RecentOrders/>
    </div>
  )
}
