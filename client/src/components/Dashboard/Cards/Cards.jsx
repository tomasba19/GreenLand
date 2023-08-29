import React from 'react'
import style from './Cards.module.css'
import { cardsData } from '../Data/Data'
import { Card } from '../Card/Card'


export const Cards = () => {
  return (
    <div className={style.Cards}>
        {cardsData.map((card, id) => {
        return (
            <div className={style.parentContainer} key={id}>
                <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              />
              </div>
            );
          })}
        </div>
      );
    };


    /*



    */