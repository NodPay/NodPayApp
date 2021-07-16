export const setFormRegister = (key, value) => {
  return {
    type: 'SET_FORM_REGISTER',
    inputType: key,
    inputValue: value,
  };
};
