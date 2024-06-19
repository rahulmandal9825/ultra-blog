import React from 'react'
import Adminpostcard from './adminpostcard'
import { getUsers } from '../lib/data'

const GetUsers = async () => {
  const data = await getUsers();
  const user = data ;
  
  return (
    <div>
       {/* <div className=' flex flex-col ml-10 gap-5 w-[40%]'>
        <h1 className='text-xl text-black font-bold'>Posts</h1>
        <div className='flex flex-col gap-6 '>
{posts.map((post , index) => (
         <Adminpostcard key ={index} post = {posts[index]}/>
        ))}

        </div>
    </div> */}
    </div>
  )
}

export default GetUsers
