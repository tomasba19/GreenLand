import style from "./Products.module.css";
import loader from "../../assets/loaderGif.gif"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllCategories, applyFilters } from "../../redux/action";
import { Product } from "../Product/Product";
import { Pagination } from "../Paginate/Paginate";
import { SearchBar } from "../SearchBar/SearchBar";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Modal } from "../Modal/Modal";
import { SlArrowDown, SlArrowUp } from "react-icons/Sl"

export const Products = () => {
  const dispatch              = useDispatch();
  const [loading, setLoading] = useState(true);
  const numPageState          = useSelector((state) => state.numPageState);
  const filterProducts        = useSelector((state) => state.filterProducts);


  const [categoryMenuOpen, setCategoryMenuOpen] = useState(true); 

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  const cantProdcutsForPage = 6;
  let start                 = (numPageState - 1) * cantProdcutsForPage;
  let end                   = numPageState * cantProdcutsForPage;
  let cantPages             = Math.ceil((filterProducts.filteredProducts ? filterProducts.filteredProducts.length : filterProducts.length) / cantProdcutsForPage);
  const dataSlice           = filterProducts.filteredProducts ? filterProducts.filteredProducts.slice(start, end) : filterProducts.slice(start, end);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  
    const searchParams     = new URLSearchParams(window.location.search);
    const collectionStatus = searchParams.get('collection_status');
  
    collectionStatus === 'approved' && localStorage.clear();
  
    Promise.all([dispatch(getAllProducts()), dispatch(getAllCategories())])
    .then(() => {
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error loading data:", error);
      setLoading(false);
    });
  }, [dispatch]);


  const allCategories = useSelector((state) => state.allCategories);
  const filteredProducts = useSelector((state) => state.filterProducts);

  const [range, setRange] = useState([20, 80]);
  const [modalMessage, setModalMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 100,
    sortBy: "",
    bestSeller: false,
    name: "",
  });

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    setFilters({ ...filter, maxPrice: newRange[1], minPrice: newRange[0] });
    dispatch(
      applyFilters({ ...filter, maxPrice: newRange[1], minPrice: newRange[0] })
    );
  };

  const handleFilterCategory = (event) => {
    const { value, name, checked } = event.target;
    let updatedCategories = [...filter.categories];
    if (checked) {
      updatedCategories.push(Number(value));
    } else {
      updatedCategories = updatedCategories.filter(
        (category) => category !== Number(value)
      );
    }
    setFilters({ ...filter, [name]: updatedCategories });
    dispatch(applyFilters({ ...filter, [name]: updatedCategories }));
  };

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filter, [name]: value });
    dispatch(applyFilters({ ...filter, [name]: value }));
  };

  const handleBestSellersChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filter, [name]: checked });
    dispatch(applyFilters({ ...filter, [name]: checked }));
  };

  const handleSearch = (searchTerm) => {
    setModalMessage("");
    setFilters({ ...filter, name: searchTerm });
    if (filteredProducts.length == 0 && searchTerm) {
      setModalMessage("No products found.");
    }
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  const closeModal = () => {
    setModalMessage("");
    clearSearchTerm();
    handleSearch("");
  };

  useEffect(() => {
    //console.log("Filters changed:", filter);
    dispatch(applyFilters(filter));
  }, [dispatch, filter]);
  
  return (
    <>
      {
        loading === true 
        ?
        <div className={style.prodsContLoader}>
          <img src={loader} alt="Loader"></img>
        </div>
        :
        <>
          <main className={style.prodsParent}>
            <div className={style.div1}>
              <div className={style.contenedorFilt}>
                <h2 className={style.filtersTitleCont}>Search Product</h2>
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
                      imageUrl="../../../public/Oooooops.png"
                    />
                  )}
              </div>

              <div className={style.contenedorFilt}>
                
                <h2 className={style.filtersTitleCont}>Best Sellers</h2>
                <div className={style.filtersBestSeller}>
                  <label>
                    <input
                      type="checkbox"
                      name="bestSeller"
                      checked={filter.bestSeller}
                      onChange={handleBestSellersChange}
                    />
                    Best Sellers
                  </label>
                </div>
              </div>
              
              <div className={style.contenedorFilt}>
                <h2 className={style.filtersTitleCont}>Sort By</h2>
                <select name="sortBy" value={filter.sortBy} onChange={handleSortChange}>
                  <option value="">No sorting</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <aside className={style.div2}>
              <div className={style.asideContents}>
              <h2 className={style.filtersTitleCont}>Filter By</h2>
                <label htmlFor="priceRange">Price Range</label>

                <div className={style.rangeSlider}>
                  <Slider
                    range
                    min={0}
                    max={200}
                    value={range}
                    onChange={handleRangeChange}
                  />
                  <div>
                    Min Price: {range[0]}, Max Price: {range[1]}
                  </div>
                </div>
              </div>


              <div className={style.asideContents}>
              <div className={style.collapsiveList}>
                <h2 className={style.filtersTitleCont}>Category</h2>
                {categoryMenuOpen ? <SlArrowUp onClick={toggleCategoryMenu} /> : <SlArrowDown onClick={toggleCategoryMenu} />}
              </div>
              <div className={` ${categoryMenuOpen ? `${style.filtersCategOpt}` : `${style.filtersCategOptClose}`}`}>
                {allCategories.map((category) => (
                  <label key={category.id}>
                    <input
                      value={category.id}
                      name="categories"
                      type="checkbox"
                      checked={filter.categories.includes(category.id)}
                      onChange={handleFilterCategory}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
                </div>      
              

              
            </aside>

            <section className={`${style.div3} ${style.prodsGrid}`}>
              {dataSlice.map((product) => product.active === true && (
                    <Product
                      key         = {product.id}
                      id          = {product.id}
                      name        = {product.name}
                      rating      = {product.rating}
                      description = {product.description}
                      price       = {product.price}
                      image       = {product.image}
                      active      = {product.active}
                    />
                  )
              )}
            </section>
          </main>

          <div className={style.paginate}>
            <Pagination numPage={numPageState} cantPage={cantPages} />
          </div>
        </>
      }
    </>
  );
};
