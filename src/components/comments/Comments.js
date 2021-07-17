import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/API";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments(value.data);
            console.log(value.data);
        })
    }, [])
    return (
        <div>
            {
                comments.map((comment) =>
                    <Comment item={comment} key={comment.id}/>
                )
            }
        </div>
    );
};

export default Comments;
