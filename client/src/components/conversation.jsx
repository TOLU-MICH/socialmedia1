import axios from "axios";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        src={user && user.profilePicture && PF + user.profilePicture}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user && user.username}</span>
    </div>
  );
}
