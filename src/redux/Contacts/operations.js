import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
async(_, thunkAPI)=>{
        try {
            const res = await axios.get("/contacts");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addContact = createAsyncThunk("contacts/addContacts",
    async(contact, thunkAPI) =>{
        try {
            const res = await axios.post("/contacts", contact);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async(id, thunkAPI)=>{
        try {
            const res = await axios.delete(`/contacts/${id}`)
            console.log(res)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const updateContact = createAsyncThunk("contacts/updateContact",
    async(id, thunkAPI) =>{
        try {
            const res = await axios.patch(`/contacts/${id}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)