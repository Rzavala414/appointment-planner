import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts, setContacts] = useState([{
    name: 'phil',
    phoneNumber:'304003r040',
    email:'test@example.com'
  },
  {
    name: 'brh',
    phoneNumber:'304003r040',
    email:'tesdfdsft@example.com'
  }
]);

  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };



  const addContact = (name, phoneNumber, email) =>{
    // check if missing any contact information
    if(!name || !phoneNumber || !email) return;

    const contact = {
      name,
      phoneNumber,
      email
    }

    setContacts(prevContacts => [...prevContacts, contact]);
  }

  const addAppointment = (title, contact, date, time) =>{

    // check if missing any contact information
    if(!title || !contact|| !date || !time) return;

    const appointment = {
      title,
      contact,
      date,
      time
    }

    setContacts(prevAppointments => [...prevAppointments, appointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
