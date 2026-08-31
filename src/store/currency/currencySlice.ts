import { getCountries } from "@/lib/utils";
import type { CountryCurrency, ToBeChangedCurrency } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


type CurrencyState = {
    allCountryCurrencies: CountryCurrency[],
    sendSearchValue: string,
    sendSelectedCurrency: CountryCurrency,
    recieveSearchValue: string,
    recieveSelectedCurrency: CountryCurrency
}

const currencies = getCountries();


const initialState: CurrencyState = {
    allCountryCurrencies: currencies,
    sendSearchValue: "",
    sendSelectedCurrency: currencies.find((currency) => currency.code === "AED")!,
    recieveSearchValue: "",
    recieveSelectedCurrency: currencies.find((currency) => currency.code === "AR")!
}

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {

        setSearchValue: (state, action: PayloadAction<ToBeChangedCurrency>) => {
            if (action.payload.direction === "send") {
                state.sendSearchValue = action.payload.value
                return;
            } else {
                state.recieveSearchValue = action.payload.value
                return;
            }
        },



        changeCurrency: (state, action: PayloadAction<ToBeChangedCurrency>) => {
            const code = action.payload.value
            const currency = state.allCountryCurrencies.find((currency) => currency.code === code);
            if (action.payload.direction === "send") {
                if (currency) {
                    state.sendSelectedCurrency = currency
                    return;
                }
            } else {
                if (currency) {
                    state.recieveSelectedCurrency = currency
                    return;
                }
            }
        },
    }
})

// exports the functions that mutate the state
export const { changeCurrency, setSearchValue } = currencySlice.actions

export default currencySlice.reducer
