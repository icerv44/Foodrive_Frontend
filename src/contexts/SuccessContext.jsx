import { createContext, useContext, useState } from "react";

const SuccessContext = createContext();

function SuccessContextProvider({ children }) {
  const [success, setSuccess] = useState(null);

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  return (
    <SuccessContext.Provider value={{ success, setSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
}
const useSuccess = () => {
  const ctx = useContext(SuccessContext);
  return ctx;
};

export { SuccessContextProvider, useSuccess };
