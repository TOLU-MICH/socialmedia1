import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { ACTION } from "./feed";
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


let style = { padding: "0" };
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const images = [
  <img src={`${PF}like.png`} alt="" className="post--button-image" />,
  <img src={PF +"heart.png"} alt="" className="post--button-image" />,
];

export default function Post({ post }) {
  const [user, setUser] = useState([]);
  const [like, setLike] = useState(post.likes.length);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const {user:currentUser}= useContext(AuthContext)
  
  const userId = post.userId;

useEffect(()=>{
  setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id,post.likes])

  useEffect(() => {
    const fetchPosts = async () => {
      const userRes = await axios.get(`/users?userId=${userId}`);
      setUser(userRes.data);
      setIsLoading(true);
    };
    fetchPosts();
  }, [userId]);

const likeHandler = () => {
  try {
    axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
  } catch (err) {}
  setLike(isLiked ? like - 1 : like + 1);
  setIsLiked(!isLiked);
};

  return (
    <Card
      sx={{
        maxWidth: "36rem",
        borderRadius: "1rem",
        padding: ".6rem",
      }}
      className="card"
    >
      <CardHeader
        avatar={
          <Link to={`profile/${user.username}`}>
            <Avatar
              src={isLoading ? PF + user.profilePicture : ""}
              alt=""
              sx={{ width: 56, height: 56 }}
            />
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<strong>{isLoading && user.username}</strong>}
        subheader={format(post.createdAt)}
        sx={style}
      />
      <CardContent sx={{ padding: "1rem 0" }}>{post.desc}</CardContent>

      {post.img && (
        <CardMedia component="img" height="400" image={PF + post.img} alt="" />
      )}

      <CardActions sx={{ padding: "8px 0", position: "relative" }}>
        {images.map((image, index) => {
          return (
            <IconButton
              sx={style}
              onClick={likeHandler}
              key={index}
            >
              {image}
            </IconButton>
          );
        })}

        <p>{like} people like it</p>
        <p>{post.comment} comments</p>
      </CardActions>
    </Card>
  );
}
