import React from 'react'
import style from './RightSide.module.css'
import { Updates } from '../Updates/Updates'
import { CustomerReview } from '../CustomerReview/CustomerReview'

export const RightSide = () => {
  return (
    <div className={style.RightSide}>
        <div>
            <h2>Updates</h2>
            <Updates/>
        </div>
        <div>
            <h2>Customer Reviews</h2>
            <CustomerReview/>
        </div>
    </div>
  )
}

