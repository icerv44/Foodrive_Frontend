import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { GOOGLE_MAP_KEY } from "../../../config/env";
import Spinner from "../../ui/Spinner";
import GoogleMapInput from "./GoogleMapInput";

console.log(GOOGLE_MAP_KEY);
const libraries = ["places"];

function GoogleMapInputLoader({ address, setAddress, position, setPosition }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_KEY,
    libraries,
  });

  if (!isLoaded) return <Spinner />;

  return (
    <GoogleMapInput
      address={address}
      setAddress={setAddress}
      position={position}
      setPosition={setPosition}
    />
  );
}

export default GoogleMapInputLoader;
