import React from 'react';
import Post from "./Post";

const Posts = ({postsList}) => {
    return (
        <div>
            {
                postsList.map(value=> <Post post={value} key={value.id}/>)
            }

        </div>
    );
}

export default Posts;
