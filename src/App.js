import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Friend from "./components/Friend/Friend";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="App-wrapper">
        <HeaderContainer />
        <Navigation />
        {/* показываем что у урла могут быть параметры, "?" дает необяз-сть параметра */}
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/login" render={() => <Login />} />
        <p>Friends online:</p>
        {/* <Friend state={props.state.dialogsPage} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

/*export default App;*/
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
