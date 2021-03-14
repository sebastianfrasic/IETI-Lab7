import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Task } from './Task';

export const Tasks = (props) => {
    let tareas = (
        <CircularProgress />
    );
    if (props.list.length !== null) {
        tareas = props.list.map(task =>
        (<Task
            key={task.id}
            id={task.id}
            description={task.description}
            status={task.status}
            responsible={task.responsible}
            dueDate={task.dueDate}
        />));
    }
    return (
        <div>
            <Box justifyContent="center"
                alignItems="flex-start"
                display="flex"
            >
                {tareas}
            </Box>
        </div>
    );
};