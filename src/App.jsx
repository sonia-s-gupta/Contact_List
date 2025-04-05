import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  // The useState hook is used to manage the state of the selected contact ID.
 
  return (
      <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      // The SelectedContact component is rendered when a contact is selected.
      // The selectedContactId prop is passed to the SelectedContact component to display the selected contact's information.
      ) : (
       <ContactList setSelectedContactId={setSelectedContactId}/>
      // The ContactList component is rendered when no contact is selected.
      )}
      </>
  );
}
// The App component is the main component that renders the ContactList and SelectedContact components based on the selected contact ID.