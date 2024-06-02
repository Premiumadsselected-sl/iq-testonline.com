import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    progressTestPage: 0,
    totalAnswerTest: 0
}

export const iqTestSlice = createSlice({
    name: 'iqTest',
    initialState,
    reducers: {
        progressTest: (state, action) => {
            state.progressTestPage = (action.payload * 100)/20
        },
    }
})

export const { progressTest } = iqTestSlice.actions
export default iqTestSlice.reducer