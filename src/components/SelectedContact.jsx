import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
  // The selectedContactId prop is used to determine which contact is selected.
  // The setSelectedContactId prop is a function used to update the selected contact ID in the parent component.
  
    useEffect(() => {
        // The useEffect hook is used to fetch the selected contact's information when the component mounts or when the selectedContactId changes.
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
                console.log(result);
                // The setContact function is used to update the state of the selected contact.
                // The result is logged to the console for debugging purposes.
            } catch (error) {
                console.error("Failed to fetch contact:", error);
            }
        }

        fetchContact();
    }, []);
    // The empty dependency array [] ensures that the effect runs only once when the component mounts.
    // The selectedContactId is not included in the dependency array, so the effect will not re-run when it changes.
  
    return (
        <div>
            {contact ? (
            // The contact state is used to store the selected contact's information.
            // The contact state is initially set to null.
            // If the contact state is not null, the contact's information is displayed.
            // If the contact state is null, a loading message is displayed.
                <div>
                    <h2>{contact.name}</h2> 
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Website: {contact.website}</p>
                    <p>Company: {contact.company?.name}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    }