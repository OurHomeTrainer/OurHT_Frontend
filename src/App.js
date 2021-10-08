import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import UserCreate from './component/UserCreate';
import Usercomponent from "./component/Usercomponent";

function App() {
  return (
    <div>
      <span> 반갑습니다. </span>
      <Router>
        <Route path="/" exact component={UserCreate} />
        <Route path="/users/" exact component={Usercomponent} />
      </Router>
    </div>
  );
}

export default App;
