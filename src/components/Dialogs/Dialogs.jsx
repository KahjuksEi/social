import React, { useImperativeHandle } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../components/common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

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

  let addNewMessage = (values) => {
    props.addPostToMess(values.newMessageBody);
  };
  // if (!props.isAuth) {
  //   return <Redirect to={"/login"} />;
  // }
  return (
    <div className={classes.dialogs}>
      <h2>Dialogs</h2>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>{messageElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form className={classes.dialogs__wrap} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name={"newMessageBody"}
        placeholder={"newPostText"}
      />
      <button>alert message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  // a unique name for the form
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
