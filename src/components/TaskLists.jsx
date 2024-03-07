import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const TaskLists = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='card-view grid grid-cols-3 gap-3 mx-5'>
            <div className='rounded bg-[#E4897B]'>
                <p className='px-5 py-1 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro natus quasi quidem perspiciatis voluptate nulla voluptas! Debitis blanditiis itaque pariatur! Aspernatur ullam doloremque similique sapiente, laudantium eaque repellat dolor.</p>
                <button className='bg-[#3B8D61] hover:bg-gray-900 text-white rounded px-3 py-1 ml-5 my-1 text-sm'>Finished</button>
            </div>
            <div className='rounded bg-[#E4897B]'>
                <p className='px-5 py-1 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro natus quasi quidem perspiciatis voluptate nulla voluptas! Debitis blanditiis itaque pariatur! Aspernatur ullam doloremque similique sapiente, laudantium eaque repellat dolor.</p>
                <button className='bg-[#3B8D61] hover:bg-gray-900 text-white rounded px-3 py-1 ml-5 my-1 text-sm'>Finished</button>
            </div>
            <div className='rounded bg-[#E4897B]'>
                <p className='px-5 py-1 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro natus quasi quidem perspiciatis voluptate nulla voluptas! Debitis blanditiis itaque pariatur! Aspernatur ullam doloremque similique sapiente, laudantium eaque repellat dolor.</p>
                <button className='bg-[#3B8D61] hover:bg-gray-900 text-white rounded px-3 py-1 ml-5 my-1 text-sm'>Finished</button>
            </div>
            <div className='rounded bg-[#E4897B]'>
                <p className='px-5 py-1 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro natus quasi quidem perspiciatis voluptate nulla voluptas! Debitis blanditiis itaque pariatur! Aspernatur ullam doloremque similique sapiente, laudantium eaque repellat dolor.</p>
                <button className='bg-[#3B8D61] hover:bg-gray-900 text-white rounded px-3 py-1 ml-5 my-1 text-sm'>Finished</button>
            </div>
            <div className='rounded bg-[#E4897B]'>
                <p className='px-5 py-1 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro natus quasi quidem perspiciatis voluptate nulla voluptas! Debitis blanditiis itaque pariatur! Aspernatur ullam doloremque similique sapiente, laudantium eaque repellat dolor.</p>
                <button className='bg-[#3B8D61] hover:bg-gray-900 text-white rounded px-3 py-1 ml-5 my-1 text-sm'>Finished</button>
            </div>
            <button onClick={()=>navigate('/new')} className='rounded bg-white hover:bg-gray-300 hover:border hover:border-white flex flex-col'>
            <div className="mx-auto my-auto">
                <FiPlusCircle size={68} className='text-gray-500 mx-auto'/>
                <p className='text-gray-500 font-semibold text-xl text-center'>Add New Task</p>
            </div>
            </button>
        </div>
    </div>
  )
}

export default TaskLists