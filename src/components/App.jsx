import ContactList from "./Phonebook/ContactList";
import Filter from "./Filter/Filter";
import { useMemo } from "react";
import PhoneBook from "./Phonebook/Phonebook";
import { useSelector } from "react-redux";

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)

   const getVisibleContacts = useMemo(() => {
    const normalizedContacts = filter.toLocaleLowerCase()
    return contacts.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedContacts))
  }, [contacts, filter])

  return <div>
    <PhoneBook />
    <Filter />
    <ContactList contacts={getVisibleContacts} />
  </div >

}
