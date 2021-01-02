import classes from "./Friend.module.css";

function Friend(props) {
  let friendElements = props.state.dialogs.map((el) => (
    <div>
      <p>{el.name}</p>
      <img
        className={classes.img}
        src="https://img2.freepng.ru/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg"
        alt="user"
      />
    </div>
  ));

  return <div className={classes.friendItem}>{friendElements}</div>;
}

export default Friend;
