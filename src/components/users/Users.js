import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/API";
import User from "./User";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
                setUsers([...value.data])
                console.log(value.data);
            }
        )
    }, [])

    return (
        <div>
            {users.map((user) => <User item={user} key={user.id}/>)}
        </div>
    );
};

export default Users;
