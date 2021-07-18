import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/Users";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>user page</Link>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </Router>
    );
}

export default App;
