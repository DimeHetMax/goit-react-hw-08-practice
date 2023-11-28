import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact, updateContact} from "./operations"

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
    [addContact.rejected]: handleError,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleError,
    [updateContact.pending]: handlePending,
    [updateContact.rejected]: handleError,

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
    [updateContact.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        const contact = state.items.filter(
            contact => contact.id === action.payload.id
        )
        console.log("contact", contact)
        const newContact = {
            ...contact,
            name: "protoName",
            number: "protoPhone",
        }
        state.items.push(newContact)
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