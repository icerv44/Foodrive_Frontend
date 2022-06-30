import React, { useState } from "react";
import GoogleMapInputLoader from "./common/googleMapInput/GoogleMapInputLoader";

function GoogleMapTestPage() {
  //ให้ pass props address, setAddress, position, setPosition ลงไปใน GoogleMapInputLoader
  //ทุกครั้งที่คลิกบนmapจะได้ตำแหน่ง latitude, longitude และ address เก็บไว้ในstate
  //หลังจากอ่านเข้าใจแล้วสามารถลบ componentนี้ได้ เป็นตัวอย่างเฉยๆ
  const [address, setAddress] = useState(null);
  const [position, setPosition] = useState({ lat: null, lng: null });
  return (
    <>
      <GoogleMapInputLoader
        address={address}
        setAddress={setAddress}
        position={position}
        setPosition={setPosition}
      />
      <div>{JSON.stringify(position, null, 2)}</div>
      <div>{JSON.stringify(address, null, 2)}</div>
    </>
  );
}

export default GoogleMapTestPage;
