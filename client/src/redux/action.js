import {
    PREV,
    NEXT,
} from "./actionType";
import axios from "axios";

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