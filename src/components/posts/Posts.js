import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/API";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( ()=> {
        getPosts().then(value => {
            setPosts([...value.data]);
            console.log(value.data);
        })
    }, [] )
    return (
        <div>
            {
                posts.map((post) => <Post key={post.id} item={post}/>)
            }
        </div>
    );
};

export default Posts;
