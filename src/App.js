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
import CounterTest from './components/camera/CounterTest';  // 나중에 지울것
import InitialCheckSquat from './components/camera/InitialCheckSquat';
import { UserContextProvider } from './components/camera/users';  // 전역 변수 사용위함
import SquatMiddle from './components/camera/SquatMiddle';
import Feed from './components/Feed';

function App() {
  return (
 
    <BrowserRouter>
       

      <div className="App">
        <Switch>
          <Route path="/" exact>

            <Landing />
          </Route>
          
          <UserContextProvider>
          

          <Route path="/camskel">
            <CameraSkeletonSend />
          </Route>


          <Route path="/squat-page">
            <InitialCheckSquat />
          </Route>
          
          <Route path="/result">
            <Result />
          </Route>

          <Route path="/feed/:id">
            <Feed />
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

          <Route path="/main">
            <Main />
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
