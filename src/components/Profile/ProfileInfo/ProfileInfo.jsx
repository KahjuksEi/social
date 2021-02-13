import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.img}>
        {/* <img src={props.profile.photos.large} alt="photo" /> */}
      </div>
      <img src={props.profile.photos.small} alt="photo" />
      <p>{props.profile.fullName}</p>
      <ProfileStatus status={"hello my friend"} />
    </div>
  );
};

export default ProfileInfo;
