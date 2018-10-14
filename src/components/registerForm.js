import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomSelect } from '../fields';
import validate from '../validation';
import './registerForm.css';

const RegisterForm = (props) => (
    <form name="register" onSubmit={props.handleSubmit}>
        <Field id="firstname" name="firstname" component={CustomInput} type="text" label="First Name"></Field>
        <Field id="lastname" name="lastname" component={CustomInput} type="text" label="Last Name"></Field>
        <Field id="username" name="username" component={CustomInput} type="text" label="Username"></Field>
        <Field id="password" name="password" component={CustomInput} type="password" label="Password"></Field>
        <Field id="confirmPassword" name="confirmPassword" component={CustomInput} type="password" label="Confirm password"></Field>
        <Field id="preference" name="preference" component={CustomSelect} type="select" label="Preferred format" options={[
            {value: 'tab', title: 'Tab'},
            {value: 'space', title: 'Space'}
        ]}></Field>
        <Field id="newsletter" name="newsletter" component={CustomInput} type="checkbox" label="Sign up to newsletter?"></Field>
        <button type="submit">Submit</button>
    </form>
);

export default reduxForm({
    form: 'register',
    validate
})(RegisterForm);