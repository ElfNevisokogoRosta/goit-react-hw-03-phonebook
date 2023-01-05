import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, SecondaryTitle } from './App.styled';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }
  onSubmit = contact => {
    const { name } = contact;
    const { contacts } = this.state;
    const nameArr = contacts.map(contact => contact.name.toLowerCase());
    if (!nameArr.includes(name)) {
      this.setState({
        contacts: [...contacts, contact],
      });
      localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
    } else {
      alert('This contact is already in lis');
    }
  };
  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(contact => contact.id !== id))
    );
  };
  onFilterChange = value => {
    this.setState({
      filter: value,
    });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onSubmit} />
        {contacts.length > 0 ? (
          <div>
            <SecondaryTitle>Contacts</SecondaryTitle>
            <Filter onFilterChange={this.onFilterChange} />
            <ContactList
              data={contacts}
              deleteContact={this.deleteContact}
              filter={filter}
            />
          </div>
        ) : (
          'Add some contacts'
        )}
      </Container>
    );
  }
}

export default App;
