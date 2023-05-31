import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import React from "react";
import Friends from "./friends";
import { Users } from "./dummyData";

export default function RightSideBar() {
  return (
    <div className="right-side--bar">
      <Card sx={{ boxShadow: "none" }}>
        <CardHeader
          avatar={
            <IconButton>
              <img src="assets/gift.png" alt="" className="ads-image" />
            </IconButton>
          }
          title={
            <p>
              <strong>Pola Foster</strong> and <strong>3 other friend</strong>{" "}
              have a birthday today
            </p>
          }
          sx={{ padding: 0 }}
        />

        <CardMedia component="img" height="266" image="assets/ad.png" alt="" />
      </Card>
      <Friends data={Users} online={true} />
    </div>
  );
}
