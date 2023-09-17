import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    filter: '',
}
      
const contactsSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers:{
        addContact:(state, action) =>{
            const checkName = state.contacts.find(({name}) => name.toLowerCase() === action.payload.name.toLowerCase())
                if(checkName){
                alert(`${action.payload.name} is already in contacts`)
             return
            }
            state.contacts.push(
                action.payload
            )
        },
        deleteContact:(state, action) =>{
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            )
        },
        filterContact:(state, action) =>{
            state.filter = action.payload;
        },
    }
})

export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact, filterContact} = contactsSlice.actions;