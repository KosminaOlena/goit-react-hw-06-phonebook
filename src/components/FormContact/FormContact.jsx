import { useState } from 'react'
import { Form, Label, Input, Button } from "./FormContact.styled"
import { useDispatch } from "react-redux"
import { addContact } from 'redux/contactSlice'
import { nanoid } from '@reduxjs/toolkit'

const FormContact = () => {

const dispatch = useDispatch()
    
const [name, setName] = useState('')
const [number, setNumber] = useState('')

    const handleChange = ({target}) => {

        switch(target.name){

            case 'name': setName(target.value);
            break;

            case 'number': setNumber(target.value);
            break;

            default: return;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:addContact, payload: {
            name: name,
            number: number,
            id: nanoid()
        } })
        setName('');
        setNumber('');

    }

        return(
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="777">Name</Label>
            <Input
                type="text"
                name="name"
                placeholder="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
            />
            <Label htmlFor="888">Number</Label>
            <Input
                type="tel"
                name="number"
                placeholder="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
            />
            <Button type='submit'>Add contact</Button>
        </Form>
        )
    }

export default FormContact

