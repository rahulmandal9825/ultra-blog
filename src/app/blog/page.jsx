import React from 'react'
import { getPosts } from '../../lib/data'
import PostCard from '../../components/PostCard';
import Header from '../../components/Header';

const Blogpage = async({searchParams}) => {
    const query = searchParams.search || "";
    const data = await getPosts({query});
    const posts = data;
   


  return (
    <>
    {/* <Header post={posts[0]}/> */}
     <div className='m-10 flex flex-wrap gap-10 '>
      {posts.map((post , index) => (
        <div key={posts[index].id} className='w-[30%] border-2 border-gray-200 shadow-lg rounded-xl' >
          <PostCard post={posts[index]}/>
        </div>
        
      ))}
    </div>
    
    
    </>
   
  )
}

export default Blogpage
