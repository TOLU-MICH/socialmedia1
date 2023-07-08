import { Avatar } from "@mui/material";
import React from "react";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function BackdropImage({ user }) {
  return (
    <div className="profileRightTop">
      <div className="profileCover">
        <img
          className="profileCoverImg"
          src={
            user.coverPicture ? PF + user.coverPicture : PF + "/no-cover.webp"
          }
          alt=""
        />
        <Avatar
          src={user.profilePicture && PF + user.profilePicture}
          alt=""
          sx={{ width: 150, height: 150 }}
          className="profileUserImg"
        />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">{user.username}</h4>
        <span className="profileInfoDesc">{user.desc}</span>
      </div>
    </div>
  );
}
