import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/AuthReducer";
import { addItemReducer, itemDetailReducer, itemReducer, updateItemReducer } from "./Product/ProductReducer.js";



const store = configureStore({
  reducer: {
    //Authentication
    auth: authReducer,

    //Admin
    addItem: addItemReducer,
   

    //Items
    items: itemReducer,
    details:itemDetailReducer,
    modify:updateItemReducer,
    
  },
});

export default store;

export const serverUrl = "https://m-attar-plazaa.onrender.com/attar/v1";
