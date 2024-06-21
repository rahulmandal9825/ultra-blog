"use server"

import { Post, User } from "./models";
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const addPost = async(prevState,formData) =>{

    const {title, desc ,image ,tags, UserId } = Object.fromEntries(formData);

    try {
        connectToDb();

        const newPost = new Post({
            title,
            desc,
            image,
            tags,
            UserId,
        });

        await newPost.save();
        revalidatePath("/admin");
        return { success: "Post is successfully Add!" }
    
    } catch (error) {
        console.log(error);
        return  { error: "Something went wrong!" };
    }
}

export const deletePost = async(formData) =>{

    const { id } = Object.fromEntries(formData);
    
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("delete form db");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return  { error: "Something went wrong!" };
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
        console.log({success: true})

        return {success: true}

    } catch (error) {
        return  { error: "Something went wrong!" }
        
    }
}

export const Login = async (prevState, formData) => {

    const { username , password} = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username , password });

    } catch (error) {
        
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
          }
          throw error;
    }
}


export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

