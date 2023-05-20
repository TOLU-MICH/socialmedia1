import { Avatar } from "@mui/material";
import React from "react";

export default function BackdropImage() {
  return (
    <div className="backdrop">
      <img src="./assets/post/3.jpeg" alt="" className="back-img" />
      <span className="profile-pic">
        <Avatar
          src="assets/person/7.jpeg"
          alt="Proflie Picture"
          className="pic"
        />
        <h2 className="username">Travis Bennett</h2>
        <p>Hello my friends</p>
      </span>
    </div>
  );
}
