import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./operations"

const handlePending = (state) =>{
    state.isLoading = true
}

const handleError = (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const contactsInitialState = {
    items:[],
    isLoading: false,
    error: null,
};
const contacstSlice = createSlice({
    name:"contacts",
    initialState: contactsInitialState,
    extraReducers:{
        [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleError,
    [addContact.pending]: handlePending,
    [addContact.error]: handleError,
    [deleteContact.pending]: handlePending,
    [deleteContact.error]: handleError,

    [fetchContacts.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        state.items =action.payload;
    },
    [addContact.fulfilled](state, action){
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload)
    },
    [deleteContact.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
            contact => contact.id ===action.payload.id
        )
        state.items.splice(index,1)
    },
    }
})
// const contacstSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     extraReducers:(builder)=>{
//         builder.addCase(fetchContacts.pending, handlePending)
//         builder.addCase(fetchContacts.error, handleEror)
//         builder.addCase(addContact.pending, handlePending)
//         builder.addCase(addContact.error, handleEror)
//         builder.addCase(deleteContact.pending, handlePending)
//         builder.addCase(deleteContact.error, handleEror)
//         builder.addCase(fetchContacts.fulfilled, (state, action)=>{
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload
//         })
//         builder.addCase(addContact.fulfilled, (state, action)=>{
//             state.isLoading = false;
//             state.error = null;
//             state.items.push(action.payload)
//         })
//         builder.addCase(deleteContact.fulfilled, (state, action)=>{
//             state.isLoading = false;
//             state.error = null;
//             const index = state.items.findIndex(
//                 contact => contact.id === action.payload.id
//             )
//             state.items.splice(index, 1)
//         })
//     }
    
// })
export const contactsReducer = contacstSlice.reducer;