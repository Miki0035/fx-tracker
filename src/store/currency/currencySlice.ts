import { getCountries } from "@/lib/utils";
import type { API, CountryCurrency, SearchCurrency, ToBeChangedCurrency } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { convertRate, fetchLiveRating } from "./currencySelector";


type CurrencyState = {
    allCountryCurrencies: CountryCurrency[],
    sendSearchValue: string,
    sendSelectedCurrency: CountryCurrency,
    recieveSearchValue: string,
    recieveSelectedCurrency: CountryCurrency

    liveRates: API[],
    isFetchingLiveRates: boolean,
    errorFetchingLiveRates: string | null

    isConvertingRates: boolean,
    errorConvertingRates: string | null;
    convertedRates: {
        liveRate: number;
        convertedValue: number;
    }
}

const currencies = getCountries();


const initialState: CurrencyState = {
    allCountryCurrencies: currencies,
    sendSearchValue: "",
    sendSelectedCurrency: currencies.find((currency) => currency.code === "USD")!,
    recieveSearchValue: "",
    recieveSelectedCurrency: currencies.find((currency) => currency.code === "EUR")!,
    // For fetching all live rates
    liveRates: [],
    isFetchingLiveRates: false,
    errorFetchingLiveRates: null,
    // For converting currencies
    convertedRates: { liveRate: 0, convertedValue: 0 },
    isConvertingRates: false,
    errorConvertingRates: null,

}



const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {

        setSearchValue: (state, action: PayloadAction<SearchCurrency>) => {
            if (action.payload.direction === "send") {
                state.sendSearchValue = action.payload.code
                return;
            } else {
                state.recieveSearchValue = action.payload.code
                return;
            }
        },



        changeCurrency: (state, action: PayloadAction<ToBeChangedCurrency>) => {
            const selectedCurrency = action.payload
            const currency = state.allCountryCurrencies.find((currency) => currency.code === selectedCurrency.code && currency.countryName === selectedCurrency.countryName);
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
        // fetch live rating thunk operation
        builder.addCase(fetchLiveRating.pending, (state) => {
            state.isFetchingLiveRates = true;
            state.errorFetchingLiveRates = null;
        })

            .addCase(fetchLiveRating.fulfilled, (state, action) => {
                state.isFetchingLiveRates = false;
                state.errorFetchingLiveRates = null;

                state.liveRates = action.payload
            })

            .addCase(fetchLiveRating.rejected, (state) => {
                state.isFetchingLiveRates = false;
                state.errorFetchingLiveRates = "Error fetching live rates from API";
            })
            // live conversion thunk operation
            .addCase(convertRate.pending, (state) => {
                state.isConvertingRates = true;
                state.errorConvertingRates = null
            })
            .addCase(convertRate.fulfilled, (state, action) => {
                state.isConvertingRates = false;
                state.errorConvertingRates = null;

                state.convertedRates = action.payload
            })
            .addCase(convertRate.rejected, (state) => {
                state.isConvertingRates = false;
                state.errorConvertingRates = "Error converting currencies"
            })
    }
})

// exports the functions that mutate the state
export const { changeCurrency, setSearchValue } = currencySlice.actions

export default currencySlice.reducer
