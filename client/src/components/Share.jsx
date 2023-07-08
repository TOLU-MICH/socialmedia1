import { Stack, Avatar, Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const icons = [
    { icon: <PermMedia htmlColor="tomato" />, text: "Photo or video" },
    { icon: <Label htmlColor="blue" />, text: "Tag" },
    { icon: <Room htmlColor="green" />, text: "Location" },
    { icon: <EmojiEmotions htmlColor="goldenrod" />, text: "Feelings" },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
        window.location.reload();
      } catch (error) {}
    }

    try {
      await axios.post("/posts", newPost);
    } catch (err) {}
  };

  return (
    <div className="share">
      <Stack spacing={1} direction="row" className="share-text">
        <Avatar
          src={user.profilePicture && PF + user.profilePicture}
          alt="Profile Picture"
          sx={{ width: 56, height: 56 }}
        />
        <textarea
          type="text"
          placeholder={"What's in your mind " + user.username + "?"}
          className="share-input"
          ref={desc}
        />
      </Stack>
      <div className="divider"></div>
      {file && (
        <div className="sharedImgContainer">
          <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
          <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
        </div>
      )}
      <form onSubmit={submitHandler}>
        <Stack spacing={5} direction="row" justifyContent={"center"}>
          <Stack spacing={1} direction="row">
            {icons.map((item, index) => {
              return index === 0 ? (
                <label htmlFor="file" key={index}>
                  <Stack spacing={0.5} direction="row">
                    {item.icon}
                    <p>{item.text}</p>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </Stack>
                </label>
              ) : (
                <Stack spacing={0.5} direction="row" key={index}>
                  {item.icon}
                  <p>{item.text}</p>
                </Stack>
              );
            })}
          </Stack>
          <Button type="submit" variant="contained" color="success">
            Share
          </Button>
        </Stack>
      </form>
    </div>
  );
}
