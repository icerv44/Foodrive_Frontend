import React, { createContext, useContext, useState } from "react";
import { Provider } from "react-redux";

export const ErrorContext = createContext();

export function ErrorContextProvider({ children }) {
  const [error, setError] = useState("");

  console.log(error);

  return <ErrorContext.Provider value={{}}>{children}</ErrorContext.Provider>;
}

export const useError = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};
