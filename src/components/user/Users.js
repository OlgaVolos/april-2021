import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/API";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} item={user}/>)}
        </div>
    );
}

export default Users;
