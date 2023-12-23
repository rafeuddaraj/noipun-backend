import { apiSlice } from "../apiSlice/apiSlice";
import { login } from "./accountSlice";

export const accountApi = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUser: builder.query({
            query:()=>`/users`,
        }),
        login: builder.mutation({
            query:(data)=>({
                url:'/users/login/',
                method:"POST",
                body:data,
            }),
        }),
        signup: builder.mutation({
            query:(data)=>({
                url:'/users/registration/',
                method:"POST",
                body:data,
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                try{
                    const signupData = await queryFulfilled
                    dispatch(login({...signupData?.data, password:arg.password}))
                }catch{
                    //
                }
            }
        }),
        logout: builder.mutation({
            query:()=>({
                url:'/users/logout/',
                method:"POST",
            }),

        }),
        forgetPassword: builder.mutation({
            query:(data)=>({
                url:'/users/forget-email-input/',
                method:"POST",
                body:data
            })
        })
    })
})

export const {useLoginMutation,useGetUserQuery,useLogoutMutation,useSignupMutation,useForgetPasswordMutation} = accountApi