import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./views/home/home";
import fnMobx from "./views/fnMobx/fnMobx";
import classMobx from "./views/classMobx/classMobx";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/fnMobx">fnMobx</Link>
        </li>
        <li>
          <Link to="/classMobx">classMobx</Link>
        </li>
      </ul>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/fnMobx" component={fnMobx} />
        <Route exact path="/classMobx" component={classMobx} />
      </Switch>
    </Router>
  );
}

export default App;
