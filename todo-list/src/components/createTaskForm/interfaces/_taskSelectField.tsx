import  {FC, ReactElement} from 'react'
import { 
        FormControl, 
        InputLabel,
        MenuItem,
        // SelectChangeEvent,
        Select, 
        SelectChangeEvent} from '@mui/material'
import { ISelectField } from './ISelectField';
import PropTypes from 'prop-types';

export const TaskSelectField:FC<ISelectField> = (props):ReactElement => {
    const { 
        value =' ', 
        label = 'Select Box', 
        name ="selectBox ", 
        items = [{value: " ", label: "Add items"}], 
        disabled=false,
        onChange=(e:SelectChangeEvent)=> console.log("chnaged" + e)} = props
  return (
    <FormControl fullWidth size="small">
        <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        name={name}
        label="Status"
        onChange = {onChange}
        disabled={disabled}
        >{
            items.map((item,index)=>(
                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            ))
        }
        </Select>
    </FormControl>
  )
}

TaskSelectField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}