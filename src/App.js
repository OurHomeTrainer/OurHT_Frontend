import React from 'react';


import Navigation from './components/Nav';
import Main from './components/Main';
import Result from './components/Result';
import Info from './components/Info';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sample from './components/Sample';
import Login from './components/examples/Login';
import Profile from './components/examples/Profile';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>THISIS MAIN</h1>
            <Main />
          </Route>


          <Route path="/result">
            <h1>THIS iS result page</h1>
            <Result />
          </Route>

          <Route path="/info">
            <h1>THIS iS infofofofo page</h1>
            <Profile />
          </Route>

          <Route path="/sample">
            <h1>Sample page 테스트</h1>
            <Sample />
          </Route>

          <Route path="/login-page">
            <h1>로그인 페이지 테스트</h1>
            <Login />
          </Route>

          <Route path="/profile-page">
            <h1>로그인 페이지 테스트</h1>
            <Profile />
          </Route>


          {/* nicdee */}

        </Switch>






      </div>
    </BrowserRouter>








  );
}

export default App;
