import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  let newPostText = props.newPostText;
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h1>My posts</h1>
      <h2>new post</h2>
      <textarea
        cols="30"
        rows="1"
        ref={newPostElement}
        value={newPostText}
        onChange={onPostChange}
      />
      <button onClick={onAddPost}>Add post</button>
      {postsElements}
      <Post />
    </div>
  );
}

export default MyPosts;
