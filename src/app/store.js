import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/apiSlice/apiSlice'
import productReducer from '../features/productSlice/productSlice'
import { imgbbApi } from '../features/imgbbSlice/imgbbAPI'
import AccountReducer from '../features/accountSlice/accountSlice'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [imgbbApi.reducerPath]: imgbbApi.reducer,
        product: productReducer,
        account: AccountReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware, imgbbApi.middleware),
    devTools: import.meta.env !== 'production'
})