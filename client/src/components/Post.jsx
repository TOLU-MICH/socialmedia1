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

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

let style = { padding: "0" };
const images = [
  <img src={PF + "like.png"} alt="" className="post--button-image" />,
  <img src={PF + "heart.png"} alt="" className="post--button-image" />,
];

export default function Post(props) {
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
          <Avatar
            src={PF + props.user.profilePicture}
            alt=""
            sx={{ width: 56, height: 56 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<strong>{props.user.username}</strong>}
        subheader={props.post.date}
        sx={style}
      />
      <CardContent sx={{ padding: "1rem 0" }}>{props.post.desc}</CardContent>

      <CardMedia
        component="img"
        height="400"
        image={PF + props.post.photo}
        alt=""
      />

      <CardActions sx={{ padding: "8px 0", position: "relative" }}>
        {images.map((image, index) => {
          return (
            <IconButton
              sx={style}
              onClick={() =>
                props.dispatch({
                  type: ACTION.ADD_LIKE,
                  payload: { id: props.post.id },
                })
              }
              key={index}
            >
              {image}
            </IconButton>
          );
        })}

        <p>{props.post.like} people like it</p>
        <p>{props.post.comment} comments</p>
      </CardActions>
    </Card>
  );
}
