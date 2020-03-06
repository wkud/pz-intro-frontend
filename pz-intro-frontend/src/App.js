import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTaskBar from './components/AddTaskBar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className="no-margin">Todo lista</h1>
        <h4 className="no-margin">by Wojciech Kud</h4>
        <AddTaskBar/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
