import { configureStore } from "@reduxjs/toolkit";
import restaurantslice from "./restaurantslice";


const store=configureStore({
    reducer:{
        restaurantslice

        

    }
})
export default store