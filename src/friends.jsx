import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import OnlineFriends from "./OnlineFriends";

export default function Friends(props) {
  let online = props.online || false;

  return (
    <>
      {props.data.map((user) => (
        <ListItemButton
          key={user.id}
          sx={{ py: 0, minHeight: 50, margin: ".6rem" }}
          className="friend"
        >
          <ListItemIcon
            sx={{
              color: "inherit",
              minWidth: "40px",
              height: "40px",
              marginRight: ".5rem",
            }}
          >
            {/* if the friends are not online it will run these code */}
            {!online && (
              <Avatar
                src={user.profilePicture}
                alt=""
                sx={{ width: props.size, height: props.size }}
              />
            )}
            {/* if the friends are online it will run these code */}
            {online && <OnlineFriends image={user.profilePicture} />}
          </ListItemIcon>
          <ListItemText
            primary={user.username}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: "bolder",
              color: "inherit",
            }}
          />
        </ListItemButton>
      ))}
    </>
  );
}
