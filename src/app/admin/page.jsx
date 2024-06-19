import Postform from '../../components/Postform';
import PostList from '../../components/PostList';
import GetUsers from '../../components/GetUsers';
import { auth } from '../../lib/auth';
import React from 'react'


const adminpage = async() => {
  const session = await auth();
  return (
    <>
     <div className='flex '>
      <Postform userId={session.user.id}/>
      <PostList userId={session.user.id}/>
    </div>
    <div>
        <GetUsers/>
    </div>
    
    </>
   
  )
}

export default adminpage
