import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { GOOGLE_MAP_KEY } from "../../../config/env";
import Spinner from "../../ui/Spinner";
import GoogleMapDriver from "./GoogleMapDriver";

console.log(GOOGLE_MAP_KEY);

function GoogleMapDriverLoader() {
  console.log("google map driver loading");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <Spinner />;

  return <GoogleMapDriver />;
}

export default GoogleMapDriverLoader;
