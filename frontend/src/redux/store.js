import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productsReducer from './productsSlice';
import cartsReducer from './CartsSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        carts: cartsReducer,
    },

});