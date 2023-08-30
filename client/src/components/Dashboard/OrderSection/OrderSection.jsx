import React from 'react'
import style from './OrderSection.module.css'
import { OrderTable } from './OrderTable'




export const OrderSection = () => {
  const ordersData = [
    { id: 1, date: 19/3/99, totalPrice: 222.6, status: 'approved', userId: 3 },
  
  ]
  return (
    <div className={style.OrderSection}>
        <h2>Orders</h2>
        <OrderTable ordersData={ordersData} />
    </div>
  )
}

