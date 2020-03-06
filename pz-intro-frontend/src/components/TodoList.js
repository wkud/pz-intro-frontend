import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TodoList extends Component {
  static defaultProps = {
    title: 'Hejo',
    tasks: [
      { id: 1, text: 'lol' },
      { id: 2, text: 'hejo' },
      { id: 3, text: 'kappa' }
    ]
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
  };

  render() {
    const { title, tasks } = this.props;

    return (
      <div className='brown-border'>
        <h2 className='no-margin header-underscore'>{title}</h2>
        {tasks.map(task => (
          <Task className='allign-left' key={task.id} text={task.text} />
        ))}
      </div>
    );
  }
}

export default TodoList;
