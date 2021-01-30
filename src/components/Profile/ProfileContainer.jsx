import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../components/hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    } /*дефолтный при отсутствии*/
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <div>
        {/* прокидываем развернуто пропсы */}
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

/*HOC - вызвали с нужным параметром передав нужную целевую компоненту*/
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
/*фия для прокидывания в пропсах урла*/
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

/*краткий способ передачи экшнКреаторов*/
export default connect(mapStateToProps, {
  getUserProfile,
})(WithUrlDataContainerComponent);
