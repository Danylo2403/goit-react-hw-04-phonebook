import React, { Component } from 'react';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // Завантаження контактів з localStorage при монтуванні компонента
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Збереження контактів у localStorage при оновленні стану
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // Додає новий контакт до списку, перевіряючи наявність дублікатів
  addContact = newContact => {
    const isDuplicateContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    isDuplicateContact
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  // Видаляє контакт за його ідентифікатором
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  // Оновлює значення фільтрації контактів
  updateFilter = filterString => {
    this.setState({ filter: filterString });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <AppLayout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            filter={filter}
            onUpdateFilter={this.updateFilter}
            onDelete={this.deleteContact}
          />
        )}
      </AppLayout>
    );
  }
}

export default App;
