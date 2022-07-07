import axios from "../config/axios";
import { GOOGLE_MAP_KEY } from "../config/env";

export const getAddressFromLatLng = async (lat, lng) => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_KEY}`
  );
  return res.data.results[0].formatted_address;
};
