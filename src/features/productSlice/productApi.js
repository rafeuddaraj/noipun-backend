import {apiSlice} from '../apiSlice/apiSlice'

export const productApi = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getProducts: builder.query({
            query:(pageNo)=>'/product/product'
        }),
        getProduct: builder.query({
            query:(id)=>`/product/product/${id}`
        }),

    })
})

export const {useGetProductsQuery,useGetProductQuery} = productApi