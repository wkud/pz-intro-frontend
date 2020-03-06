import React, { createContext, useState } from 'react';

const TaskContext = createContext();

export const TasksProvider = props => {
    const [tasks, setTasks] = useState([]);
    const [lastTaskId, setLastTaskId] = useState(0);

    const addTask = taskText => {
        const newTaskId = lastTaskId+1;
        setTasks([...tasks, {id: newTaskId, text: taskText}]);
        setLastTaskId(newTaskId);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContext;