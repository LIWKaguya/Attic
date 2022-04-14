import PostMessage from "../models/postMessage.js";

export const getPosts = async (_, res) => {
    try {
        const postMessage = await PostMessage.find({});
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createPosts = async (req, res) => {
    const { body } = req;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(404).json({
            message: error.message
        })
    }
    res.send('Suscessfully posted');
}