import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/users'}>users</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <br/>
                <Link to={'/comments'}>comments</Link>
                <br/>

                <Switch>
                    <Route path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'}>
                        <Comments/>
                    </Route>
                    <Route path={'/'} render={()=><div>Home component</div>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
