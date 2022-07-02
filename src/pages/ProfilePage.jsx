// import { Box } from "@mui/material";
import { useRef, useState } from "react";
import ProfileImg from "../components/imglogo/ProfileImg";
import InputBox from "../components/input/InputBox";

function ProfilePage({}) {
  const [profileImg, setProfileImge] = useState("");

  const profileRef = useRef(null);

  const handleCancelChange = () => {
    setProfileImge("");
  };

  const handleSaveProfile = () => {};

  return (
    <div>
      <div className="flex justify-between p-3">
        <div onClick={handleCancelChange}>Cancel</div>
        <div>Edit Profile</div>
        <div onClick={handleSaveProfile}>Save</div>
      </div>
      <div className="my-8">
        <input
          className="hidden"
          onChange={(e) => setProfileImge(e.target.files[0])}
          type="file"
          ref={profileRef}
        />
        <ProfileImg
          src={profileImg ? URL.createObjectURL(profileImg) : ""}
          onClick={() => profileRef.current.click()}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <InputBox title="Hello" />
        <InputBox title="Hello" />
        <InputBox title="Hello" />
        <InputBox title="Hello" />
        <InputBox title="Hello" />
      </div>
    </div>
  );
}

export default ProfilePage;
