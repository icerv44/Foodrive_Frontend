import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function GoogleMapDriver() {
  const [center, setCenter] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);
  const [customerPosition, setCustomerPosition] = useState(null);
  const [direction, setDirection] = useState(null);
  const mapRef = useRef(null);
  const { latitude, longitude, role } = useSelector((state) => state.user.info);

  const onLoad = useCallback((map) => (mapRef.current = map));

  useEffect(() => {
    if (latitude && longitude) {
      const fakeRole = "driver";

      let driverLocation;
      let customerLocation;
      if (fakeRole === "driver") {
        driverLocation = { lat: latitude, lng: longitude };
        //await fetch customer position
        customerLocation = { lat: 14, lng: 100.5 };
      } else if (fakeRole === "customer") {
        driverLocation = { lat: latitude, lng: longitude };
        //await fetch driver position
        customerLocation = { lat: 14, lng: 100.5 };
      }
      setDriverPosition(driverLocation);
      setCustomerPosition(customerLocation);
      setCenter({ lat: latitude, lng: longitude });

      const service = new window.google.maps.DirectionsService();

      service.route(
        {
          origin: driverLocation,
          destination: customerLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            setDirection(result);
          }
        }
      );
    }
  }, [latitude, longitude]);

  useEffect(() => {
    console.log(driverPosition, center);
  });

  return (
    <div
      className="driver-map-container"
      style={{ width: "70%", height: "50vh" }}
    >
      <GoogleMap
        mapContainerClassName="driver-map"
        zoom={16}
        center={driverPosition}
        onLoad={onLoad}
      >
        <Marker key={"marker1"} position={driverPosition} />
        <Marker key={"customer marker"} position={customerPosition} />
        <DirectionsRenderer directions={direction} />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapDriver;
