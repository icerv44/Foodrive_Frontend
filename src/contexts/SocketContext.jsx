import { Children, createContext, useContext, useState } from "react";

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  const res = useContext(SocketContext);
  return res;
};

export { SocketContextProvider, useSocket };
