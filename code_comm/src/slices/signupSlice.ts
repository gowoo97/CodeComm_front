import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface signupState {
    email:string,
    code:string,
    password:string,
    passwordConfirm:string,
    nickname:string
}

const initialState: signupState = {
    email:'',
    code:'',
    password:'',
    passwordConfirm:'',
    nickname:''
}

export const signupSlice = createSlice({
    name:'signup',
    initialState,
    reducers: {
        setEmail: (state, action:PayloadAction<string>) => {
            state.email = action.payload;
        },
        setCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>)=>{
            state.password = action.payload;
        },
        setPasswordConfirm:(state, action:PayloadAction<string>) => {
            state.passwordConfirm = action.payload;
        },
        setNickname: (state, action: PayloadAction<string>)=> {
            state.nickname = action.payload;
        }
    }
})


export const { setEmail, setCode, setPassword, setPasswordConfirm, setNickname} = signupSlice.actions 

export default signupSlice.reducer;