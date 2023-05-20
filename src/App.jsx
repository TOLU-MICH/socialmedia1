import LeftSideBar from "./leftsidebar";
import TopNavBar from "./topNavBar";
import Share from "./Share";
import RightSideBar from "./RightSideBar";
import { Posts, Users } from "./dummyData";
import { Stack } from "@mui/material";
import Feed from "./feed";
import BackdropImage from "./BackdropImage";

export default function App() {
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
            <RightSideBar />
          </Stack>
        </Stack>
      </main>
    </>
  );
}
