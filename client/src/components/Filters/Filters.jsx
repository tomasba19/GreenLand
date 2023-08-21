import style from './Filters.module.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters } from '../../redux/action';
import { SearchBar } from '../SearchBar/SearchBar';
import { Modal } from '../Modal/Modal';

export const Filters = () => {

  const dispatch = useDispatch()
  const allCategories = useSelector((state) => state.allCategories)
  const [filter, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 100,
    sortBy: "",
    bestSeller: false,
    name: "", // adding name , for search by name
  })
  const [searchTerm, setSearchTerm] = useState("")

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

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filter, maxPrice: value });
    dispatch(applyFilters({ ...filter, maxPrice: value }));
  }

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filter, [name]: value });
    dispatch(applyFilters({ ...filter, [name]: value }));
  }

  const handleBestSellersChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filter, [name]: checked });
    dispatch(applyFilters({ ...filter, [name]: checked }));

  };

  // adding for the search bar
  const [modalMessage, setModalMessage] = useState("");
  const filteredProducts = useSelector((state) => state.filterProducts);

  const handleSearch = (searchTerm) => {
    //console.log('Search term:', searchTerm);

    setModalMessage('');// ****

    setFilters({ ...filter, name: searchTerm });

    if (filteredProducts.length == 0 && searchTerm) {
      setModalMessage('No products found.');
    }
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  const closeModal = () => {
    setModalMessage("");
    //console.log("LIMPIANDO SEARCHBAR clearSearchTerm");
    clearSearchTerm();
    handleSearch("");
  };

  useEffect(() => {
    //console.log("Filters changed:", filter);
    dispatch(applyFilters(filter));

  }, [dispatch, filter])

  return (
    <div className={style.filtersContainer}>

      <div className={style.filtersTitleCont}>Search Product</div>

      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        clearSearchTerm={clearSearchTerm}
      />

      {modalMessage && (
        <Modal
          show={modalMessage !== ""}
          text={modalMessage}
          onClose={closeModal}
          imageUrl= "../../../public/Oooooops.png"
        />
      )}

      <div className={style.filtersTitleCont}>Best Sellers</div>
      <div className={style.filtersBestSeller}>
        <label>
          <input type="checkbox" name="bestSeller" checked={filter.bestSeller} onChange={handleBestSellersChange}
          />
          Best Sellers
        </label>
      </div>

      <div className={style.filtersTitleCont}>Category</div>
      <div className={style.filtersCategOpt}>
        {allCategories.map(category =>
          <label key={category.id}>
            <input value={category.id} name="categories" type='checkbox' checked={filter.categories.includes(category.id)} onChange={handleFilterCategory} /> {category.name}
          </label>
        )}
      </div>

      <div className={style.filtersTitleCont}>Sort By</div>
      <label htmlFor="sortBy">Price:</label>
      <select name="sortBy" value={filter.sortBy} onChange={handleSortChange}>
        <option value="">No sorting</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>

      <div className={style.filtersTitleCont}>Filter By</div>
      <label htmlFor="priceRange">Price Range</label>
      <input type="range" id="priceRange" name="priceRange" min="0" max="100" step="1" value={filter.maxPrice} onChange={handlePriceRangeChange} />


    </div>
  )
}
