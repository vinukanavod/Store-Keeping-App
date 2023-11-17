import { configureStore} from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";

const store = configureStore({
    reducer:{
        loggin:LoginSlice.reducer,
    }
});

export default store;