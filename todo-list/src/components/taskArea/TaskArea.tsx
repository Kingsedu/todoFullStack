import { FC, ReactElement } from 'react'
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';
export const TaskArea:FC = ():ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As On{''}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid 
      container
      display="flex"
      justifyContent="center"
      >
        <Grid 
        item 
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        md={10}
        xs={12}
        mb={8}>
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid 
        item
        display="flex"
        flexDirection="column"
        xs={10}
        md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
   
  )
}
