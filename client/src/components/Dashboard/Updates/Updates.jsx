import React from 'react'
import style from './Updates.module.css'
import { UpdatesData } from '../Data/Data'


export const Updates = () => {

    
  return (
    <div className={style.Updates}>
        {UpdatesData.map((update) => {
        return (
          <div className={style.update}>
            <img src={update.img} alt="profile" />
            <div className={style.notification}>
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

