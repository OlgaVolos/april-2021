import React, {useState} from 'react';
import {getPostsOfUser} from "../services/API";
import Posts from "./Posts";

const User = ({item, fromApp}) => {
    const [posts, setPosts] = useState([]);
   const getPosts  = () => {
       getPostsOfUser(item.id).then(value => {
           setPosts([...value.data]);
           console.log(value.data);
       })
   };

    return (
        <div>
            {item.id} - {item.name}
            <button
                onClick={()=>{
                fromApp(item.id);
                getPosts()

            }
            }>Show posts and user's name</button>
            <div><Posts postsList={posts} /></div>
        </div>
    );
};

export default User;
