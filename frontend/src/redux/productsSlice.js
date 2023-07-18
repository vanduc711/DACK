import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsHold: {
            allProducts: [],
            isFetching: false,
            error: false,
            isProductsSucces : false
        },
        productsPagination: {
            EnterSearch: '',
            itemPerPage : 12,
            currentPage : 1,
        },
        productsItem : null
    },
    reducers:{
        // get all
        productsStart: (state) => {
            state.productsHold.isFetching = true;
            state.productsHold.error = false;
        },
        productsSucces: (state,action) => {
            state.productsHold.isFetching = false;
            state.productsHold.allProducts = action.payload;
            state.productsHold.error = false;
        },
        productsFailed: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.error = true;
        },

        // panigation
        update: (state, action) => {
            state.productsPagination.currentPage = action.payload
        },
        prevBtn: (state) => {
            state.productsPagination.currentPage = state.productsPagination.currentPage - 1
        },
        nextBtn: (state) => {
            state.productsPagination.currentPage = state.productsPagination.currentPage + 1
        },
        search: (state, action) => {
            state.productsPagination.EnterSearch = action.payload
        },

        // get products Item
        productsItemStart: (state) => {
            state.productsHold.isFetching = true;
            state.productsHold.error = false;
        },
        productsItemSucces: (state, action) => {
            state.productsHold.isFetching = false;
            state.productsItem = action.payload;
            state.productsHold.error = false;
        },
        productsItemFailed: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.error = true;
        },

        // add products Item

        addProductsItemStart: (state) => {
            state.productsHold.isFetching = true;
            state.productsHold.error = false;
        },
        addProductsItemSucces: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = true;
            state.productsHold.error = false;
        },
        addProductsItemFailed: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = false;
            state.productsHold.error = true;
        },

        // delete products Item

        deleteProductsItemStart: (state) => {
            state.productsHold.isFetching = true;
            state.productsHold.error = false;
        },
        deleteProductsItemSucces: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = true;
            state.productsHold.error = false;
        },
        deleteProductsItemFailed: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = false;
            state.productsHold.error = true;
        },

        // update products Item

        updateProductsItemStart: (state) => {
            state.productsHold.isFetching = true;
            state.productsHold.error = false;
        },
        updateProductsItemSucces: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = true;
            state.productsHold.error = false;
        },
        updateProductsItemFailed: (state) => {
            state.productsHold.isFetching = false;
            state.productsHold.isProductsSucces = false;
            state.productsHold.error = true;
        }
    }
})

export const {
    productsFailed,
    productsStart,
    productsSucces,
    update, prevBtn, nextBtn, search,
    productsItemStart,
    productsItemSucces,
    productsItemFailed,
    addProductsItemStart,
    addProductsItemSucces,
    addProductsItemFailed,
    deleteProductsItemStart,
    deleteProductsItemSucces,
    deleteProductsItemFailed,
    updateProductsItemStart,
    updateProductsItemSucces,
    updateProductsItemFailed
} = productsSlice.actions;

export default productsSlice.reducer;