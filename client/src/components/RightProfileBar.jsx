import { Avatar, Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

const styles = {
  width: "6.7rem",
  height: "6.7rem",
  borderRadius: "1rem",
};

export default function RightProfileBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get("/users/friends/" + user._id);
        setFriends(friendsList.data);
        console.log(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async (e) => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  return (
    <>
      <div className="right-side--profile__bar">
        {user.username !== currentUser.username && (
          <Button variant="contained" onClick={handleClick}>
            {followed ? "unfollow" : "follow"}
            {followed ? <Remove /> : <Add />}
          </Button>
        )}
        <section>
          <h3>User Information</h3>
          <span className="profile">
            City: <p className="city">{user.city}</p>
          </span>
          <span className="profile">
            From:<p className="from">{user.from}</p>
          </span>
          <span className="profile">
            Relationship:
            <p className="relationship">
              {user.relationship == 1
                ? "single"
                : user.relationship == 1
                ? "married"
                : "-"}
            </p>
          </span>
          <h3>User Friends</h3>
        </section>
        <section className="profile-friends">
          {friends.map((friend) => {
            console.log(friend);
            return (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className="profile-friend">
                  <Avatar
                    src={friend.profilePicture && PF + friend.profilePicture}
                    alt=""
                    sx={styles}
                  />
                  <p class="font-normal">{friend.username}</p>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </>
  );
}
