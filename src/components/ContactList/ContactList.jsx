import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, filter, onUpdateFilter, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {/* Компонент для введення тексту фільтрації */}
      <Filter onUpdateFilter={onUpdateFilter} />

      {/* Список контактів, відфільтрований згідно з введеним текстом фільтрації */}
      <ul>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
