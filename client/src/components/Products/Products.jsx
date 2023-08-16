import data from '../../../../api/src/utils/products.json'; // Ruta relativa al archivo JSON
import style from './Products.module.css'
import { Product } from '../Product/Product';

export const Products = () => {
  return (
    <div className={style.prodsGrid}>
        {data.map(product => (
            product.active === true && 
            <Product
                key          = { product.id } 
                id           = { product.id }
                name         = { product.name }
                category     = { product.category } 
                description  = { product.description }
                price        = { product.price }
                image        = { product.image }
            />
        ))}
    </div>
  )
}
