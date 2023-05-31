import LeftSideBar from "../leftsidebar";
import TopNavBar from "../topNavBar";
import Share from "../Share";
import { Posts, Users } from "../dummyData";
import Feed from "../feed";
import BackdropImage from "../BackdropImage";
import RightProfileBar from "../RightProfileBar";

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
