import React, { Component } from 'react';

class AddTaskBar extends Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }
  state = {
    newTaskName: ''
  };
  addTask() {
    console.log(this.state.newTaskName);
  }
  render() {
    return (
      <div>
        <input
          className='input'
          type='text'
          placeholder='New task'
          onChange={event => this.setState({newTaskName: event.target.value})}
        />
        <button className='input' onClick={this.addTask}>
          <i className='fas fa-plus'></i>
        </button>
      </div>
    );
  }
}

export default AddTaskBar;
