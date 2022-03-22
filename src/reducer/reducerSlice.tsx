
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    add:'',
    deletes:'',
    edit:''
}

export const reducerSlice = createSlice({
    name: 'rohan',
    initialState,
    reducers: {
        add: (state,action) => {
            state.add = action.payload
        },

        deletes: (state,action) => {
            state.deletes = action.payload
        },

        edit: (state,action) =>{
            state.edit = action.payload
        }
        
    }
})


export const { add, deletes, edit } = reducerSlice.actions

export default reducerSlice.reducer