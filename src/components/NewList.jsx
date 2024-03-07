import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewList = () => {
    const navigate=useNavigate();
  return (
    <div className='w-full flex flex-col justify-center'>
        <h1 className='text-2xl text-center my-10'>Add New Task To The List</h1>
        <div className='w-1/3 mx-auto flex'>
        <textarea name="task" placeholder='Enter Your Task Here...' cols="30" rows="5" className='px-2 pt-1 border rounded-lg w-full my-auto'></textarea>
        </div>
        <button onClick={()=>navigate('/')} className='bg-rose-400 px-3 py-1 w-40 mx-auto rounded-lg my-5 hover:bg-gray-500'>Add Task</button>
    </div>
  )
}

export default NewList