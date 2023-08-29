import React from 'react'
import style from './MainDash.module.css'
import { Cards } from '../Cards/Cards'
import Table from '../Table/Table'

export const MainDash = () => {
  return (
    <div className={style.MainDash}>
        <h1>Dashboard</h1>
        <Cards/>
        <h3>Recent Orders</h3>
        <Table/>
    </div>
  )
}
