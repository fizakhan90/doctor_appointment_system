import{createSlice}  from '@reduxjs/toolkit'

export const userSLice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        setUser: (state, action) => {
            state.user =action.payload
        }
    }
})
export const {setUser} = userSLice.actions