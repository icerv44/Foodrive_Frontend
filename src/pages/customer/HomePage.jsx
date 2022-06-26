import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContainer from "../../role/customer/home/HomeContainer";
import { getAccessToken } from "../../services/localstorage";
// import HomeHeader from "../../components/home/HomeHeader";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
    }
  }, []);

  return <HomeContainer />;
}

export default HomePage;
