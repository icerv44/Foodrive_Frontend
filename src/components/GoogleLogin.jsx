import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { GOOGLE_CLIENT_ID } from "../config/env";
import { changeGoogleData, googleLogin } from "../slices/googleSlice";
import { fetchUser } from "../slices/userSlice";

function GoogleLogin() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const role = pathname.split("/")[1];

  const handleCallbackResponse = async (response) => {
    const res = await dispatch(
      changeGoogleData({ googleData: response.credential })
    );

    const resRole = await dispatch(googleLogin({ role }));
    console.log(response.credential);

    if (resRole?.error?.message !== "Rejected") {
      navigate("/" + role);
      dispatch(fetchUser({ role }));
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default GoogleLogin;
