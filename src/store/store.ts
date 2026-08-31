import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "@/store/currency/currencySlice";
import tabReducer from "@/store/tab/tabSlice";


export const store = configureStore({
    reducer: {
        currency: currencyReducer,
        tab: tabReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store