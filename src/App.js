import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friend from "./components/Friend/Friend";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navigation />
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
      </div>
      <p>Friends online:</p>
      {/* <Friend state={props.state.dialogsPage} /> */}
    </BrowserRouter>
  );
}

export default App;
