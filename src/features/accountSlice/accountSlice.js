import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    recentlyRegister: false,
}

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {
        updateUserData:(state,action)=>{
            state.user = action.payload
        },
        login: (state, action) => {
            state.user = action.payload

        },
        logout: (state) => {
            state.user = {}
            localStorage.removeItem('noipunAuth')
        },
        register: (state,action)=>{
            state.recentlyRegister = action.payload
        }
    }
})

export const { login, logout,register,updateUserData } = accountSlice.actions
export default accountSlice.reducer