import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      username:{
        type: String,
        required:true,
        unique:true,
        min: 3,
        max: 20,
      },
    email:{
        type:String,            
        required: true,
        unique:true,
        max:50,
        },
    password: {
        type:String,
    },
    image: {
        type:String,
    },
    isAdmim:{
        type: Boolean,
        default: false,
    },

      },
      {timestamps:true}

);

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        desc:{
            type:String,
            required: true,
        },
        img:{
            type: String,

        },
        UserId:{
            type: String,
            required: true,
        },
        slug:{
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: true}
)
export const User = mongoose.models?.User || mongoose.model("User" , UserSchema); 
export const Post = mongoose.models?.Post || mongoose.model("Post", PostSchema);
