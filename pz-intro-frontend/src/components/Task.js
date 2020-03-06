import React, { useState } from 'react';

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='task-item'>
      <input
        type='checkbox'
        onChange={event => setIsChecked(event.target.checked)}
      />
      {isChecked ? <del>{props.text}</del> : props.text}
    </div>
  );
}

export default Task;
