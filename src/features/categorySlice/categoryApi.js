import {apiSlice} from '../apiSlice/apiSlice'

export const categoryApi = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCategories: builder.query({
            query:()=>'/product/category'
        }),
        getCategory: builder.query({
            query:(id)=>`/product/category/${id}`
        }),
    })
})

export const {useGetCategoriesQuery,useGetCategoryQuery} = categoryApi