import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface signinState{
    email:string,
    password:string
}

const initialState: signinState ={
    email:'',
    password:''
}


export const signinSlice = createSlice({
    name:'signin',
    initialState,
    reducers:{
        setEmail:(state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state,action:PayloadAction<string>)=>{
            state.password = action.payload;
        }
    }
})

export const { setEmail , setPassword} = signinSlice.actions;

export default signinSlice.reducer;