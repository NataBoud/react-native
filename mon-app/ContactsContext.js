import React, { createContext, useState } from "react";
import { contacts as contactsData } from "../data";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState(contactsData);

    const addContact = (newContact) => {
        setContacts(prev => [newContact, ...prev]); 
    };

    return (
        <ContactsContext.Provider value={{ contacts, addContact }}>
            {children}
        </ContactsContext.Provider>
    );
};
