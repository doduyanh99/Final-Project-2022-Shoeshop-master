import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "./reducers/productReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";
import {cartReducer} from "./reducers/cartReducer";
import {addItemsToCart} from "./actions/cartAction";

const reducer = combineReducers({ 
    products: productsReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    cart: cartReducer,
});
      
let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;