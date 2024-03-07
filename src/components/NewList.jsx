import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoContext } from '../context/TodoContext';

const NewList = () => {
    const navigate=useNavigate();
    const {inputValues,handleSubmit}=useContext(TodoContext);
    const submit = (e) => {
        e.preventDefault();
        handleSubmit
        
    }
  return (
    <div className='w-full flex flex-col justify-center'>
        <h1 className='text-2xl text-center my-10'>Add New Task To The List</h1>
        {inputValues.map((inputValue, index) => (
        <form className='w-1/3 mx-auto flex' onSubmit={(e) => handleSubmit(e, index)}>
        <textarea name="task"  value={inputValue}
              onChange={(e) => handleChange(e, index)} placeholder='Enter Your Task Here...' cols="30" rows="5" className='px-2 pt-1 border rounded-lg w-full my-auto'></textarea>
        </form>
        <button onClick={submit} className='bg-rose-400 px-3 py-1 w-40 mx-auto rounded-lg my-5 hover:bg-gray-500'>Add Task</button>
        ))}
    </div>
  )
}

export default NewList