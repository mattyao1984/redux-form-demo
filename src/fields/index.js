import React from 'react';
import cx from 'classnames';

const getValidityClassName = meta => {
  if (meta.active) return;
  if (meta.touched && meta.invalid) return 'invalid';
  if (meta.touched && meta.valid) return 'valid';
}

const CustomInput = props => (
  <div className={cx(
    'custom-input-container',
    { 'flex-row-reverse': props.type === 'checkbox' },
    { dirty: props.meta.dirty },
    getValidityClassName(props.meta)
  )}>
    <label htmlFor={props.id}>{props.label}</label>
    <input {...props.input} id={props.id} name={props.name} type={props.type} />
    {(props.meta.error && props.meta.touched && !props.meta.active) && (
      <h6 className="error" className={cx(
        'feedback-text',
        'error-text'
      )}>
        {props.meta.error}
      </h6>
    )}
  </div>
);

const CustomSelect = props => (
  <div className="field-item">
    <label htmlFor={props.id}>{props.label}</label>
    <select id={props.id} name={props.name} {...props.input}>
      { props.options.map(option => <option value={option.value} key={'select_' + option.value}>{option.title}</option>) }
    </select>
  </div>
);

export {
  CustomInput,
  CustomSelect
}