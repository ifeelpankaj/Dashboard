import { configureStore } from "@reduxjs/toolkit";
import { authReducer, profileReducer } from "./Reducers/UserReducer";
import {
  addItemReducer,

  itemDetailReducer,

  itemReducer,
  updateItemReducer,

} from "./Reducers/ItemReducer";
import { addVideoReducer, videoReducer } from "./Reducers/FeaturedVideoReducer";
import { cartItemReducer, cartReducer } from "./Reducers/CartReducer";
import { myOrderReducer, newOrderReducer, orderDetailReducer } from "./Reducers/OrderReducer";

const store = configureStore({
  reducer: {
    //Authentication
    auth: authReducer,
    profile:profileReducer,

    //Admin
    addItem: addItemReducer,
    addVideo: addVideoReducer,

    //Video/Poster
    allVideo: videoReducer,

    //Items
    items: itemReducer,
    details:itemDetailReducer,
    modify:updateItemReducer,
    

    //Cart
    addToCart: cartReducer,
    getFromCart: cartItemReducer,

    //Order
    Order: newOrderReducer,
    myOrder:myOrderReducer,
    orderDetail:orderDetailReducer,
  },
});

export default store;

export const serverUrl = "https://m-attar-plazaa.onrender.com/attar/v1";
