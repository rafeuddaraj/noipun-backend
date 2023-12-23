import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload

        },
        logout: (state) => {
            state.user = {}
            localStorage.removeItem('noipunAuth')
        }
    }
})

export const { login, logout } = accountSlice.actions
export default accountSlice.reducer