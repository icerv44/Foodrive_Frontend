import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function GoogleMapDriver() {
  const [center, setCenter] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [direction, setDirection] = useState(null);
  const mapRef = useRef(null);
  const { latitude, longitude } = useSelector((state) => state.user.info);

  const onLoad = useCallback((map) => (mapRef.current = map));

  useEffect(() => {
    if (latitude && longitude) {
      setMarkerPosition({ lat: latitude, lng: longitude });
      setCenter({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    console.log(markerPosition, center);
  });

  return (
    <div
      className="driver-map-container"
      style={{ width: "70%", height: "50vh" }}
    >
      <GoogleMap
        mapContainerClassName="driver-map"
        zoom={16}
        center={markerPosition}
        onLoad={onLoad}
      >
        <Marker key={"marker1"} position={markerPosition} />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapDriver;
