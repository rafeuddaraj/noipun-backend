import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../accountSlice/accountSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: async (headers, { getState }) => {
        const token = getState().account?.user?.accessToken
        if (token) {
            headers.set('Authorization', `Token ${token}`)
        }
    }
})


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions)
        if (result?.error?.status === 401) {
            api.dispatch(logout())
        }
        return result
    },
    endpoints: builder => ({})
})

export const { } = apiSlice