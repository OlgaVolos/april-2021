import React from 'react';

function User({item}) {
    return (
        <div>
            {item.id}
            {item.name}
            {item.email}
            <hr/>
        </div>
    );
}

export default User;
