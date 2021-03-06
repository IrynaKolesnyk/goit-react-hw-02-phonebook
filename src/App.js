import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Filter from "./components/Filter/Filter.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

// uuidv4(); для уникальных ключей

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // contacts
  addContact = (text, value) => {
    console.log(text);
    console.log(value);
    const newContact = { id: uuidv4(), name: text, number: value };
    if (
      this.state.contacts
        .map((contact) => contact.name.toLowerCase())
        .includes(text.toLowerCase())
    ) {
      return alert(`Contact "${text}" already exists`);
    }
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // filter
  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filterContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          // contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
