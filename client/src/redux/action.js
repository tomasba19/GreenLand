import axios from 'axios';
const apiUrl = 'http://localhost:3001';
import { PREV, NEXT, GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, APPLY_FILTERS, GET_ID_DETAIL,NUM_PAGE, } from "./actionType";

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
export const paginateNumPage = (value) => {
    return {
        type: NUM_PAGE,
        payload: value
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/products`);
            dispatch({ type: GET_ALL_PRODUCTS, payload: data })

        } catch (error) {
            alert("error: " + error.response.data.error)
        }
    }
}

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/categories`);
            dispatch({ type: GET_ALL_CATEGORIES, payload: data })

        } catch (error) {
            alert("error: " + error.response.data.error)
        }
    }
}

export const applyFilters = (filters) => {
    console.log(filters);
    //return { type: APPLY_FILTERS, payload: filters }
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${apiUrl}/filters`, filters);
            dispatch({type : APPLY_FILTERS, payload: data})
        } catch (error) {
            alert("error: " + error)
        }
    }
}

export const getIdProduct = (id) => {
    return async function (dispatch) {
        try {
            const dataId = await axios.get(`${apiUrl}/products/${id}`);
            const pruductDetail = dataId.data;
            // console.log("esta es la data JSON=====>",pruductDetail);
            dispatch({
                type: GET_ID_DETAIL,
                payload: pruductDetail,
            });
        }
        catch (error) {
            alert("error: " + error.response.data.error)
        }
    };
}