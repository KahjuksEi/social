import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addPostToMessActionCreator,
  updateNewPostTextToMessActionCreator,
} from "../../redux/dialogs-reducer";

function Dialogs(props) {
  let messageElements = props.state.messages.map((el) => (
    <Message message={el.message} dispatch={props.dispatch} />
  ));
  let dialogsElements = props.state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let newPostText = props.state.newPostText;
  let textareaCont = React.createRef();

  let addPostToMess = () => {
    props.dispatch(addPostToMessActionCreator());
  };
  let onPostChangeToMess = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextToMessActionCreator(text));
  };
  return (
    <div className={classes.dialogs}>
      <h2>Dialogs</h2>
      <div className={classes.dialogs__wrap}>
        <div className={classes.dialogs__items}>{dialogsElements}</div>
        <div className={classes.dialogs__messages}>{messageElements}</div>
        <textarea
          ref={textareaCont}
          placeholder={newPostText}
          onChange={onPostChangeToMess}
        />
        <button onClick={addPostToMess}>alert message</button>
      </div>
    </div>
  );
}
export default Dialogs;
