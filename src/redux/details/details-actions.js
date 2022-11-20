export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS'
export const SET_BORDERS = '@@details/SET_BORDERS'

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

const setLoading = () => ({
    type: SET_LOADING
})

const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

const setBorders = (countries) => ({
    type: SET_BORDERS,
    payload: countries
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
    dispatch(setLoading())

    client.get(api.searchByCountry(name))
        .then(({ data }) => dispatch(setCountry(data[0])))
        .catch(error => dispatch(setError(error.message)))
}

export const loadCountriesByBorder = (borders) => (dispatch, _, { client, api }) => {
    client.get(api.filterByCode(borders))
        .then(({ data }) => dispatch(setBorders(data.map(country => country.name))))
        .catch(console.error)
}