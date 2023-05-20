import { Stack, Avatar, Button } from "@mui/material";
import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const icons = [
  { icon: <PermMedia htmlColor="tomato" />, text: "Photo or Video" },
  { icon: <Label htmlColor="blue" />, text: "Tag" },
  { icon: <Room htmlColor="green" />, text: "Location" },
  { icon: <EmojiEmotions htmlColor="goldenrod" />, text: "Feelings" },
];

export default function Share() {
  return (
    <div className="share">
      <Stack spacing={1} direction="row" className="share-text">
        <Avatar
          src="/assets/person/1.jpeg"
          alt="Profile Picture"
          sx={{ width: 56, height: 56 }}
        />
        <textarea
          type="text"
          placeholder="What's in your mind Safak"
          className="share-input"
        />
      </Stack>
      <div className="divider"></div>
      <Stack spacing={5} direction="row" justifyContent={"center"}>
        <Stack spacing={1} direction="row">
          {icons.map((item, index) => {
            return (
              <Stack spacing={0.5} direction="row" key={index}>
                {item.icon}
                <p>{item.text}</p>
              </Stack>
            );
          })}
        </Stack>
        <Button variant="contained" color="success">
          Share
        </Button>
      </Stack>
    </div>
  );
}
