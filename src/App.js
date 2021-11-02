import React from 'react';


import Navigation from './components/Nav';
import Main from './components/Main';
import Result from './components/Result';
import Info from './components/Info';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sample from './components/Sample';
import Login from './components/examples/Login';
import Profile from './components/examples/Profile';
import DemoNavbar from './components/Navbars/DemoNavbar';
import Landing from './components/examples/Landing';
import CameraSkeletonSend from './components/camera/CameraSkeletonSend';
import CameraSendImage from './components/camera/CameraSendImage'


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
          <Route path="/" exact>

            <Landing />
          </Route>

          <Route path="/camskel">
            <CameraSkeletonSend />
          </Route>
          <Route path="/camsendimg">
            <CameraSendImage />
          </Route>


          <Route path="/result">

            <Result />
          </Route>

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

          <Route path="/profile-page">

            <Profile />
          </Route>


          {/* nicdee */}

        </Switch>






      </div>
    </BrowserRouter>








  );
}

export default App;
