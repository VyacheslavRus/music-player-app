import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        SHOW_SIDEBAR(state) {
            return !state
        },
    },
})

export const { SHOW_SIDEBAR } = sidebarSlice.actions
export default sidebarSlice.reducer