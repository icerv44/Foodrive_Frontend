import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../../role/customer/home/HomeContainer";
import { getCurrentPosition } from "../../services/geolocation";
import { getAccessToken } from "../../services/localstorage";
import { setPosition } from "../../slices/userSlice";
import axios from "../../config/axios";
import { useLoading } from "../../contexts/LoadingContext";
// import HomeHeader from "../../components/home/HomeHeader";

function HomePage() {
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.info);
  const { latitude, longitude } = userInfo;

  const [menus, setMenus] = useState([]);
  //อยากทำเป็นslice มั้ยหรือจะ hard code อย่างงี้

  const fetchMenus = async () => {
    try {
      console.log(latitude, longitude);
      setLoading(true);
      const res = await axios.post("customer/getMenus", {
        latitude,
        longitude,
      });
      console.log(res.data.menus);
      setMenus(res.data.menus);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getCurrentPosition().then((res) => {
  //     dispatch(
  //       setPosition({ latitude: res.latitude, longitude: res.longitude })
  //     );
  //   });
  // }, []);

  useEffect(() => {
    const perform = async () => {
      try {
        if (latitude === null || longitude === null) return;
        fetchMenus();
      } catch (err) {
        console.log(err);
      }
    };
    perform();
  }, [userInfo]);

  return <HomeContainer />;
}

export default HomePage;
