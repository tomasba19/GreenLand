import { PREV, NEXT, GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, APPLY_FILTERS, GET_ID_DETAIL, NUM_PAGE, GET_ALL_REVIEWS } from "./actionType";

const initialState = {
    numPageState   : 1,
    allProducts    : [],
    allCategories  : [],
    allReviews     : [],
    filterProducts : [],
    productDetail  : []
    // minPrice       : 0,
    // maxPrice       : 100,
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case PREV:
            return {
                ...state,
                numPageState : state.numPageState - 1
            }

        case NEXT:
            return {
                ...state,
                numPageState : state.numPageState + 1
            }
        case NUM_PAGE:
            return {
                ...state,
                numPageState : Number(payload)
            }

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts    : payload,
                filterProducts : payload
            }
        
        case GET_ALL_REVIEWS:
            return {
                ...state,
                allReviews : payload
            }

        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories : payload,
            }

        case APPLY_FILTERS:

            // const { categories, minPrice, maxPrice, sortBy, bestSellers , name } = payload;
            // let filteredProducts = state.allProducts;

            // if (categories.length > 0 ) {
            //     filteredProducts = filteredProducts.filter(product => categories.includes(product.category.id));
            // }
            // filteredProducts = filteredProducts.filter(
            //     product => product.price >= minPrice && product.price <= maxPrice
            // );

            // if (bestSellers) {
            //     filteredProducts = filteredProducts.filter(product => product.bestSeller);
            // }


            // if (sortBy === 'priceLowtoHigh') {
            //     filteredProducts.sort((a, b) => a.price - b.price)
            // } else if (sortBy === 'priceHighToLow') {
            //     filteredProducts.sort((a, b) => b.price - a.price);
            // }

           /// if (sortBy === 'priceLowtoHigh') {
//filteredProducts.sort((a, b) => a.price - b.price)
            //} else if (sortBy === 'priceHighToLow') {
            //    filteredProducts.sort((a, b) => b.price - a.price);
           // }

            // if (name) {
            //     // Filtramos por coincidencia de la primera letra del primer string.
            //     filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().startsWith(name.toLowerCase()));
            // }


        
            return {
                ...state,
                filterProducts: payload,
                // categories: categories,
                // minPrice: minPrice,
                // maxPrice: maxPrice,
                // bestSellers: bestSellers,
                numPageState: 1
            }

            case GET_ID_DETAIL:
                return {
                    ...state,
                    productDetail: payload,
                }

            default: return { ...state };
        }
    }
