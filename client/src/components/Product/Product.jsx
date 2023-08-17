import style from './Product.module.css'
import { BsBalloonHeart } from 'react-icons/bs'

export const Product = ({id, name, categoryId, description, price, image}) => {
  return (
    <div key={id} className={style.prodCont}>
        <h3>{categoryId}</h3>
        <BsBalloonHeart className={style.prodHeartEmpty} size={28}/>
        <h2>{name}</h2>
        <img className={style.prodImg} src={image} alt=''/>
        <p>Precio: ${price}</p>
    </div>
  )
}
