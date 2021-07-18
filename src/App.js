import './App.css';
import Users from "./components/Users";
import {useEffect, useState} from "react";
import {getUsers} from "./services/API";

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data])
            console.log(value.data);
        })
    }, []);



    const fromApp  = (id) => {
        const choosenUserOnclick = users.find(value => value.id === id);
        setUser({...choosenUserOnclick})

    };
  return (
    <div>
        <h3>{user.username}</h3>
      <Users userList={users} fromApp={fromApp}/>

    </div>
  );
}

export default App;
