import type { TabType } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TabState = {
    tabs: TabType[];
    currentTab: TabType
}


const initialState: TabState = {
    tabs: [
        {
            label: "History",
            index: 0
        },

        {
            label: "Compare",
            index: 1
        },
        {
            label: "Favorite",
            index: 2
        },
        {
            label: "Log",
            index: 3
        },

    ],
    currentTab: { label: "History", index: 0 }
}

const tabSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<TabType>) => {
            state.currentTab = action.payload
        }
    }
})

export const { changeTab } = tabSlice.actions
export default tabSlice.reducer