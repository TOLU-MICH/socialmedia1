import LeftSideBar from "../leftsidebar";
import TopNavBar from "../topNavBar";
import Share from "../Share";
import { Posts, Users } from "../dummyData";
import { Stack } from "@mui/material";
import Feed from "../feed";
import RightSideBar from "../RightSideBar";

export default function Profile() {
  return (
    <>
      <TopNavBar />
      <Stack spacing={3} direction={"row"}>
        <LeftSideBar />
        <div className="content-child">
          <Share />
          <Feed data={Posts} Users={Users} />
        </div>
        <RightSideBar data={Users} />
      </Stack>
    </>
  );
}
