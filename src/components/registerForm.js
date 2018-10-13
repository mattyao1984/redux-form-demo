import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomSelect } from '../fields';
import validate from '../validation';

const RegisterForm = (props) => (
    <form onSubmit={props.submitHandler}>
        <Field id="firstname" name="firstname" component={CustomInput} type="text" label="First Name"></Field>
        <Field id="lastname" name="lastname" component={CustomInput} type="text" label="Last Name"></Field>
        <Field id="username" name="username" component={CustomInput} type="text" label="Username"></Field>
        <Field id="password" name="password" component={CustomInput} type="password" label="Password"></Field>
        <Field id="preference" name="preference" component={CustomSelect} type="select" label="Preferred format" options={[
            {value: 'tab', title: 'Tab'},
            {value: 'space', title: 'Space'}
        ]}></Field>
        <Field id="newsletter" name="newsletter" component={CustomInput} type="checkbox" label="Sign up to newsletter?"></Field>
        <div className="field-item">
            <button type="submit">Submit</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'register',
    validate
})(RegisterForm);