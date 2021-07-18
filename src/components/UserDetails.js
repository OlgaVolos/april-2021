import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getUser} from "../services/API";

const UserDetails = (props) => {
    // const {match:{params:{id}}} = props;
    // console.log(props);
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}))
    }, [id])
    return (
        <div>
            {user.id} - {user.username} - {user.email}

        </div>
    );
};

export default UserDetails;
//  useEffect(()=> {
//         getUser(id).then(value => console.log(value.data))
//     }, [id]) у випадку зміни параметра в залежностях, перерендериться
