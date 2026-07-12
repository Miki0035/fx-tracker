import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currencyReducer";


export const store = configureStore({
    reducer: {
        currency: currencyReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store