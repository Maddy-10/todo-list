import React from 'react'
import TaskLists from './TaskLists'

const TaskView = () => {
  return (
    <div className='absolute top-0 left-[10%] bg-transparent flex flex-col w-[90%] h-auto'>
        <div className='mx-auto mt-5'>
            <p className='text-4xl font-bold'>Todo List</p>
        </div>
        <div className='flex justify-between mx-5 my-5'>
            <p className='text-2xl'>Good Evening,<span>Your Name</span></p>
            <p>Date : 7/3/24</p>
        </div>     
        <TaskLists/>   
    </div>
  )
}

export default TaskView