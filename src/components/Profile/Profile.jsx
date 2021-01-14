import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import classes from "./Profile.module.css";

class Profile extends React.Component {
  render() {
    return (
      <div className={classes.content__wrap}>
        <ProfileInfo profile={this.props.profile} />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;
