import {FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
import PropTypes from 'prop-types';


const Task:FC<ITask> =(props):ReactElement => {
    //Destructure props;
    const {
        title = 'Task Title',
        date = new Date(),
        description = 'Lorem ipsum dolor sit amet',
        priority = Priority.normal,
        status = Status.completed,
        onStatusChange = (e) => console.log(e),
        onClick  = (e) => console.log(e)
    } = props;
  return (
    <Box
    display="flex"
    width="100%"
    justifyContent="center"
    flexDirection="column"
    mb={4}
    p={2}
    sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority)
    }}>
        {/* Task Header */}
        <TaskHeader title={title} date={date}/>
        {/* Task Description */}
        <TaskDescription description={description}/>
        {/* Task Footer */}
        <TaskFooter 
        onClick={onClick}
        onStatusChange={onStatusChange}/>

    </Box>
  )
}
export default Task

Task.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string,
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func
}