import axios from "axios";
import ava from "../../assets/images/ava.png";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : ava}
                  alt="user"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;