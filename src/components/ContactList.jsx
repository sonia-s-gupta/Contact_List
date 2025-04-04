import React from 'react';
import {useState, useEffect} from 'react';
import ContactRow from './ContactRow';

export default function ContactList({setSelectedContactId}) {
    // The ContactList component is a functional component that displays a list of contacts in a table format.
    const [contacts, setContacts] = useState([]);
    // The useState hook is used to manage the state of the contacts.
    useEffect (() => {
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.error(error);
                // If an error occurs during the fetch, it is logged to the console.
             }   
        }
        fetchContacts();
}, []);
    
console.log("Contacts: ", contacts);
    // This line logs the current state of contacts to the console for debugging purposes.
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                        return <ContactRow key = {contact.id} contact = {contact} setSelectedContactId = {setSelectedContactId} />
                            // The ContactRow component is used to render each contact in the list.
                            // The key prop is used to uniquely identify each row in the list.
                            // The contact prop is passed to the ContactRow component to display the contact's information.
                        })}
            </tbody>
        </table>
    );
}
