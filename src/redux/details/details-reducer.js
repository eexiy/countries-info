import { CLEAR_DETAILS, SET_BORDERS, SET_COUNTRY, SET_ERROR, SET_LOADING } from "./details-actions";

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    borders: []
}

export const detailsCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: action.payload,
            }
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload,
            }
        case CLEAR_DETAILS:
            return initialState
        case SET_BORDERS:
            return {
                ...state,
                borders: action.payload
            }

        default:
            return state;
    }
}