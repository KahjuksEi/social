let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
        fullName: "Dima",
        followed: true,
        status: "I'm coder",
        location: { city: "SPB", country: "RU" },
      },
      {
        id: 2,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
        fullName: "Ash",
        followed: false,
        status: "I'm coder",
        location: { city: "Minsk", country: "BY" },
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
        fullName: "Bill",
        followed: true,
        status: "I'm PM",
        location: { city: "Omsk", country: "RU" },
      },
      {
        id: 4,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
        fullName: "Tom",
        followed: true,
        status: "I'm worker",
        location: { city: "Lida", country: "BY" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="user" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
