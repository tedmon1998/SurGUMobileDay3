import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slice/colorSlice";

export default configureStore({
    reducer: {
        rgb: colorSlice
    }
})