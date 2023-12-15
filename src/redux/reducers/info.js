import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarState: false
};

const info = createSlice({
    name: "info",
    initialState,
    reducers: {
        toggleSidebar: (state, { payload }) =>
        {
            state.sidebarState = payload.event;
        },
    },
});

export const {
    toggleSidebar
} = info.actions;

export default info.reducer;