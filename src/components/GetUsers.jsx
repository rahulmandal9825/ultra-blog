
import React from 'react'

import { getUsers } from '../lib/data'
import { deleteUser } from '../lib/actions';
import Image from 'next/image';
// import { useFormState } from "react-dom";

const GetUsers = async () => {
  const data = await getUsers();
  const user = data ;
  // const [state, formAction] = useFormState(deleteUser, undefined);
  
  return (
    <div>
       <div className=' flex flex-col ml-10 gap-5 '>
        <h1 className='text-xl text-black font-bold'>Users</h1>
        <div className='flex flex-col gap-6 '>
{user.map((users , index) => (
            <div className='flex gap-4 justify-between bg-blue-200/40 p-3 rounded-lg' key={index}>
            <div className='flex gap-2'>
               <Image src="https://avatar.iran.liara.run/public/" alt="" className=" rounded-full" height={50} width={50}/>
        <h1>{user[index].username}</h1> 
            </div>
         
        <form action={deleteUser}>
        <input type="hidden" name="id" value={user[index].id} />
        <button className='bg-red-500 text-white p-2 rounded-xl'>Delete</button>
      </form>
    </div>
        ))}

        </div>
    </div>
    </div>
  )
}

export default GetUsers
