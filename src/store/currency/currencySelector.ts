import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const sendSelectedQueriedCurrencies = createSelector([
    (state: RootState) => state.currency.allCountryCurrencies,
    (state: RootState) => state.currency.sendSearchValue,
], (currencies, sendSearchValue) => {
    const value = sendSearchValue.trim().toLowerCase();
    if (!value) return currencies;

    return currencies.filter((currency) =>
        currency.currencyName?.toLowerCase().includes(value) ||
        currency.name?.toLowerCase().includes(value) ||
        currency.code?.toLowerCase().includes(value))
})

export const recieveSelectedQueriedCurrencies = createSelector([
    (state: RootState) => state.currency.allCountryCurrencies,
    (state: RootState) => state.currency.recieveSearchValue,
], (currencies, recieveSearchValue) => {
    const value = recieveSearchValue.trim().toLowerCase();
    if (!value) return currencies;

    return currencies.filter((currency) =>
        currency.currencyName?.toLowerCase().includes(value) ||
        currency.name?.toLowerCase().includes(value) ||
        currency.code?.toLowerCase().includes(value))
})


export const fetchLiveRating = createAsyncThunk("currency/fetchLiveRating", async () => {
    const response = await fetch(`${import.meta.env.VITE_API}rates?base=USD`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch live ratings")
    }
    return data;
})