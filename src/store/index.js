import React, {createContext, useReducer} from 'react';

export const State = createContext();
export const Dispatch = createContext();

const initialState = {
  // create account
  activeStep: 0,
  isComplete: false,
  error: false,
  errorMessage: '',
  phoneNumber: '',
  isVerification: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case 'SET_IS_COMPLETED':
      return {
        ...state,
        isComplete: action.payload,
      };
    case 'SET_VERIFICATION':
      return {
        ...state,
        isVerification: action.payload,
      };
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
};

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};
