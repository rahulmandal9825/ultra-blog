
import { Post, User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async () =>{
    try {
        connectToDb();
    const posts = await Post.find();
    return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }
}

export const getpost = async (slug) =>{
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!");
    }
}

export const getUsers = async() => {
    try {
        connectToDb();
        const user = await User.find();
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Users!");
    }
}

export const getuser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch User!");
    }
}