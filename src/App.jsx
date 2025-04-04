import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

export default function App() {
  return (
      <>
       <ContactList />
      </>
  );
}
// The App component is the main component of the application. It imports the ContactList component and renders it.
// The ContactList component is responsible for displaying a list of contacts in a table format. 