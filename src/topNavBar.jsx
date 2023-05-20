import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Button, Stack, Badge, Avatar } from "@mui/material";

const icons = [
  <Person color="action" />,
  <Chat color="action" />,
  <Notifications color="action" />,
];

const style = { color: "white", fontWeight: "bold" };
export default function TopNavBar() {
  return (
    <nav className="nav">
      <h1>Lamasocial</h1>
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

      <Avatar
        src="/assets/person/1.jpeg"
        alt=""
        sx={{ width: 30, height: 30 }}
      />
    </nav>
  );
}
