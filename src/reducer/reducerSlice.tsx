
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    add:'',
    deletes:''
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
        }
    }
})


export const { add, deletes } = reducerSlice.actions

export default reducerSlice.reducer