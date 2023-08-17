import style from './About.module.css';
import React from 'react';
import maradona from './extraAssets/Marado2.jpg';
import messi from './extraAssets/Messi.jpg';
import kempes from './extraAssets/Kempes.jpg';
import fangio from './extraAssets/Fangio.jpg';
import reutemann from './extraAssets/Reutemann.jpg';

export const About = () => {
    return(
    <div>
        <div className={style.aboutUs}>
        <h2 >About us</h2>
        </div>
        <div className={style.line}></div>
        <div className={style.aboutContainer}>
            <p>
            Our goal is to create a comprehensive platform where consumers can explore and purchase items ranging from health-promoting foods to sustainable cleaning products. Beyond mere commercial transactions, we strive to foster a community that shares our values.
            </p>
            <p>
            Our platform aspires to be a one-stop shop for those seeking not only high-quality products, but also a means to contribute to a more eco-conscious lifestyle.
            </p>
        </div>
        <div className={style.meetUs}>
        <h2>Meet our team</h2>
        </div>
        <div className={style.lineTwo}></div>
        <div className={style.meetContainer}>
            <p>
            Our philosophy is simple, hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
            </p>
        </div>
        <div className={style.cards}>
            <img src={maradona} alt='Carta 1'/>
            <img src={messi} alt='Carta 2'/>
            <img src={kempes} alt='Carta 3'/>
            <img src={fangio} alt='Carta 4'/>
            <img src={reutemann} alt='Carta 5'/>
        </div>
    </div>
    )
}