import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //checks if duplication of name is false then clears out local states
    if(!duplicate){
      addContact(name, phoneNumber, email)
      setName('');
      setPhoneNumber('');
      setEmail('');
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() =>{
    const isNameDuplicate = () =>{
      const foundDuplicate = contacts.find(contact => contact.name )
      // if found duplicate name turn duplicate hook true
      setDuplicate(foundDuplicate ? true : false);
    }

    isNameDuplicate()
  }, [name, phoneNumber, email])


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name}
                     phoneNumber={phoneNumber}
                     email={email}
                     handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
