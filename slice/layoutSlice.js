import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSection: null,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setSectionInViewport: (state, action) => {
            state.currentSection = action.payload
        },
    },
})

export const { setSectionInViewport } = layoutSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: useSelector((state: RootState) => state.counter.value)
export const selectCurrentSection = (state) => state.layout.currentSection

export default layoutSlice.reducer