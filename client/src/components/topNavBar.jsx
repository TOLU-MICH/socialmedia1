import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Button, Stack, Badge, Avatar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const icons = [
  <Person color="action" />,
  <Chat color="action" />,
  <Notifications color="action" />,
];

const style = { color: "white", fontWeight: "bold" };
export default function TopNavBar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <h1>Lamasocial</h1>
      </Link>
      <div className="input-group">
        <Search />
        <input type="text" placeholder="Search for friends, post or video" />
      </div>
      <Stack spacing={-1} direction="row">
        <Button variant="text" sx={style}>
          Homepage
        </Button>
        <Button variant="text" sx={style}>
          Timeline
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" className="icon-bar">
        {icons.map((icon, index) => {
          return (
            <Badge badgeContent={4} color="warning" key={index}>
              {icon}
            </Badge>
          );
        })}
      </Stack>
      <Link to={`/profile/${user.username}`}>
        <Avatar
          src={user.profilePicture && PF + user.profilePicture}
          alt=""
          sx={{ width: 30, height: 30 }}
        />
      </Link>
    </nav>
  );
}
