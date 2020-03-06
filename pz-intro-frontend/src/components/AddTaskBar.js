import React, { useState, useContext } from 'react';
import TaskContext from '../contexts/TaskContext'

function AddTaskBar() {
  const [newTaskText, setTaskText] = useState('');
  const { addTask } = useContext(TaskContext);

  return (
    <div>
      <input
        className='button'
        type='text'
        placeholder='New task'
        onChange={event => setTaskText(event.target.value)}
      />
      <button className='button' onClick={()=>addTask(newTaskText)}>
        <i className='fas fa-plus'></i>
      </button>
    </div>
  );
}
export default AddTaskBar;
