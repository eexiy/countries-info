export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.listCountries.length
})

export const selectAllCountries = (state) => state.countries.listCountries
export const selectVisibleCountries = (state, { search = '', region = '' }) => {
    return state.countries.listCountries.filter(country => (
        country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
    ))
}