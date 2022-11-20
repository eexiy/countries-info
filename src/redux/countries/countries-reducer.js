import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions"


const initialState = {
    status: 'idle', // loading | received | rejected
    error: null,
    listCountries: []
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COUNTRIES:
            return {
                ...state,
                status: 'received',
                listCountries: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }

        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload
            }
        default:
            return state
    }
}