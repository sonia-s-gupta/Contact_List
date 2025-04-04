import React from "react";

export default function ContactRow({ contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
// The ContactRow component is a functional component that takes a contact object as a prop and renders a table row with the contact's name, email, and phone number. 