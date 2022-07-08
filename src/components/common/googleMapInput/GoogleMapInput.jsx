import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GOOGLE_MAP_KEY } from "../../../config/env";
import axios from "../../../config/axios";
import { useError } from "../../../contexts/ErrorContext";

function GoogleMapInput({ address, setAddress, position, setPosition }) {
  const [center, setCenter] = useState(null);
  const { setError } = useError();
  const { latitude, longitude, role } = useSelector((state) => state.user.info);

  const mapRef = useRef(null);
  const onLoad = useCallback((map) => (mapRef.current = map));

  const getAddressFromLatLng = async (lat, lng) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_KEY}`
    );
    return res.data.results[0].formatted_address;
  };

  const handleClick = async (e) => {
    const newPosition = e.latLng.toJSON();
    const latLng = { lat: newPosition.lat, lng: newPosition.lng };
    const newAddress = await getAddressFromLatLng(
      newPosition.lat,
      newPosition.lng
    );
    setAddress(newAddress);
    setPosition(latLng);
  };

  const initPosition = async () => {
    try {
      if (latitude && longitude) {
        setPosition({ lat: latitude, lng: longitude });
        setCenter({ lat: latitude, lng: longitude });

        const newAddress = await getAddressFromLatLng(latitude, longitude);
        setAddress(newAddress);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initPosition().catch((err) => {
      setError(err.response.data.message);
    });
  }, [latitude, longitude]);

  return (
    <div
      className="driver-map-container"
      style={{ width: "100%", height: "50vh" }}
    >
      <GoogleMap
        mapContainerClassName="driver-map"
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={16}
        center={center}
        onLoad={onLoad}
        onClick={handleClick}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {position.lat && position.lng && (
          <Marker key={"marker1"} position={position} />
        )}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapInput;
