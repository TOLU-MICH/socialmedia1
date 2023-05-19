import Post from "./Post";
import { Stack } from "@mui/material";
import { useReducer } from "react";

export const ACTION = {
  ADD_LIKE: "add-like",
};

function reducer(posts, action) {
  switch (action.type) {
    case ACTION.ADD_LIKE:
      return posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, like: post.like + 1 };
        }
        return post;
      });

    default:
      return posts;
  }
}
export default function Feed({ data, Users }) {
  const [posts, dispatch] = useReducer(reducer, data);

  return (
    <Stack spacing={3}>
      {posts.map((post, index) => {
        return (
          <Post
            post={post}
            user={Users[index]}
            key={index}
            dispatch={dispatch}
          />
        );
      })}
    </Stack>
  );
}
