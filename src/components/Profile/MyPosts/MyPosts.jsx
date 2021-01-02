import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

function MyPosts(props) {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  let newPostText = props.newPostText;
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <h1>My posts</h1>
      <h2>new post</h2>
      <textarea
        cols="30"
        rows="1"
        ref={newPostElement}
        placeholder={newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost}>Add post</button>
      {postsElements}
      <Post />
    </div>
  );
}

export default MyPosts;
