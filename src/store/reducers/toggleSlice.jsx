import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name : "menu",
    initialState : {
        toggleMenu : false
    },
    reducers : {
        toggleClick : (state) =>{
            state.toggleMenu = !state.toggleMenu
        }
    }
});

export const {toggleClick} = toggleSlice.actions;
export default toggleSlice.reducer;