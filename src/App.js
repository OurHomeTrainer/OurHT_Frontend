import React from "react";

import "./App.css";
import Result from "./components/Result";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sample from "./components/Sample";
import Login from "./components/examples/Login";
import Register from "components/examples/Register";
import Profile from "./components/examples/Profile";
import Landing from "./components/examples/Landing";
import InitialCheckSquat from "./components/camera/InitialCheckSquat";
import { UserContextProvider } from "./components/camera/users"; // 전역 변수 사용위함
import SquatMiddle from "./components/camera/SquatMiddle";
import Feed from "./components/Feed";

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
          </UserContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
