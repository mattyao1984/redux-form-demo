import React from 'react';

const CustomInput = props => (
  <div className="field-item">
    <label htmlFor={props.id}>{props.label}</label>
    <input {...props.input} id={props.id} name={props.name} type={props.type} />
    {(props.meta.error && props.meta.touched) && (
      <h6 className="error" style={{color: 'red'}}>
        {props.meta.error}
      </h6>
    )}
  </div>
);

const CustomSelect = props => (
  <div className="field-item">
    <label htmlFor={props.id}>{props.label}</label>
    <select id={props.id} name={props.name} {...props.input}>
      { props.options.map(option => <option value={option.value}>{option.title}</option>) }
    </select>
  </div>
);

export {
  CustomInput,
  CustomSelect
}