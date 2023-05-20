export default function RightProfileBar({ data }) {
  return (
    <div className="right-side--profile__bar">
      <section>
          <h3>User Information</h3>
          <span className="content-container">
            City: <p className="city">New York</p>
          </span>
          <span className="content-container">
            From:<p className="from">Madrid</p>
          </span>
          <span className="content-container">
            Relationship:<p className="relationship">Single</p>
          </span>
          <h3>User Friends</h3>
      </section>
      <section className="profile-friends">
        {data.map((user) => {
          return (
            <div className="profile-friend">
              <img
                src={user.profilePicture}
                alt="profile picture"
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
