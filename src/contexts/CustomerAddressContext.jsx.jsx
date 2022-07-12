import { createContext, useContext, useState } from "react";

const CustomerAddressContext = createContext();

export const CustomerAddressContextProvider = ({ children }) => {
  const [mode, setMode] = useState(null); //current, handPicked
  const [address, setAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [pickedLongitude, setPickedLongitude] = useState(null);
  const [pickedLatitude, setPickedLatitude] = useState(null);
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
        mode,
        setMode,
        selectedAddress,
        setSelectedAddress,
        pickedLongitude,
        setPickedLongitude,
        pickedLatitude,
        setPickedLatitude,
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
