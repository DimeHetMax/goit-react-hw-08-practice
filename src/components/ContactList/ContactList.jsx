import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai";
import { deleteContact, updateContact } from 'redux/Contacts/operations';
import { getContacts, getFilter } from 'redux/selectors';
import css from "./ContactList.module.css"

 export const ContactList = () => {
  const {items} = useSelector(getContacts)
  console.log(items)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  const handleFilteredContacts = filteredContacts =>{
    return filteredContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };  
  return (
    
    <ul className={css.list}>
      {filter === '' ? (
        items.map(({ name, number, id }) => 
            {return <li className ={css.phoneItem} key={id}>
              <div className={css.textContainer}> <AiFillEdit className={css.icon} onClick={()=> dispatch(updateContact(id))}/><p>{name}: {number}</p></div>
             <button type='button' className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button></li>;}
          )
        ) : (
          handleFilteredContacts(items).map(({ id, name, number }) =>   
          {return <li className ={css.phoneItem} key={id}>
            <div className={css.textContainer}> <AiFillEdit className={css.icon} onClick={()=>dispatch(updateContact(id))}/><p>{name}: {number}</p></div>
           <button type='button' className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button></li>;}
          )
      )}
    </ul>
  );
 }