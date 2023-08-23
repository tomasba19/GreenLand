import style from './Product.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlusFill } from 'react-icons/bs'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export const Product = ({ id, name, rating, description, price, image }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
      if (lastSpaceIndex === -1) {
        return text.slice(0, maxLength) + '...';
      } else {
        return text.slice(0, lastSpaceIndex) + '...';
      }
    }
  };

  const renderStars = (rating) => {
    const fullStars   = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.1;
    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<BsStarFill key={i} className={style.star} />);
    }

    if (hasHalfStar) {
      starElements.push(<BsStarHalf key="half" className={style.star} />);
    }

    const emptyStars = 5 - starElements.length;
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<BsStar key={`empty-${i}`} className={style.star} />);
    }

    return starElements;
  };

  const addToCart = () => {
    const product = {
      id          : id,
      title       : name,
      description : description,
      unit_price  : price,
      quantity    : 1,
      currency_id : 'USD',
      picture_url : image,
    };
  
    const products        = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const existingProduct = products?.find((p) => p.id === product.id);
  
    if (!existingProduct) {
      products.push(product);
      localStorage.setItem('cartProducts', JSON.stringify(products));
    } else {
      console.log('Este producto ya está en el carrito.');
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
      <div className={style.prodCart} onClick={addToCart}>
        <BsCartPlusFill size={35} />
      </div>
      <div className={style.prodStarCont}>
        {renderStars(rating)}
      </div>
    </div>
  )
}
