import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const imgbbApi = createApi({
    reducerPath:'imgbbAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.imgbb.com/1'
    }),
    endpoints:builder=>({
        avatarUpload: builder.mutation({
            query:(data)=>({
                url:'/upload',
                method:"POST",
                body:data,
                params: {
                    key: import.meta.env.VITE_IMGBB_API_KEY
                }
            })
        })
    })
})

export const {useAvatarUploadMutation} = imgbbApi