import React from "react";
import {getpostsId} from "../lib/data";
import Image from "next/image";
import {deletePost} from "../lib/actions";

const getData = async (userId) => {
    const res = await getpostsId(userId);

    return res;
};

const PostList = async ({userId}) => {
    const data = await getData(userId);
    const posts = data;

    return (
        <div className=" flex flex-col ml-10 gap-5 ">
            <h1 className="text-xl text-black font-bold">Posts</h1>
            <div className="flex flex-col gap-6 ">
                {posts.map((post, index) => (
                    <div className="flex gap-4 justify-between bg-blue-200/40 p-3 rounded-lg" key={index}>
                        <div className="flex gap-2">
                            <Image src={posts[index]?.image} alt="" className=" rounded-full" height={50} width={50} />
                            <h1>{posts[index]?.title}</h1>
                        </div>

                        <form action={deletePost}>
                            <input type="hidden" name="id" value={posts[index].id} />
                            <button className="bg-red-500 text-white p-2 rounded-xl">Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
