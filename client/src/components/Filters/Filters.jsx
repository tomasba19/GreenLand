import style from './Filters.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters } from '../../redux/action';

export const Filters = () => {
  const dispatch             = useDispatch()
  const allCategories       = useSelector((state) => state.allCategories)
  const [filter, setFilters] = useState({
    categories : [],
    minPrice   : 0,
    maxPrice   : 0,
    bestSeller : false,
  }) 

  const handleFilterCategory = (event) => {
    const { value, name, checked } = event.target;

    let updatedCategories = [...filter.categories];

    if (checked) {
      updatedCategories.push(Number(value));
    } else {
      updatedCategories = updatedCategories.filter((category) => category !== Number(value));
    }

    setFilters({ ...filter, [name]: updatedCategories });

    dispatch(applyFilters({ ...filter, [name]: updatedCategories }));
  }

  return (
    <div className={style.filtersContainer}>
        <div className={style.filtersTitleCont}>Category</div>
        {allCategories.map(category => 
          <label key={category.id}> 
            <input value={category.id} name="categories" type='checkbox' checked={filter.categories.includes(category.id)} onChange={handleFilterCategory} /> {category.name}
          </label>
        )}

        <div className={style.filtersTitleCont}>Filter By</div>
        <label htmlFor="priceRange">Price Range</label>
        <input type="range" id="priceRange" name="priceRange" min="0" max="100" step="1"/>
    </div>
  )
}
