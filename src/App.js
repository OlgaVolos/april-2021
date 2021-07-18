import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/user/Users";

function App() {
  return (
<Router>
  <div>
    <div>
      <Link to={'/users'}>users page</Link>
    </div>
    <Switch>
      <Route path={'/users'} component={Users}/>
    </Switch>
  </div>
</Router>
  );
}

export default App;
