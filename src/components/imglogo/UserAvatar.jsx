import { Avatar } from "@mui/joy";
import React from "react";

function UserAvatar({ alt, src }) {
  return (
    <>
      <Avatar alt={alt} src={src || ""} />
    </>
  );
}

export default UserAvatar;
