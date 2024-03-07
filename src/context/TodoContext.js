import React, { createContext, useState } from 'react'

export const TodoContext = createContext(null);


export const TodoContextProvider = (props) => {
    const [inputValues, setInputValues] = useState([]);
  const [error, setError] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [inputbtn, setInputbtn] = useState(true);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    if (!inputValues[index]?.trim()) {
      setError('Please Fill The Input Field and Add Again...!');
      return;
    }
    // Add inputItem to the todoList
    setTodoList(prev => [...prev, { text: inputValues[index], completed: false }]);
    // Clear input field
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = '';
    setInputValues(updatedInputValues);
  }

  const handleChange = (e, index) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = e.target.value;
    setInputValues(updatedInputValues);
    setError('');
  };

  const onCheck = (index) => {
    const updateList = [...todoList];
    updateList[index].completed = !updateList[index].completed;
    setTodoList(updateList);
  }

  const deleteList = (index) => {
    const updateList = todoList.filter((_, i) => i !== index);
    setTodoList(updateList);
  }

  const handleAddInput = () => {
    setInputbtn(false);
    setInputValues([...inputValues, '']);
  };
const contextValue = { deleteList,onCheck,handleChange,handleSubmit,todoList,setTodoList,error,setError,inputValues,setInputValues,handleAddInput }
return (
    <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
)
}