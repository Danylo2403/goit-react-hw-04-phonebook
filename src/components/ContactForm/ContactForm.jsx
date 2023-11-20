import React from 'react';
import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

// Схема валідації для форми додавання контакту
const contactsFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Please, enter only digits in the format of "123-12-12"'
    )
    .required('Required field'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    // Використання Formik для керування станом та валідацією форми
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsFormSchema}
      onSubmit={(values, actions) => {
        // Додає новий контакт до списку
        onAddContact({
          name: values.name,
          number: values.number,
          id: nanoid(),
        });
        // Очищає форму після додавання контакту
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {/* Поле для введення імені контакту */}
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <ErrorMessage name="name" component={'span'}></ErrorMessage>

          {/* Поле для введення номера телефону контакту */}
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" type="tel" />
          <ErrorMessage name="number" component={'span'}></ErrorMessage>

          {/* Кнопка для відправки форми */}
          <Button type="submit">Add contact</Button>
        </Form>
      )}
    </Formik>
  );
};
