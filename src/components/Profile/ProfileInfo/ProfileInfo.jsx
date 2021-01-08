import classes from "./ProfileInfo.module.css";
import React from "react";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.img}>
          <img
            src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <p>ava+description</p>
      </div>
    );
  }
}

export default ProfileInfo;
