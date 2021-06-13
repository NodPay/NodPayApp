import React, {createContext, useReducer} from 'react';

export const State = createContext();
export const Dispatch = createContext();

const initialState = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
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
