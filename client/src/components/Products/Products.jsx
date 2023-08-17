import data from '../../../../api/src/utils/products.json'; // Ruta relativa al archivo JSON
import style from './Products.module.css'
import { Product } from '../Product/Product';
import { Pagination } from "../Paginate/Paginate"
import { useSelector } from 'react-redux';

export const Products = () => {

  const { numPageState } = useSelector((state) => state);

    const cantProdcutsForPage = 8
    let start = (numPageState - 1) * cantProdcutsForPage;  
    let end = numPageState * cantProdcutsForPage;       
    let cantPages = Math.ceil(data.length / cantProdcutsForPage)
    //slice realiza el corte 
    const dataSlice = data.slice(start, end)
  return (
    <div>

      <div className={style.prodsGrid}>
        {dataSlice.map(product => (
          product.active === true &&
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            categoryId={product.categoryId}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className={style.paginate}>
        <Pagination numPage={numPageState} cantPage={cantPages} />
      </div>

    </div>
  )
}
