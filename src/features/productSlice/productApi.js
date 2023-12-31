import { data } from 'autoprefixer'
import { apiSlice } from '../apiSlice/apiSlice'

export const productApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: ({ pageNo, email }) => `/product/product/?email=${email}`
        }),
        getProduct: builder.query({
            query: (id) => `/product/product/${id}`
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/product/product/',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const product = await queryFulfilled
                    const pathResult = dispatch(productApi.util.updateQueryData('getProducts', { email: arg.email }, draft => {
                        draft['results'].push(product.data)
                    }))
                } catch {
                    //
                }
            }

        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `product/product/${id}/`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
                try {
                    const product = await queryFulfilled
                    const email = getState().account.user.email
                    dispatch(productApi.util.updateQueryData('getProducts', { email }, draft => {
                        const draftProductIndex = draft.results.findIndex(draftProduct => draftProduct.id == product.data.id)
                        draft['results'][draftProductIndex] = product.data
                    }));
                } catch {
                    // 
                }
            }
        }),
        productImageAdd: builder.mutation({
            query:(data)=>({
                url:'product/images/',
                method:"POST",
                body:data
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product/product/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
                const email = getState().account.user.email
                const pathResult = dispatch(productApi.util.updateQueryData('getProducts', { email }, draft => {
                    return draft.results.filter(product => product.id != arg)
                }))
                try {
                    await queryFulfilled
                }
                catch {
                    pathResult.undo()
                }
            }
        }),


    })
})

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation,useProductImageAddMutation } = productApi