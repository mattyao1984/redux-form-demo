import React, { Component } from 'react';
import RegisterForm from '../components/registerForm';
import { SubmissionError } from 'redux-form';

const submitHandler = values => {
  if (['kent', 'andy', 'matt', 'john'].includes(values.username)) {
    throw new SubmissionError({
      username: 'Username already taken'
    });
  } else {
    window.alert(JSON.stringify(values, null, 4));
  }
};

const getInitialValues = () => ({
  firstname: 'Matt',
  preference: 'space',
  newsletter: 'true'
});

const RegisterFormContainer = () => (
  <RegisterForm 
    onSubmit={submitHandler}
    initialValues={getInitialValues()} />
);

export default RegisterFormContainer;