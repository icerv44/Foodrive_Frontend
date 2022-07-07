// import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import InputBox from "../components/input/InputBox";
import ProfileImg from "../components/imglogo/ProfileImg";
import { useLoading } from "../contexts/LoadingContext";
import { useError } from "../contexts/ErrorContext";
import { useSuccess } from "../contexts/SuccessContext";
import ButtonBack from "../components/button/ButtonBack";
import axios from "../config/axios";
import ButtonGreenGradiant from "../components/button/ButtonGreenGradiant";
import { Box, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../slices/userSlice";
import GoogleMapInputLoader from "../components/common/googleMapInput/GoogleMapInputLoader";
import ModalMapRestaurant from "../components/ui/ModalMapRestaurant";
import Modal from "react-modal";

function ProfilePage() {
  const user = useSelector((state) => state.user.info);

  const dispatch = useDispatch();
  const { setLoading } = useLoading();
  const { setError } = useError();
  const { setSuccess } = useSuccess();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const [profileImage, setProfileImage] = useState("");
  const [driverImage, setDriverImage] = useState("");
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { latitude, longitude } = useSelector((state) => state.user.info);
  const [hasSelected, setHasSelected] = useState(false);
  const profileRef = useRef(null);

  // update customer : firstName, lastName, req.imageFile: profileImage
  // update driver : firstName, lastName, driverImage
  // update restaurant : image, name

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setPosition({ lat: +latitude, lng: +longitude });
    }
  }, [latitude, longitude]);
  const handleCancelLocation = () => {
    setHasSelected(false);
    setAddress("");
    setPosition({ lat: latitude, lng: longitude });
  };

  const inputData = [
    {
      role: "customer",
      inputProfile: [
        {
          title: "First Name",
          placeholder: user.firstName,
          value: firstName,
          onChange: function (e) {
            setFirstName(e.target.value);
          },
        },
        {
          title: "Last Name",
          placeholder: user.lastName,
          value: lastName,
          onChange: function (e) {
            setLastName(e.target.value);
          },
        },
      ],
    },
    {
      role: "driver",
      inputProfile: [
        {
          title: "First Name",
          placeholder: user.firstName,
          value: firstName,
          onChange: function (e) {
            setFirstName(e.target.value);
          },
        },
        {
          title: "Last Name",
          placeholder: user.lastName,
          value: lastName,
          onChange: function (e) {
            setLastName(e.target.value);
          },
        },
      ],
    },
    {
      role: "restaurant",
      inputProfile: [
        {
          title: "name",
          placeholder: user.name,
          value: name,
          onChange: function (e) {
            setName(e.target.value);
          },
        },
      ],
    },
  ];

  const handleImage = (e) => {
    if (e.target.files[0]) {
      if (role === "restaurant") {
        setImage(e.target.files[0]);
      }
      if (role === "customer") {
        setProfileImage(e.target.files[0]);
      } else if (role === "driver") {
        setDriverImage(e.target.files[0]);
      }
    }
  };

  const findRole = () => inputData.find((el) => el.role === role);

  const showImageByRole = () => {
    if (role === "restaurant") {
      return (image && URL.createObjectURL(image)) || user.image;
    }
    if (role === "customer") {
      return (
        (profileImage && URL.createObjectURL(profileImage)) || user.profileImage
      );
    } else if (role === "driver") {
      return (
        (driverImage && URL.createObjectURL(driverImage)) || user.driverImage
      );
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("profileImage", profileImage);
      formData.append("driverImage", driverImage);
      formData.append("image", image);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("name", name);

      const res = await axios.put(`/${role}/update`, formData);

      let addressRes;
      if (hasSelected) {
        addressRes = await axios.patch("/restaurant/updateAddress", {
          latitude: position.lat,
          longitude: position.lng,
        });
      }

      setSuccess(res.data.message || addressRes.data.message);

      if (res.data.message) {
        setProfileImage("");
        setDriverImage("");
        setImage("");
        setFirstName("");
        setLastName("");
        setName("");
        dispatch(fetchUser({ role }));
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelChange = () => {
    setProfileImage("");
    setDriverImage("");
    setImage("");
    setFirstName("");
    setLastName("");
    setName("");
    window.history.back();
  };

  return (
    <Box>
      <ButtonBack onClick={handleCancelChange} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
          mt: "100px",
          px: "40px",
        }}
      >
        <div className="flex justify-between ">
          <Typography sx={{ fontWeight: "700", fontSize: "25px" }}>
            Edit Profile
          </Typography>
        </div>
        <div className="my-8">
          <input
            className="hidden"
            onChange={(e) => handleImage(e)}
            type="file"
            ref={profileRef}
          />
          <ProfileImg
            src={showImageByRole() || ""}
            onClick={() => profileRef.current.click()}
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          {findRole().inputProfile.map((el, idx) => (
            <InputBox
              key={idx}
              title={el.title}
              value={el.value}
              onChange={el.onChange}
              placeholder={el.placeholder}
            />
          ))}
        </div>
        {role === "restaurant" && (
          <>
            <button onClick={() => setIsOpen(true)}>Modal</button>
            <Modal
              style={{
                overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
                content: {
                  borderRadius: "18px",
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  height: "80vh",
                  top: "10%",
                },
              }}
              id="root"
              isOpen={isOpen}
              onRequestClose={() => {
                setIsOpen(false);
                setAddress("");
                setPosition({ lat: latitude, lng: longitude });
                setHasSelected(false);
              }}
            >
              {position && (
                <>
                  <GoogleMapInputLoader
                    position={position}
                    setPosition={setPosition}
                    address={address}
                    setAddress={setAddress}
                  />
                  <div>{address}</div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setHasSelected(true);
                    }}
                    style={{ border: "1px solid red" }}
                  >
                    SAVE LOCATION
                  </button>
                </>
              )}
            </Modal>
            {/* <ModalMapRestaurant
              title={"Select Restaurant Location"}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            > */}
            {/* <GoogleMapInputLoader
              position={position}
              setPosition={setPosition}
              address={address}
              setAddress={setAddress}
            /> */}
            {/* </ModalMapRestaurant> */}
            {/* <div onClick={() => setIsOpen(true)}>Open</div>
            <div>{address}</div> */}
            {hasSelected && (
              <button
                onClick={handleCancelLocation}
                style={{ border: "1px solid red" }}
              >
                CANCEL SELECT LOCATION
              </button>
            )}
            <div>{address}</div>
          </>
        )}
        <ButtonGreenGradiant onClick={handleUpdate} title={"Save"} />
      </Box>
    </Box>
  );
}

export default ProfilePage;
