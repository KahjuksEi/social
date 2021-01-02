import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friend from "./components/Friend/Friend";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navigation />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
      <p>Friends online:</p>
      <Friend state={props.state.dialogsPage} />
    </BrowserRouter>
  );
}

export default App;
