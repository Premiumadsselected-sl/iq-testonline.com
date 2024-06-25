import { configureStore } from "@reduxjs/toolkit"
import serviceReducer from "./serviceSlice"
import timerReducer from "./timerSlice"

export default configureStore({
    reducer: {
        service: serviceReducer,
        timerStore: timerReducer
    }
})