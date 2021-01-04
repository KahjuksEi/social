import React from "react";
import Dialogs from "./Dialogs";
import {
  addPostToMessActionCreator,
  updateNewPostTextToMessActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

// созд две фии для настройки коннекта чтобы презкомп Dialogs законнектить к стору
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChangeToMess: (body) => {
      dispatch(updateNewPostTextToMessActionCreator(body));
    },
    addPostToMess: () => {
      dispatch(addPostToMessActionCreator());
    },
  };
};
// connect возвр новую конткомп
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
