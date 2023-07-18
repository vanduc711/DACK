import {createSlice} from '@reduxjs/toolkit';

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        allCartsHold: {
            isFetching : false,
            allCarts: [],
            error: false
        },
    },
    reducers:{
        addCartsStart:(state) => {
            state.allCartsHold.isFetching = true;
            state.allCartsHold.error = false;
        },
        addCartsSucces: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = false;
        },
        addCartsFailed: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = true;
        },

        getCartsStart: (state) => {
            state.allCartsHold.isFetching = true;
            state.allCartsHold.error = false;
        },
        getCartsSucces: (state,action) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.allCarts = action.payload;
            state.allCartsHold.error = false;
        },
        getCartsFailed: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = true;
        },

        updateQualityStart: (state) => {
            state.allCartsHold.isFetching = true;
            state.allCartsHold.error = false;
        },
        updateQualitySucces: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = false;
        },
        updateQualityFailed: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = true;
        },

        deleteCartStart: (state) => {
            state.allCartsHold.isFetching = true;
            state.allCartsHold.error = false;
        },
        deleteCartSucces: (state) => {
            state.allCartsHold.isFetching = false;
            state.allCartsHold.error = false;
        },
        deleteCartFailed: (state) => {
            state.allCartsHold.error = true;
            state.allCartsHold.isFetching = false;
        }
    }
})

export const {
    addCartsStart,
    addCartsSucces,
    addCartsFailed,
    getCartsStart,
    getCartsSucces,
    getCartsFailed,
    updateQualityStart,
    updateQualitySucces,
    updateQualityFailed,
    deleteCartStart,
    deleteCartSucces,
    deleteCartFailed

} = cartsSlice.actions;

export default cartsSlice.reducer;