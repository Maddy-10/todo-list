import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate();
  return (
    <div className='fixed w-[10%] bg-[#E4897B] shadow-lg z-10'>
        <div className='relative w-[] flex flex-col h-svh'>
        <h1 className='mt-2 text-xl text-center'>Todo List</h1>
        <button onClick={()=>navigate('/new')} className='py-1 px-4 mx-auto rounded bg-[#E9BCB9] mt-4'>ADD</button>
    </div>
    </div>
  )
}

export default SideBar