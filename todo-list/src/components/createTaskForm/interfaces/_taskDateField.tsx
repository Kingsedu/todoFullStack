import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import { IDateField } from './IDateField';
import PropTypes from 'prop-types';
export const TaskDateField: FC <IDateField>= (props):ReactElement => {
    const { 
      value = new Date(), 
      disabled = false,
      onChange= (date) =>console.log(date)
    } = props;

    // const [ date, setDate ] = useState<Date | null>(null)
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
        label="Task Date"
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    </>
  )
}

TaskDateField.propTypes = {
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}