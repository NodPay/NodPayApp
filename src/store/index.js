import React, {createContext, useReducer} from 'react';

export const State = createContext();
export const Dispatch = createContext();

const initialState = {
  // create account
  activeStep: 0, //stepper counter
  isComplete: false, //if all step completed, set to true
  error: false, // error on register screen with ErrorMessage component,
  errorMessage: '', // error message with ErrorMessage component
  phoneNumber: '', // mobile phone number
  isVerification: false, // check if verification set to true, then change te UI
  isRunning: false, //resent code countdown start
  verificationCode: '',
  isFamilyRelation: false, //family relation ui personal detail
  isDisabled: false, //button next register
  cnicData: null, //data cnic section
  setUpBiometric: false, //setup biometric section
  showModal: false, // createa account modal
  typeModal: null, // check if modal success or failed
  // create account end
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case 'SET_ACTIVE_STEP_PAYLOAD':
      return {
        ...state,
        activeStep: action.payload,
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
    case 'SET_VERIFICATION_CODE':
      return {
        ...state,
        verificationCode: action.payload,
      };
    case 'SET_IS_RUNNING':
      return {
        ...state,
        isRunning: action.payload,
      };
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    case 'SET_ERROR_REGISTER':
      return {
        ...state,
        error: action.error,
        errorMessage: action.errorMessage,
      };
    case 'SET_FAMILY_RELATION':
      return {
        ...state,
        isFamilyRelation: action.payload,
      };
    case 'SET_BUTTON':
      return {
        ...state,
        isDisabled: action.payload,
      };
    case 'SET_CNIC_DATA':
      return {
        ...state,
        cnicData: action.payload,
      };
    case 'SET_BIOMETRIC':
      return {
        ...state,
        setUpBiometric: action.payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        showModal: action.showModal,
        typeModal: action.typeModal,
      };
    case 'RESET_REGISTER':
      return {
        ...state,
        activeStep: 0,
        isComplete: false,
        error: false,
        errorMessage: '',
        phoneNumber: '',
        isVerification: false,
        isRunning: false,
        verificationCode: '',
        isFamilyRelation: false,
        isDisabled: false,
        cnicData: null,
        setUpBiometric: false,
        showModal: false,
        typeModal: null,
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
