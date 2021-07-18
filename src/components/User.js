import React from 'react';
import {Link} from "react-router-dom";

const User = ({item}) => {
    return (
        <div>
            {item.id}-{item.name} -
            {/*<Link to={'/users/' +item.id}>users details1</Link>*/}
            <Link to={
                {
                    pathname: '/users/' + item.id,
                    state: item
                }
            }>users details from state</Link>
        </div>
    );
}

export default User;
// {/*<Link to={'/users/' +item.id}>users details</Link>*/} //for 1
