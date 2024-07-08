import React, { useEffect, useState } from 'react'

export const Warning = ({user}) => {

  return (
    <div className=''>
      {user?.response?.status!== 200 ?<div>{user?.Data?.message.map(err => <h1 className='w-full h-9 bg-red-600 mt-5  rounded-lg flex justify-center items-center text-white'>{err}</h1>)}</div>:null }
    </div>
   
  )
}
