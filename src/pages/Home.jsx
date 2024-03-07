import React from 'react'
import SideBar from '../components/SideBar'
import TaskView from '../components/TaskView'

const Home = () => {
  return (
    <div className='bg-[#E1CBD7] w-screen h-svh'>
        <SideBar/>
        <TaskView/>
    </div>
  )
}

export default Home