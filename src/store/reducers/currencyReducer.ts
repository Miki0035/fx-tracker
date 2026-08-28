import { getCountries } from "@/lib/utils";
import type { CountryCurrency } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


type CurrencyState = {
    allCountryCurrencies: CountryCurrency[],
    selectedCurrency: CountryCurrency
}

const initialState: CurrencyState = {
    allCountryCurrencies: getCountries(),
    selectedCurrency: getCountries()[0]
}

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<number>) => {
            const value = action.payload
            state.selectedCurrency = getCountries()[value]
        },
        searchCurrency: (state, action: PayloadAction<string>) => {
            const value = action.payload
            const matchingCurrency = state.allCountryCurrencies.filter((currency) => (currency.currencyName === value || currency.name === value || currency.code === value));
            console.log('search state value', matchingCurrency)

            // state.selectedCurrency = matchingCurrency[0]
        }
    }
})

// exports the functions that mutate the state
export const { changeCurrency, searchCurrency } = currencySlice.actions

export default currencySlice.reducer