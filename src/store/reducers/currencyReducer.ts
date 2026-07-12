import { getCountries } from "@/lib/utils";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Currency {
    flag: string;
    currencyName: string;
    code: string;
}

interface CurrencyState {
    selectedCurrency: Currency
}

const initialState: CurrencyState = {
    selectedCurrency: getCountries()[5]
}

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<number>) => {
            const value = action.payload
            state.selectedCurrency = getCountries()[value]
        }
    }
})

// exports the functions that mutate the state
export const { changeCurrency } = currencySlice.actions

export default currencySlice.reducer