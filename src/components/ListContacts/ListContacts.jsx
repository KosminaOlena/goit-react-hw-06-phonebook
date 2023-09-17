import { ItemListContact } from "components/ItemListContact/ItemListContact"
import { List } from "./ListContacts.styled"
import { useSelector } from "react-redux"

export const ListContacts = () => {
    const contacts = useSelector(state => state.contact.contacts)
    const filter = useSelector(state => state.contact.filter)

    const choiceVisibleArray = () => {
        if(filter !== ''){
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
              ); 
        }
        return contacts;
    }

    const visibleArray = choiceVisibleArray();

    return(
        <List>
            {visibleArray.map(contact => (<ItemListContact 
            key={contact.id}
            id={contact.id} 
            name={contact.name} 
            number={contact.number}
            />
           ))}
        </List>
    )
}
