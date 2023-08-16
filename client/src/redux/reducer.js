import {
    PREV,
    NEXT,
} from "./actionType";

const initialState = {
    numPageState: 1,
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

        default: return { ...state };
    }
}
