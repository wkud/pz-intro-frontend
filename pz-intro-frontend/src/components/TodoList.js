import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskContext from '../contexts/TaskContext';

function TodoList(props) {
  const { tasks } = useContext(TaskContext);
  const { title } = props;

  console.log(tasks);
  return (
    <div className='container small-margin'>
      <h2 className='no-margin header-underscore'>{title}</h2>
      {tasks.map(task => (
        <Task key={task.id} text={task.text} />
      ))}
    </div>
  );
}
TodoList.defaultProps = {
  title: 'My List'
};
TodoList.propTypes = {
  title: PropTypes.string.isRequired
};

export default TodoList;
