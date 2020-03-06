import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTaskBar from './components/AddTaskBar'
import { TasksProvider } from './contexts/TaskContext'

class App extends Component {
  render() {
    return (
      <TasksProvider>
      <div className='App'>
        <h1 className="no-margin">Todo List</h1>
        <h4 className="no-margin">by Wojciech Kud</h4>
        <AddTaskBar/>
        <TodoList/>
      </div>
      </TasksProvider>
    );
  }
}

export default App;
