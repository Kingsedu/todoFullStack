import {FC, ReactElement } from 'react';
import {
    Box,
    Button,
    FormControlLabel,
    Switch
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITFooter';
import PropTypes from 'prop-types';

const TaskFooter:FC<ITaskFooter> = (props):ReactElement => {
    const { onStatusChange = (e) => console.log(e),
            onClick= (e) => console.log(e) } = props;
  return (
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    mt={4}
    >
        <FormControlLabel
        label="in progress"
        control={<Switch 
            onChange={(e)=> onStatusChange(e)}
            color="warning"
            />}
        />
        <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={(e)=> onClick(e)}>
            Mark Complete
        </Button>
    </Box>
  )
}

export default TaskFooter

TaskFooter.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func
}