import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personSlice";
import menuReduer from "./reducers/toggleSlice";

const store = configureStore({
    reducer :{
        movie : movieReducer,
        tv : tvReducer,
        person : personReducer,
        menu : menuReduer,
    }
});

export default store;