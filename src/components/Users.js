import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/API";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails2 from "./UserDetails2";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    return (
        <div>
            {users.map(value => <User item={value} key={value.id}/>)}
            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            <Route path={'/users/:id'} component={UserDetails2}/>
        </div>
    );
};

export default Users;
