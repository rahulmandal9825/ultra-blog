import Image from "next/image";
import Postform from "../components/Postform"
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { getPosts } from "../lib/data";

export default async function  Home({searchParams}) {
  const query = searchParams.search || "";

  const data = await getPosts({query});
  const posts = data;
  return (
    <main className="">
      <Header post={posts[0]}/>
        <div className='m-10 flex flex-wrap gap-10 '>
      {posts.map((post , index) => (
        <div key={posts[index].id} className='w-[30%] border-2 border-gray-200 shadow-lg rounded-xl' >
          <PostCard post={posts[index]}/>
        </div>
        
      ))}
    </div>
    </main>
  );
}
