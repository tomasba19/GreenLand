import { PREV, NEXT, GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, APPLY_FILTERS, GET_ID_DETAIL, NUM_PAGE, GET_ALL_REVIEWS } from "./actionType";

const initialState = {
    numPageState   : 1,
    allProducts    : [],
    allCategories  : [],
    allReviews     : [],
    filterProducts : [],
    productDetail  : []
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
            return {
                ...state,
                filterProducts: payload,
                numPageState: 1
            }

        case GET_ID_DETAIL:
            return {
                ...state,
                productDetail: payload,
            }

        default: 
            return { ...state };
    }
}
