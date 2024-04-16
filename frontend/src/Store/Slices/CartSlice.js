import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartList: []
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        removeItems: (state, action) => {
            state.cartList = state.cartList.filter((e) => {
                if (e.id === action.payload) {
                    if (e.quantity > 1) {
                        e.quantity = e.quantity - 1
                        return e
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            })
        },
        addItems:(state,action)=>{
            let addItems=false
            if(state.cartList.length===0){
                let pr = action.payload
                pr.quantity = 1
                state.cartList.push(pr)
                addItems=true
            
            }else{
                state.cartList=state.cartList.map((e)=>{
                    if(e.id===action.payload.id){
                        e.quantity=e.quantity+1
                        addItems=true
                        return e
                    }
                    return e
                })
            }
            if(!addItems){
                let pr = action.payload
                pr.quantity = 1
                state.cartList.push(pr)
                addItems=true
            }
        }
    }

})

export const {addItems,removeItems}=cartSlice.actions
export default cartSlice.reducer