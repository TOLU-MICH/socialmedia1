import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { ListItemButton, ListItemText, ListItemIcon,Button,Divider } from "@mui/material";

const data = [
  { icon: <RssFeed />, label: "Feed" },
  { icon: <Chat />, label: "Chat" },
  { icon: <PlayCircleFilledOutlined />, label: "Videos" },
  { icon: <Group />, label: "Groops" },
  { icon: <Bookmark />, label: "Bookmark" },
  { icon: <HelpOutline />, label: "Questions" },
  { icon: <WorkOutline />, label: "Jobs" },
  { icon: <Event />, label: "Event" },
  { icon: <School />, label: "Courses" },
];

function Nav() {
  return (
    <>
      {data.map((item) => (
        <ListItemButton key={item.label} sx={{ py: 0, minHeight: 37 }}>
          <ListItemIcon sx={{ color: "inherit", minWidth: "40px" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{ fontSize: 13, fontWeight: "bolder" }}
          />
        </ListItemButton>
      ))}
      <Button variant="contained" className="btn-long">
        Show more
      </Button>
        <div className="divider"></div>
    </>
  );
}

export default Nav;
