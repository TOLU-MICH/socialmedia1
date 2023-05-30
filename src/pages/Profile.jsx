import LeftSideBar from "./leftsidebar";
import TopNavBar from "./topNavBar";
import Share from "./Share";
import { Posts, Users } from "./dummyData";
import { Stack } from "@mui/material";
import Feed from "./feed";
import BackdropImage from "./BackdropImage";
import RightProfileBar from "./RightProfileBar";
export default function Profile() {
  return (
    <>
      <TopNavBar />
      <main className="content-container">
        <LeftSideBar />
        <Stack spacing={3}>
          <BackdropImage />
          <Stack direction="row">
            <div className="content-child">
              <Share />
              <Feed data={Posts} Users={Users} />
            </div>
            <RightProfileBar data={Users} />
          </Stack>
        </Stack>
      </main>
    </>
  );
}
