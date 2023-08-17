import axios from 'axios';
const apiUrl = 'http://localhost:3001';
import { PREV, NEXT, GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, APPLY_FILTERS } from "./actionType";

export const paginatePrev = () => {
    return {
        type: PREV
    }
}
export const paginateNext = () => {
    return {
        type: NEXT
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/products`);
            dispatch({type : GET_ALL_PRODUCTS, payload: data})
            
        } catch (error) {
            alert("error: " + error.response.data.error)
        }
    }
}

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/categories`);
            dispatch({type : GET_ALL_CATEGORIES, payload: data})
            
        } catch (error) {
            alert("error: " + error.response.data.error)
        }
    }
}

export const applyFilters = (filters) => {
    console.log(filters);
    return {type: APPLY_FILTERS, payload: filters}
    // return async (dispatch) => {
    //     try {
    //         const { data } = await axios.post(`${apiUrl}/filters`, filters);
    //         dispatch({type : APPLY_FILTERS, payload: data})
            
    //     } catch (error) {
    //         alert("error: " + error.response.data.error)
    //     }
    // }
}