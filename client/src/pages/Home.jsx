import LeftSideBar from "../components/leftsidebar";
import TopNavBar from "../components/topNavBar";
import Share from "../components/Share";
import { Posts, Users } from "../dummyData";
import { Stack } from "@mui/material";
import Feed from "../components/feed";
import RightSideBar from "../components/RightSideBar";

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
