import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token:"2"
}
const authSlice = createSlice({
    name : 'authSlice',
    initialState,
    reducers:{
        login:(state,actions)=>{
            state.token=actions.payload
        },
        logout:(state)=>{
            state.token=null
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer