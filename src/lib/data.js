
import { Post, User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async () =>{
    try {
        connectToDb();
    const posts = await Post.find();
    return posts;
    } catch (error) {
        console.log(error);
        return  { error: "Failed to fetch posts!" }
}
}

export const getpost = async (slug) =>{
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        return  { error: "Failed to fetch posts!" }
    }
}
export const getpostsId = async (UserId) =>{
    try {
        connectToDb();
        const post = await Post.find({UserId});
        return post;
    } catch (error) {
        console.log(error);
        return  { error: "Failed to fetch posts!" }
    }
}


export const getUsers = async() => {
    try {
        connectToDb();
        const user = await User.find();
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
        return  { error: "Failed to fetch User!" }
    }
}

export const getuser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        return  { error: "Failed to fetch User!" }
    }
}