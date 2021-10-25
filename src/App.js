import React from 'react';


import Navigation from './components/Nav';
import Main from './components/Main';
import Result from './components/Result';
import Info from './components/Info';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
            <Info />
          </Route>
          {/* nicdee */}

        </Switch>






      </div>
    </BrowserRouter>








  );
}

export default App;
