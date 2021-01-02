import classes from "./Message.module.css";

function Message(props) {
  return (
    <div className="">
      <div className={classes.message}>{props.message}</div>
    </div>
  );
}
export default Message;
