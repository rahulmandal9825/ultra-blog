"use client"
import React, { useState } from 'react'

const Swich = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  
    return (
      <>
         <>
      <label className='relative inline-flex cursor-pointer select-none py-1 items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
       
        <span
          className={`slider mx-4 flex h-6 w-[45px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-5 w-5 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[19px]' : ''
            }`}
          ></span>
        </span>
        
      </label>
    </>
      </>
  )
}

export default Swich