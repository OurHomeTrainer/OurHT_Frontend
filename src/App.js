import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import UserCreate from './component/UserCreate';
import Usercomponent from "./component/Usercomponent";
import Camtest from './component/Camtest';
import login from './developtest/login';

function App() {
  return (
    <div>
      <span> 반갑습니다. </span>
      <Router>
        <Route path="/" exact component={UserCreate} />
        <Route path="/users/" exact component={Usercomponent} />
        <Route path="/camtest/" exact component={Camtest} />
        <Route path="/login/" exact component={login} />
      </Router>
    </div>
  );
}

export default App;
