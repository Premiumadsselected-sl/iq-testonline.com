import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    progressTimerPage: 0,
    totalQuestions: 0
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        progressTest: (state, action) => {
            const { currentProgress, totalQuestions } = action.payload;
            state.progressTimerPage = (currentProgress * 100) / totalQuestions;
            state.totalQuestions = totalQuestions;
        },
    }
})

export const { progressTest } = timerSlice.actions
export default timerSlice.reducer