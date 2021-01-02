import { addPost } from "../../../../redux/store";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <img
        className={classes.img}
        src="https://img2.freepng.ru/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg"
        alt="user"
      />
      <div className="">Post 1</div>
      <p>{props.message}</p>
      <span>like {props.like}</span>
    </div>
  );
}

export default Post;
