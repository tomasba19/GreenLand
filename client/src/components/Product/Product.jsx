import style from './Product.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlusFill } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const Product = ({ id, name, categoryId, description, price, image }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      // Encuentra el último espacio dentro del límite de caracteres
      const lastSpaceIndex = text.lastIndexOf(' ', maxLength);

      if (lastSpaceIndex === -1) {
        // Si no se encuentra un espacio, simplemente corta en el límite
        return text.slice(0, maxLength) + '...';
      } else {
        return text.slice(0, lastSpaceIndex) + '...';
      }
    }
  };

  return (
    <div key={id} className={style.prodCont}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt='' />
      </Link>
      <AiOutlineHeart className={style.prodHeartEmpty} size={28} />
      <h2>{name}</h2>
      <h3>{truncateDescription(description, 30)}</h3>
      <p>Price: ${price}</p>
      <div className={style.prodCart}>
        <BsCartPlusFill size={35} />
      </div>
      <div className={style.prodStarCont}>
        <AiFillStar className={style.star} />
        <AiFillStar className={style.star} />
        <AiFillStar className={style.star} />
        <AiFillStar className={style.star} />
        <AiOutlineStar className={style.star} />
      </div>
    </div>
  )
}
