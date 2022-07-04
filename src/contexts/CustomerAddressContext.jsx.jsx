import { createContext, useContext, useState } from "react";

const CustomerAddressContext = createContext();

export const CustomerAddressContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  return (
    <CustomerAddressContext.Provider
      value={{
        address,
        setAddress,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
      }}
    >
      {children}
    </CustomerAddressContext.Provider>
  );
};

export const useCustomerAddress = () => {
  const addressctx = useContext(CustomerAddressContext);
  return addressctx;
};
