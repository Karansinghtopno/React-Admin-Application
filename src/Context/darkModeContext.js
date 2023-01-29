import React from "react";
import reducer from "./DarkModeReducer";
import { useReducer } from "react";
const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = React.createContext( INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,INITIAL_STATE);
  return (
    <DarkModeContext.Provider
      value={{ darkMode: state.darkMode, dispatch: dispatch }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
