import { apiSlice } from "../apiSlice/apiSlice";
import { login, updateUserData } from "./accountSlice";

export const accountApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: () => `/users`,
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login/',
                method: "POST",
                body: data,
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/users/registration/',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const signupData = await queryFulfilled
                    dispatch(login({ ...signupData?.data, password: arg.password }))
                } catch {
                    //
                }
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/users/logout/',
                method: "POST",
            }),

        }),
        forgetPassword: builder.mutation({
            query: (data) => ({
                url: '/users/forget-email-input/',
                method: "POST",
                body: data
            })
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: '/users/change-password/',
                method: "POST",
                body: data
            })
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/users/update-profile/',
                method: "PATCH",
                body: data
            })
        }),
        requestEmailVerification: builder.mutation({
            query: () => ({
                url: '/users/request-email-verification/',
                method: "POST"
            })
        }),
        
    })
})

export const { useLoginMutation, useGetUserQuery, useLogoutMutation, useSignupMutation, useForgetPasswordMutation, useChangePasswordMutation,useUpdateProfileMutation, useRequestEmailVerificationMutation } = accountApi