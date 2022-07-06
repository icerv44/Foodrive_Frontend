import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function GoogleMapDriver() {
  const [center, setCenter] = useState(null);
  const [driverPosition, setDriverPosition] = useState({
    lat: null,
    lng: null,
  });
  const [customerPosition, setCustomerPosition] = useState({
    lat: null,
    lng: null,
  });
  const [direction, setDirection] = useState(null);
  const mapRef = useRef(null);
  const { latitude, longitude, role } = useSelector((state) => state.user.info);

  const onLoad = useCallback((map) => (mapRef.current = map));

  const initMap = async () => {
    try {
      if (latitude && longitude) {
        const role = "driver";
        //Get current order
        let order;
        if (role === "driver") {
          const result = await axios.get("/driver/currentOrder");
          order = result.data.order;
        }

        const orderId = order?.id;
        let driverLocation;
        let customerLocation;
        if (role === "driver") {
          driverLocation = { lat: +latitude, lng: +longitude };

          let newLatitude, newLongitude;

          if (!order) {
            customerLocation = { lat: null, lng: null };
          } else {
            const res = await axios.get("/driver/order/" + orderId);
            newLatitude = res.data.order.customerLatitude;
            newLongitude = res.data.order.customerLongitude;
            customerLocation = { lat: +newLatitude, lng: +newLongitude };
          }

          //await fetch customer position
        } else if (role === "customer") {
          driverLocation = { lat: +latitude, lng: +longitude };
          //await fetch driver position
          customerLocation = { lat: 14, lng: 100.5 };
        }

        setDriverPosition(driverLocation);
        setCustomerPosition(customerLocation);
        setCenter({ lat: latitude, lng: longitude });

        const service = new window.google.maps.DirectionsService();
        if (
          !driverLocation.lng ||
          !driverLocation.lat ||
          !customerLocation.lat ||
          !customerLocation.lng
        )
          return;
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
  }, [latitude, longitude, role]);
  useEffect(() => {
    console.log(
      Boolean(
        driverPosition.lng &&
          driverPosition.lat &&
          customerPosition.lat &&
          customerPosition.lng
      )
    );
  });

  return (
    <div className="driver-map-container">
      <GoogleMap
        mapContainerClassName="driver-map"
        zoom={
          driverPosition.lng &&
          driverPosition.lat &&
          customerPosition.lat &&
          customerPosition.lng
            ? null
            : 16 /*Auto zoom(null) if driver and customer are present other wise zoom to the current location*/
        }
        center={
          Boolean(
            driverPosition.lng &&
              driverPosition.lat &&
              customerPosition.lat &&
              customerPosition.lng
          )
            ? null
            : center /*same as above*/
        }
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
        onLoad={onLoad}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
      >
        {driverPosition.lng && driverPosition.lat && (
          <Marker key={"marker1"} position={driverPosition} />
        )}
        {customerPosition.lng && customerPosition.lat && (
          <Marker key={"customer marker"} position={customerPosition} />
        )}
        {direction && <DirectionsRenderer directions={direction} />}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapDriver;
