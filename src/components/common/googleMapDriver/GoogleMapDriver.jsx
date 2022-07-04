import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function GoogleMapDriver() {
  const [center, setCenter] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);
  const [customerPosition, setCustomerPosition] = useState(null);
  const [direction, setDirection] = useState(null);
  const mapRef = useRef(null);
  const { latitude, longitude, role } = useSelector((state) => state.user.info);

  const onLoad = useCallback((map) => (mapRef.current = map));

  const initMap = async () => {
    try {
      if (latitude && longitude) {
        const fakeRole = "driver";
        //Get current order
        const orderId = 1;
        let driverLocation;
        let customerLocation;
        if (fakeRole === "driver") {
          driverLocation = { lat: +latitude, lng: +longitude };
          const res = await axios.get("/driver/order/" + orderId);

          const newLatitude = res.data.order.customerLatitude;
          const newLongitude = res.data.order.customerLongitude;

          //await fetch customer position
          customerLocation = { lat: +newLatitude, lng: +newLongitude };
        } else if (fakeRole === "customer") {
          driverLocation = { lat: +latitude, lng: +longitude };
          //await fetch driver position
          customerLocation = { lat: 14, lng: 100.5 };
        }
        setDriverPosition(driverLocation);
        setCustomerPosition(customerLocation);
        setCenter({ lat: latitude, lng: longitude });

        const service = new window.google.maps.DirectionsService();
        if (!customerLocation || !driverLocation) return;
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initMap();
  }, [latitude, longitude]);

  //   useEffect(() => {});

  return (
    <div
      className="driver-map-container"
      style={{ width: "70%", height: "50vh" }}
    >
      <GoogleMap
        mapContainerClassName="driver-map"
        zoom={
          driverPosition && customerPosition
            ? null
            : center /*Auto zoom(null) if driver and customer are present other wise zoom to the current location*/
        }
        center={
          driverPosition && customerPosition ? null : center /*same as above*/
        }
        // options={full}
        onLoad={onLoad}
        mapContainerStyle={{ width: "70%", height: "50vh" }}
      >
        {driverPosition && <Marker key={"marker1"} position={driverPosition} />}
        {customerPosition && (
          <Marker key={"customer marker"} position={customerPosition} />
        )}
        {direction && <DirectionsRenderer directions={direction} />}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapDriver;
