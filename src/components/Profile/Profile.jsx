import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import classes from "./Profile.module.css";
import { Redirect } from "react-router-dom";
/*just comment*/
const Profile = (props) => {
  return (
    <div className={classes.content__wrap}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
