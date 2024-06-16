import React from 'react'
import { getPosts } from '../../lib/data'
import PostCard from '../../components/PostCard';
import Header from '../../components/Header';



const getData = async() =>{
  // const res =await getPosts();
  const res = await fetch('https://dummyjson.com/posts');
  if(!res.ok){
    throw new Error("something went wrong");
  }
  return res.json();
}

const Blogpage = async() => {
    const data = await getData();
    const posts = data.posts

  return (
    <>
    <Header post={posts[0]}/>
    
     <div className='m-10 flex flex-wrap gap-10 '>
      {posts.map((post) => (
        <div key={post.id} className='w-[30%] border-2 border-gray-200 shadow-lg rounded-xl' >
          <PostCard post={post}/>
        </div>
        
      ))}
    </div>
    
    
    </>
   
  )
}

export default Blogpage
