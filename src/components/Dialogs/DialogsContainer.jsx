import React from "react";
import Dialogs from "./Dialogs";
import { addPostToMessActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../components/hoc/withAuthRedirect";
import { compose } from "redux";

// созд две фии для настройки коннекта чтобы презкомп Dialogs законнектить к стору
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPostToMess: (newMessageBody) => {
      dispatch(addPostToMessActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) /*убирая этот редирект можем снимать защиту*/
  /*withAuthRedirect*/
)(Dialogs);
