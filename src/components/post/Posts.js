import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../../services/API";
import Post from "./Post";

const Posts = ({postList}) => {

    return (
        <div>
            {
                postList.map(value=> <Post key={value.id} post={value} />)
            }
        </div>
    );
}

export default Posts;
