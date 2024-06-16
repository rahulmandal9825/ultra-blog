import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({post}) => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
    return (
        <div className="flex flex-col gap-3 p-4">
            <div className="">
            <Image src="/image1.jpg" alt="" className=" rounded-lg" height={400} width={300}/>
            </div>
            <div className="flex gap-2 text-[11px] font-bold mt-2 text-blue-600">
                {post.tags.map((tag)=>(
                    <div key={tag} className="bg-blue-200 rounded-lg px-2 ">
                        <h1>{capitalizeFirstLetter(tag)}</h1>
                    </div>
                ))}
            </div>
            <div className=" font-bold flex justify-between h-[150px] flex-col">
                <div>
                    <h1>{post.title}</h1>
                <h1 className="text-sm font-normal text-gray-500">{post.body.slice(0,100)}...</h1>
                </div>
                
                <Link className="text-sm" href={`/blog/${post.id}`}>
                    Read more...
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
