import{createSlice}  from '@reduxjs/toolkit'

export const userSLice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        getUser: (state, action) => {
            state.user =action.payload
        }
    }
})
export const {getUser} = userSLice.actions