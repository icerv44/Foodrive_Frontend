import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../../role/customer/home/HomeContainer";
import { getCurrentPosition } from "../../services/geolocation";
import { getAccessToken } from "../../services/localstorage";
import { setPosition } from "../../slices/userSlice";
import axios from "../../config/axios";
import { useLoading } from "../../contexts/LoadingContext";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLocation } from "react-router-dom";
// import HomeHeader from "../../components/home/HomeHeader";

function HomePage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.info);
  const { latitude, longitude } = userInfo;
  const { getMenus, search } = useCustomer();

  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const fetchMenus = async () => {
        await getMenus(latitude, longitude, search);
      };
      return fetchMenus;
    } catch (err) {}
  }, [pathname, search]);

  return <HomeContainer latitude={latitude} longitude={longitude} />;
}

export default HomePage;
