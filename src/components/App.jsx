import React, { useState, useEffect } from 'react';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Завантаження контактів з localStorage при монтуванні компонента
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []); // Пустий масив для виклику ефекту тільки при монтуванні компонента

  // Збереження контактів у localStorage при оновленні стану
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // Викликається тільки при зміні стану контактів

  // Додає новий контакт до списку, перевіряючи наявність дублікатів
  const addContact = newContact => {
    const isDuplicateContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    isDuplicateContact
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // Видаляє контакт за його ідентифікатором
  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== contactId));
  };

  // Оновлює значення фільтрації контактів
  const updateFilter = filterString => {
    setFilter(filterString);
  };

  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <AppLayout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          filter={filter}
          onUpdateFilter={updateFilter}
          onDelete={deleteContact}
        />
      )}
    </AppLayout>
  );
};

export default App;
