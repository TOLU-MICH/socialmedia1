import Post from "./Post";
import { Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { useReducer, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Share from "./Share";

export const ACTION = {
  ADD_LIKE: "add-like",
};

function reducer(feed, action) {
  switch (action.type) {
    case ACTION.ADD_LIKE:
      return feed.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, like: post.like + 1 };
        }
        return post;
      });

    default:
      return feed;
  }
}

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [feed, dispatch] = useReducer(reducer);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      setIsLoading(true);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <>
      <Stack
        spacing={3}
        sx={{ marginTop: username && username != user.username && "5rem" }}
      >
        {(!username || username === user.username) && <Share />}
        {isLoading &&
          posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
      </Stack>
    </>
  );
}
