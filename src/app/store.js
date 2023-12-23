import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/apiSlice/apiSlice'
import AccountReducer from '../features/accountSlice/accountSlice'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        account: AccountReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env !== 'production'
})