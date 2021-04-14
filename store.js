import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from 'slice/layoutSlice'

export const store = configureStore({
    reducer: {
        layout: layoutReducer
    }
})
