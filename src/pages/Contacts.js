import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { fetchContacts } from "redux/Contacts/operations";
import "../index.css"

export const Contacts = () =>{
  const dispatch = useDispatch()
  const isLoading =useSelector(state=> state.contacts.isLoading)
  console.log("isLoading:",isLoading)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return(
        <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList/>   
      </div>
    )
}