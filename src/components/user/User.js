import React, {useEffect, useState} from 'react';
import {Link, Route} from "react-router-dom";
import Posts from "../post/Posts";
import {getUserPosts} from "../../services/API";

const User = ({item}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getUserPosts(item.id).then(value => {
            setPosts([...value.data]);
            console.log(value.data);
        })

    }, [])
    return (
        <div>
            <h1>{item.name}</h1>
            <Link to={'/users/' + item.id}>user's posts</Link>

            <Route path={'/users/' + item.id} render={() =>
                <Posts postList={posts}/>

            }/>

        </div>
    );
};

export default User;
//щоб відобразити пости саме під юзерами, ми маємо відобразити їх в цій компоненті
// тому ми вводимо Роут саме тут
// <Route path={'/users/' + item.id} підставляє значення, яке приходить
// конкретно під даного юзера
// <Route path={'/users/:id'} динамічно підставить ід кожного і відкриє все разом
