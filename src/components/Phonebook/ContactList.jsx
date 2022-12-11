import { ContactItems } from './ContactItems'
import css from './PhoneBook.module.css'

const ContactList = ({contacts }) => {

    if (contacts.length === 0) { return null }

    return (
        <ul className={css.list}> {contacts.map(contact => <ContactItems key={contact.id} {...contact} />)}</ul>
    )

}
export default ContactList


