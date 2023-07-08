import LeftSideBar from "../components/leftsidebar";
import TopNavBar from "../components/topNavBar";
import Share from "../components/Share";
import Feed from "../components/feed";
import BackdropImage from "../components/BackdropImage";
import RightProfileBar from "../components/RightProfileBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const username = useParams().username;

  useEffect(() => {
    const fetchPosts = async () => {
      const userRes = await axios.get(`/users?username=${username}`);
      setUser(userRes.data);
      setIsLoading(true);
    };
    fetchPosts();
  }, [username]);

  return (
    <>
      <TopNavBar />
      <div className="profile">
        <LeftSideBar />
        <div className="profileRight">
          <BackdropImage user={isLoading && user} />
          <div className="profileRightBottom">
            <Feed username={username} />
            <RightProfileBar user={isLoading && user} />
          </div>
        </div>
      </div>
    </>
  );
}
