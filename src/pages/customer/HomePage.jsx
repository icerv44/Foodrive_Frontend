import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../../role/customer/home/HomeContainer";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../contexts/LoadingContext";

// import HomeHeader from "../../components/home/HomeHeader";

function HomePage() {
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  const userInfo = useSelector((state) => state.user.info);
  const { latitude, longitude } = userInfo;
  const { getMenus, search, menus } = useCustomer();

  const { pathname } = useLocation();

  useEffect(() => {
    if ((longitude, latitude)) {
      const fetchMenus = async () => {
        try {
          setLoading(true);
          await getMenus(latitude, longitude, "");
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      fetchMenus();
    }
  }, [pathname, latitude, longitude]);

  return <HomeContainer latitude={latitude} longitude={longitude} />;
}

export default HomePage;
