import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from "./features/alertSlice";
import { userSLice } from "./features/userSlice";

export default configureStore({
    reducer:{
        alerts : alertSlice.reducer,
        user: userSLice.reducer,
    }
})