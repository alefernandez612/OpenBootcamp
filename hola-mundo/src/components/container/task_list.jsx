import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('Cambiar estado de una tarea.');
    };

    return (
        <div>
            <div>
                Your tasks:
            </div>
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskList;
