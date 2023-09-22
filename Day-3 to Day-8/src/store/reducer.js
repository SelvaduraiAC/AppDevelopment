import { createSlice } from '@reduxjs/toolkit'

export const customSlice = createSlice({
    name: 'custSlice',
    initialState: {
        users: [],
        user: {
            username: null,
            email: null,
            password: null
        },
        isLogin: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },

        setUsers(state, action) {
            state.users = [...state.users, action.payload]
        },

        setIsLogin(state, action) {
            state.isLogin = action.payload
        }
    }
})

export const { setUser, setUsers, setIsLogin } = customSlice.actions
export default customSlice.reducer