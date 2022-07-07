// import { Box } from "@mui/material";
import { useRef, useState } from "react";
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

  const profileRef = useRef(null);

  // update customer : firstName, lastName, req.imageFile: profileImage
  // update driver : firstName, lastName, driverImage
  // update restaurant : image, name

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

  console.log(role);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      console.log("res", image);
      console.log("driver", driverImage);
      console.log("cus", profileImage);

      const formData = new FormData();
      formData.append("profileImage", profileImage);
      formData.append("driverImage", driverImage);
      formData.append("image", image);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("name", name);

      const res = await axios.put(`/${role}/update`, formData);

      setSuccess(res.data.message);

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
        <ButtonGreenGradiant onClick={handleUpdate} title={"Save"} />
      </Box>
    </Box>
  );
}

export default ProfilePage;
