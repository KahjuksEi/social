import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import classes from "./Profile.module.css";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  render() {
    if (this.props.isAuth === false) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div className={classes.content__wrap}>
        <ProfileInfo profile={this.props.profile} />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;
