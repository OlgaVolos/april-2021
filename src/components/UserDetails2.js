import React, {useEffect, useState} from 'react';

const UserDetails2 = (props) => {
    let {location: {state}} = props;

    console.log(props.location.state);
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser({...state})
    }, [state])
    return (
        <div>
            {user.username} !!2!!
        </div>
    );
};

export default UserDetails2;
