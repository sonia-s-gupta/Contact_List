import React from 'react';
import {useState} from 'react';
import ContactRow from './ContactRow';

// dummy data for contacts
// This data is used to populate the contact list in the table.
const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList(){
    const [contacts, setContacts] = useState(dummyContacts);
    // The useState hook is used to manage the state of the contacts.
    // The initial state is set to the dummyContacts array.
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
                        return <ContactRow key = {contact.id} contact = {contact} />
                            // The ContactRow component is used to render each contact in the list.
                            // The key prop is used to uniquely identify each row in the list.
                            // The contact prop is passed to the ContactRow component to display the contact's information.
                        })}
            </tbody>
        </table>
    );
}