import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infoValue: localStorage.getItem("toggleState") ? JSON.parse(localStorage.getItem("toggleState")) : false,
    sidebarState: false
};

const info = createSlice({
    name: "info",
    initialState,
    reducers: {
        toggleState: (state, { payload }) => {
            state.infoValue = payload.isChecked;
            localStorage.setItem("toggleState", JSON.stringify(state.infoValue))
        },
        toggleSidebar: (state, { payload }) => {
            state.sidebarState = payload.event;
        },
    },
});

export const {
    toggleState,
    toggleSidebar
} = info.actions;

export default info.reducer;