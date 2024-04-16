import { configureStore } from "@reduxjs/toolkit";
import authSliceReduser from "./Slices/AuthSlice";
import CartSliceReduser from "./Slices/CartSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReduser,
        cart:CartSliceReduser


    }
})

export default store