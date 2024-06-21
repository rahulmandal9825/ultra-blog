
import { Post, User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async ({
    query,
    page=1,
    limit =10
}) =>{
    try {
       connectToDb();
       console.log({query});
       const skip = (page - 1) * limit

       
      const posts = await Post.find({
        title: { $regex: query, $options: 'i' },

      })
        .limit(limit)
        .skip(skip);

console.log(posts);
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