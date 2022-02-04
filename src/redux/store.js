import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/sidebar/sidebarSlice"

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})

