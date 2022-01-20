import "./App.css";
import Result from "./components/Result";
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sample from "./components/Sample";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Profile from "./components/users/Profile";
import Landing from "./components/users/Landing";
import InitialCheckSquat from "./components/camera/InitialCheckSquat";
import { UserContextProvider } from "./components/camera/users"; 
import SquatMiddle from "./components/camera/SquatMiddle";
import Feed from "./components/Feed";
import CalendarByJames from "./components/CalendarByJames";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>

          <UserContextProvider>
            <Route path="/squat-page">
              <InitialCheckSquat />
            </Route>

            <Route exact path="/result/feed/:id" component={Result}></Route>

            <Switch>
              <Route
                path="/result/feed/:id/:count_number"
                component={Feed}
              ></Route>
            </Switch>

            <Route path="/home">
              <Landing />
            </Route>

            <Route path="/info">
              <Profile />
            </Route>

            <Route path="/sample">
              <Sample />
            </Route>

            <Route path="/login-page">
              <Login />
            </Route>

            <Route path="/register-page">
              <Register />
            </Route>

            <Route path="/profile-page">
              <Profile />
            </Route>

            <Route path="/middle">
              <SquatMiddle />
            </Route>

            <Route path="/calendar-page">
              <CalendarByJames />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/userinfo">
              <UserInfo />
            </Route>
          </UserContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
