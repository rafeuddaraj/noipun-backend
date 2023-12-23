import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: async (headers,{getState})=>{
            const token = getState().account?.user?.accessToken
            // console.log(token);
            if(token){
                headers.set('Authorization',`Token ${token}`)
            }
        }
    }),
    endpoints: builder => ({})
})

export const { } = apiSlice