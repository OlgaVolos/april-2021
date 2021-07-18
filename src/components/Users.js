import React from 'react';
import User from "./User";

const Users = ({userList, fromApp}) => {


    return (
        <div>
            {
                userList.map(user => <User key={user.id} item={user} fromApp={fromApp}/>)
            }

        </div>
    );
}

export default Users;
