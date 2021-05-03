import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { useImperativeHandle } from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  /*для однократных отрисовок, но чисто для классов, либо можно класс extends PureComponent 
  и проверка по дефолту будет, а для функкомп юзаем memo*/
  // shouldComponent(nextProps, nextState){
  //   return nextProps != nextProps || nextState !=nextState
  // }

  let postsElements = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div>
      <h1>My posts ProfilePage</h1>
      <h2>new post</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
      <Post />
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        /* рисуем компонент без кавычек*/
        placeholder={"Post message"}
        component={Textarea}
        name="newPostText"
        validate={[required, maxLength10]}
      />
      <button>Add post</button>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({
  // a unique name for the form
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
