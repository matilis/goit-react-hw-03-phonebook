import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  newContact = (name, number) => {
    const { contacts } = this.state;

    const contactNames = contacts.map(contact => {
      return contact.name;
    });

    if (contactNames.includes(name))
      return alert(`${name} is alredy in contacts`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  showContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = newValue => {
    this.setState({
      filter: newValue,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.newContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} />
        <ContactList
          contacts={this.showContacts()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
