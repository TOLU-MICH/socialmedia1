const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function RightProfileBar({ data }) {
  return (
    <div className="right-side--profile__bar">
      <section>
        <h3>User Information</h3>
        <span className="profile">
          City: <p className="city">New York</p>
        </span>
        <span className="profile">
          From:<p className="from">Madrid</p>
        </span>
        <span className="profile">
          Relationship:<p className="relationship">Single</p>
        </span>
        <h3>User Friends</h3>
      </section>
      <section className="profile-friends">
        {data.map((user) => {
          return (
            <div className="profile-friend">
              <img
                src={PF + user.profilePicture}
                alt=""
                className="profile-friend--img"
              />
              <p>{user.username}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
