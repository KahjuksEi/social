import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Friend from "./components/Friend/Friend";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";

function App(props) {
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

export default App;
