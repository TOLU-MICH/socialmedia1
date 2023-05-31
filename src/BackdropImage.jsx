import React from "react";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function BackdropImage() {
  return (
    <div className="profileRightTop">
      <div className="profileCover">
        <img className="profileCoverImg" src={PF + "post/3.jpeg"} alt="" />
        <img src={PF + "person/7.jpeg"} alt="" className="profileUserImg" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Safak Kocaoglu</h4>
        <span className="profileInfoDesc">Hello my friends!</span>
      </div>
    </div>
  );
}
