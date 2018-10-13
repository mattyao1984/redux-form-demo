import React from 'react';
import RegisterForm from '../components/registerForm';

const submitHandler = (value) => {
  console.log(JSON.stringify(value, null, 4));
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