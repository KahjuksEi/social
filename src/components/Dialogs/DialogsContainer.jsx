import React from "react";
import Dialogs from "./Dialogs";
import {
  addPostToMessActionCreator,
  updateNewPostTextToMessActionCreator,
} from "../../redux/dialogs-reducer";

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  let addPostToMess = () => {
    props.store.dispatch(addPostToMessActionCreator());
  };
  let onPostChangeToMess = (body) => {
    props.store.dispatch(updateNewPostTextToMessActionCreator(body));
  };
  return (
    <Dialogs
      onPostChangeToMess={onPostChangeToMess}
      addPostToMess={addPostToMess}
      dialogsPage={state}
    />
  );
}
export default DialogsContainer;
