import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ava from "../../../assets/images/ava.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.img}>
        <img src={profile.photos.large || ava} alt="photo" />
        {isOwner && <p>isOwner: {isOwner}</p>}
        {isOwner && <input type={"file"} />}
      </div>
      <img src={profile.photos.small} alt="photo" />
      <p>{profile.fullName}</p>
      {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
