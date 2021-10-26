import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import UserCreate from './component/UserCreate';
import Usercomponent from "./component/Usercomponent";
import Camtest from './component/Camtest';
import login from './developtest/login';
import Cameratest from './component/Cameratest';

function App() {
  return (
    <div>
      <span> 반갑습니다. </span>
      <Router>
        <Route path="/" exact component={UserCreate} />
        <Route path="/users/" exact component={Usercomponent} />
        <Route path="/camtest/" exact component={Camtest} />
        <Route path="/login/" exact component={login} />
        <Route path="/cameratest/" exact component={Cameratest} />
      </Router>
    </div>
  );
}

export default App;
