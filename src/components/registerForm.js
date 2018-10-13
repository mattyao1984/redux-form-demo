import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomSelect } from '../fields';

const RegisterForm = (props) => (
    <form onSubmit={props.submitHandler}>
        <Field id="name" name="name" component={CustomInput} type="text" label="Name"></Field>
        <Field id="preference" name="preference" component={CustomSelect} type="select" label="Preferred format" options={[
            {value: 'tab', title: 'Tab'},
            {value: 'space', title: 'Space'}
        ]}></Field>
        <Field id="news-letter" name="news-letter" component={CustomInput} type="checkbox" label="Sign up to newsletter?"></Field>
        <div className="field-item">
            <button type="submit">Submit</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'register'
})(RegisterForm);