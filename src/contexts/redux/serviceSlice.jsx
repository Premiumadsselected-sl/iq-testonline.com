import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: 'iq-testonline',
    email: 'support@service.com',
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { username, email } = action.payload
            state.username = username
            state.email = email
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const { addUser, changeEmail } = serviceSlice.actions
export default serviceSlice.reducer