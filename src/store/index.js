// import { combineReducers } from "redux";

// export default combineReducers({
    //     auth: authReducer,
    //     form: formReducer,    // key name ("form") is required
    //     streams: streamReducer
    // })
    
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import {reducer as formReducer} from 'redux-form';
import streamingSlice from "./streamingSlice";

const store = configureStore({
    reducer: {auth: authSlice.reducer, streams: streamingSlice.reducer, form: formReducer}
});

export default store;