"use server"

import { Post, User } from "./models";
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs";

export const addPost = async(formData) =>{

    const {title, desc , slug , userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("saved to db");
    
    } catch (error) {
        console.log(error);
        throw new Error("some thing went wrong");
    }
}

export const deletePost = async(formData) =>{
    const {id} = Object.fromEntries(formData);
    try {
        connectToDb();
        await Post.findByIdAndDelete({id});
        console.log("delete form db");

    } catch (error) {
        console.log(error);
        throw new Error("something went worng");
    }
} 


export const handleGithublogin = async ()=>{
    "use server";
    await signIn("github");
  };


export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const signup = async (previousState , formData) => {

    const {username , email , password , passwordRepeat} = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "password do not match"};
    }
    try {
        connectToDb();
        const user = await User.findOne({username})

        if (user) {
            return { error: "User is already exist"}
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        await newUser.save();
        console.log("User is cerated!")

    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
        
    }
}

export const Login = async (prevState, formData) => {

    const { username , password} = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username,password });

    } catch (error) {
        console.log(error)
        
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
          }
          throw error;
        
    }
}