import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    userInfo:[],
}

export const EshopSlice = createSlice({
    name: "Eshop",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const data = state.products.find((data)=>data.id === action.payload.id)
            if(data){
                data.quantity += action.payload.quantity;
            }else(
                state.products.push(action.payload)
            )
           
        },
        incrementQuantity:(state,action)=>{
            const item = state.products.find((data)=>data.id === action.payload)
            item.quantity++
        },

        decrementQuantity:(state,action)=>{
            const item = state.products.find((data)=>data.id === action.payload)
            if(item.quantity ===1){
                item.quantity =1
            }else{
                item.quantity--
            }
        },

        deleteItem:(state, action)=>{
            state.products = state.products.filter((data)=>data.id!== action.payload)
        },
        resetCart:(state)=>{
            state.products=[]
        }
    }
})

export const{addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity} = EshopSlice.actions
export default EshopSlice.reducer;