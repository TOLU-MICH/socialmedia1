// import LeftSideBar from "./leftsidebar";
// import TopNavBar from "./topNavBar";
// import Share from "./Share";
import { Posts, Users } from "./dummyData";
import Feed from "./feed";

export default function App() {
  return (
    <>
      {/* <TopNavBar /> */}
      {/* <LeftSideBar /> */}
      {/* <Share /> */}
      <Feed data={Posts} Users={Users} />
    </>
  );
}
