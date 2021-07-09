import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Students from "./components/Students";
import "bootstrap/dist/css/bootstrap.min.css";
import "./student.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  let { logined } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <div className="col-3 sidebar">
            <NavLink
              to="/students/math/"
              className="btn btn-nav"
              activeClassName="active"
            >
              Math
            </NavLink>
            <NavLink
              to="/students/chemistry/"
              className="btn btn-nav"
              activeClassName="active"
            >
              Chemistry
            </NavLink>
            <NavLink
              to="/students/physics/"
              className="btn btn-nav"
              activeClassName="active"
            >
              Physics
            </NavLink>
            <NavLink
              to="/students/biology/"
              className="btn btn-nav"
              activeClassName="active"
            >
              Biology
            </NavLink>
            <Auth logined={logined} />
          </div>
          <div className="col-9 content">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/students/:lesson"
                exact
                component={Students}
              ></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
