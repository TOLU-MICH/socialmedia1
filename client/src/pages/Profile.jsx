import LeftSideBar from "../components/leftsidebar";
import TopNavBar from "../components/topNavBar";
import Share from "../components/Share";
import { Posts, Users } from "../dummyData";
import Feed from "../components/feed";
import BackdropImage from "../components/BackdropImage";
import RightProfileBar from "../components/RightProfileBar";

export default function Profile() {
  return (
    <>
      <TopNavBar />
      <div className="profile">
        <LeftSideBar />
        <div className="profileRight">
          <BackdropImage />;
          <div className="profileRightBottom">
            <div>
              <Share />
              <Feed data={Posts} Users={Users} />;
            </div>
            <RightProfileBar data={Users} />
          </div>
        </div>
      </div>
    </>
  );
}
