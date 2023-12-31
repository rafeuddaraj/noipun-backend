import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    productId:'',
    images:[]
}

const productSlice = createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        addProductId: (state,action)=>{
            state.productId = action.payload
        },
        addImage: (state,action)=>{
            state.images.push(action.payload)
        },
        clearImages:(state)=>{
            state.images = []
        }
    }
})

export default productSlice.reducer

export const {addProductId,addImage,clearImages} = productSlice.actions