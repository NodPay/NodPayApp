export const setFormRegister = (key, value) => {
  return {
    type: 'SET_FORM_REGISTER',
    inputType: key,
    inputValue: value,
  };
};

export const setFormRegisterBusiness = (key, value) => {
  return {
    type: 'SET_FORM_REGISTER_BUSINESS',
    inputType: key,
    inputValue: value,
  };
};
