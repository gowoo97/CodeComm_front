import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '../slices/signupSlice'
import signinReducer from '../slices/signinSlice';

export const store = configureStore({
    reducer:{
        signup: signupReducer,
        signin: signinReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch