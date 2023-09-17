import PropTypes from 'prop-types'
import { deleteContact } from "redux/contactSlice"
import { Item, Button } from "./itemListContact.styled"
import { useDispatch } from "react-redux"

export const ItemListContact = ({id, name, number}) => {
    const dispatch = useDispatch()
    return(
        <Item>
                {name}: {number}
                <Button type='button' onClick={() => dispatch({type:deleteContact, payload: id })}>Delete</Button>
        </Item>
    )
}

ItemListContact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired}