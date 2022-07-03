import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}
const useError = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};

export { ErrorContextProvider, useError };
