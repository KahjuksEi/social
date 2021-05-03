import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
      {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
