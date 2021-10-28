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
import Cameratest from './components/camera/Cameratest';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>THISIS MAIN</h1>
            <Cameratest />
          </Route>


          <Route path="/result">
            <h1>THIS iS result page</h1>
            <Result />
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
