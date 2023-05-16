import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Friends(props) {
  return (
    <>
      {props.data.map((user) => (
        <>
          <ListItemButton
            key={user.id}
            sx={{ py: 0, minHeight: 50, margin: ".6rem" }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: "40px",
                height: "40px",
                marginRight:".5rem"
              }}
            >
              {
                <Avatar
                  src={user.profilePicture}
                  alt=""
                  sx={{ width: props.id, height: props.id }}
                />
              }
            </ListItemIcon>
            <ListItemText
              primary={user.username}
              primaryTypographyProps={{ fontSize: 16, fontWeight: "bolder",color:"inherit" }}
            />
          </ListItemButton>
        </>
      ))}
    </>
  );
}
