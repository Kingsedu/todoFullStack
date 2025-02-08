import {FC, ReactElement} from 'react';
import { Box } from '@mui/material';

const Task:FC = ():ReactElement => {
  return (
    <Box
    display="flex"
    width="100%"
    justifyContent="center"
    flexDirection="column"
    mb={2}
    p={2}
    sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light'
    }}>
        task
        {/* Task Header */}
        {/* Task Description */}
        {/* Task Footer */}
    </Box>
  )
}

export default Task