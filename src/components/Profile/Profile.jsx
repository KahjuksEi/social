import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="content__wrap">
        <ProfileInfo />
        <MyPostsContainer store={this.props.store} />
      </div>
    );
  }
}

export default Profile;
