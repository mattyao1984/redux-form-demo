const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username must be longer than 4 characters';
  } else if (values.username.length > 16) {
    errors.username = 'Username must be shorter than 16 characters';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (values.password !== values.confirmPassword) {
    errors.password = 'Password must be the same.'
  }

  return errors;
};

export default validate;