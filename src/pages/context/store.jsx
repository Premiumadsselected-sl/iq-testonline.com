import { configureStore } from "@reduxjs/toolkit"
import serviceReducer from "./serviceSlice"
import iqTestReducer from "./iqTestSlice"

export default configureStore({
    reducer: {
        service: serviceReducer,
        iqTestStore: iqTestReducer
    }
})