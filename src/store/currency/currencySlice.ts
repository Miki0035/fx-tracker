import { getCountries } from "@/lib/utils";
import type { API, CountryCurrency, ToBeChangedCurrency } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { fetchLiveRating } from "./currencySelector";


type CurrencyState = {
    allCountryCurrencies: CountryCurrency[],
    sendSearchValue: string,
    sendSelectedCurrency: CountryCurrency,
    recieveSearchValue: string,
    recieveSelectedCurrency: CountryCurrency

    liveRates: API[],
    isLoading: boolean,
    error: string | null
}

const currencies = getCountries();


const initialState: CurrencyState = {
    allCountryCurrencies: currencies,
    sendSearchValue: "",
    sendSelectedCurrency: currencies.find((currency) => currency.code === "USD")!,
    recieveSearchValue: "",
    recieveSelectedCurrency: currencies.find((currency) => currency.code === "EUR")!,
    liveRates: [],
    isLoading: false,
    error: null
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLiveRating.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })

            .addCase(fetchLiveRating.fulfilled, (state, action) => {
                state.isLoading = false;
                state.liveRates = action.payload
            })

            .addCase(fetchLiveRating.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? "Something went wrong";
            })
    }
})

// exports the functions that mutate the state
export const { changeCurrency, setSearchValue } = currencySlice.actions

export default currencySlice.reducer
