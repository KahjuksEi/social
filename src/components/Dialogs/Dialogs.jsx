import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));
  let messageElements = state.messages.map((el) => (
    <Message message={el.message} dispatch={props.dispatch} key={el.id} />
  ));

  let newPostText = state.newPostText;
  let textareaCont = React.createRef();

  let addPostToMess = () => {
    props.addPostToMess();
  };
  let onPostChangeToMess = (e) => {
    let body = e.target.value;
    props.onPostChangeToMess(body);
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
};
export default Dialogs;
