import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <>
            <h1>List of posts</h1>
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default Posts;