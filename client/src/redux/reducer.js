import { PREV, NEXT, GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, APPLY_FILTERS, GET_ID_DETAIL, } from "./actionType";

const initialState = {
    numPageState: 1,
    allProducts: [],
    allCategories: [],
    filterProducts: [],
    productDetail: []
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case PREV:
            return {
                ...state,
                numPageState: state.numPageState - 1
            }

        case NEXT:
            return {
                ...state,
                numPageState: state.numPageState + 1
            }

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: payload,
                filterProducts: payload
            }

        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }
            
            case APPLY_FILTERS:
                return {
                    ...state,
                    filterProducts: [{
                    "id": 1,
                    "name": "EL EJEMPLO",
                    "description": "Cafetera de acero inoxidable para preparar café de manera sostenible",
                    "price": 19.99,
                    "stock": 50,
                    "image": "https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_640.png",
                    "active": true,
                    "category": {
                        "id": 1,
                        "name": "appliances",
                        "description": "Electrodomésticos"
                    }
                }]
            }
            case GET_ID_DETAIL:
                return {
                    ...state,
                    productDetail: payload,
                }
            default: return { ...state };
        }
    }
