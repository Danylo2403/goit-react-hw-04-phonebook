import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField, ErrorMessage as Error } from 'formik';

export const Form = styled(FormikForm)`
  max-width: 300px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Field = styled(FormikField)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus-visible {
    outline: none;
    border-color: lightskyblue;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorMessage = styled(Error)`
  color: #f44336;
  font-size: 14px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
