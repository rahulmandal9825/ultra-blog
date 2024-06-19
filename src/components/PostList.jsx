
import React from 'react'
import { getpostsId } from '../lib/data';
import Adminpostcard from './adminpostcard';


const getData = async (userId) => {
    const res = await getpostsId(userId);
   
    return res;
  };


const PostList =  async ({userId}) => {
    const data = await getData(userId);
    const posts = data;
    console.log(posts[0].id);

  return (
    <div className=' flex flex-col ml-10 gap-5 w-[40%]'>
        <h1 className='text-xl text-black font-bold'>Posts</h1>
        <div className='flex flex-col gap-6 '>
{posts.map((post , index) => (
         <Adminpostcard key ={index} post = {posts[index]} id={posts[index].id}/>
        ))}

        </div>
        
        



      
    </div>
  )
}

export default PostList
