import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { useImperativeHandle } from "react";
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  let newPostText = props.newPostText;
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  return (
    <div>
      <h1>My posts ProfilePage</h1>
      <h2>new post</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
      <Post />
    </div>
  );
}

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name="newPostText" />
      <button>Add post</button>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({
  // a unique name for the form
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
