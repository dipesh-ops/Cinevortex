import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        info : null
    },
    reducers : {
        loadMovie : (state, action) =>{
            state.info = action.payload
        },

        removeMovie : (state) =>{
            return state.info = null
        }
    }
});


export const {loadMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;