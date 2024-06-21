"use client";

import React, { useState } from 'react'

import { SingleImageDropzone } from './Edgestoreimage';
import { useEdgeStore } from '../lib/edgestore';
import { useFormState } from "react-dom";
import { addPost } from '../lib/actions';

const Postform =  ({userId}) => {
  const [file, setFile] = useState();
  const {edgestore} = useEdgeStore();
  const [url ,setUrl] = useState();
  const [progress,setProgress] =useState(0);
  const [state, formAction] = useFormState(addPost, undefined);

  const handleimageuplaod = async (e)=>{
      try {

          if(file){
          const res= await edgestore.publicFiles.upload({
            file,
            onProgressChange: (progress) =>{
              setProgress(progress);
            }
          }) ;
          setUrl({
            url:res.url,
          })
          
        }

      }  catch (error) {
      // All errors are typed and you will get intellisense for them
      if (error ) {
        // if it fails due to the `maxSize` set in the router config
        if (error.data.code === 'FILE_TOO_LARGE') {
          alert(
            `File too large. Max size is ${formatFileSize(
              error.data.details.maxFileSize,
            )}`,
          );
        }
        // if it fails due to the `accept` set in the router config
        if (error.data.code === 'MIME_TYPE_NOT_ALLOWED') {
          alert(
            `File type not allowed. Allowed types are ${error.data.details.allowedMimeTypes.join(
              ', ',
            )}`,
          );
        }
        // if it fails during the `beforeUpload` check
        if (error.data.code === 'UPLOAD_NOT_ALLOWED') {
          alert("You don't have permission to upload files here.");
        }
      }
    }
  }

    return (
    <div className='bg-blue-300/10  flex flex-col p-5 rounded-xl shadow-2xl '>
      <div className='flex p-5 gap-5'>
        <SingleImageDropzone
        width={100}
        height={100}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <div className='flex flex-col w-full justify-evenly'>
        <div className='h-[10px] w-full border border-black/20  rounded overflow-hidden'>
        <div className='h-full bg-black transition-all duration-150'
        style={{
          width:`${progress}%`
        }}
        >
        </div>
      </div>
      {progress === 100 ? (
        <h1 className='text-green-500 self-center'>Image is successfully uploaded</h1>
      ) : null}
       
      <button  disabled={!file || !!url} onClick={handleimageuplaod} className='bg-green-600 p-2 h-[40%] rounded-xl self-center text-white' >Upload Image</button>
      </div>
    
      </div>
      
        <form action={formAction} className='flex  justify-evenly flex-col w-full  gap-6 h-[400px]'>
        <input type="hidden"  name="image" value={url?.url}/>
        <input type="hidden" name="UserId" placeholder='userId' value={userId}/>
        <input type="text" name='title' placeholder='Post title' className=' bg-gray-100 p-2 rounded-lg outline-none'  />
        <input type="text" name="tags" placeholder='tag' className='bg-gray-100 p-2 rounded-lg outline-none' />
        <textarea type="text" rows={10}  name='desc' placeholder='desc'  className='bg-gray-100 p-2 rounded-lg outline-none' />
        <button className='bg-blue-500 text-white p-3 font-semibold rounded-lg'>Post</button>
        <h1 className='text-sm text-red-500 self-center'>{state?.error}</h1>
        <h1 className='text-sm text-green-500 self-center'>{state?.success}</h1>
      </form>
    </div>
  )
}

export default Postform
