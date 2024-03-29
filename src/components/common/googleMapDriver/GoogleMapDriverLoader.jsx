import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { GOOGLE_MAP_KEY } from "../../../config/env";
import Spinner from "../../ui/Spinner";
import GoogleMapDriver from "./GoogleMapDriver";

function GoogleMapDriverLoader() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <Spinner />;

  return <GoogleMapDriver />;
}

export default GoogleMapDriverLoader;
