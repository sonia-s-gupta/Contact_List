import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
        onClick={() => {
            setSelectedContactId(contact.id);
        }}
    >
      {/* The onClick event handler is used to set the selected contact ID when a row is clicked. */}
      {/* The setSelectedContactId function is passed as a prop from the parent component. */}
      {/* The contact prop is used to access the contact's information. */}
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
// The ContactRow component is a functional component that takes a contact object as a prop and renders a table row with the contact's name, email, and phone number. 