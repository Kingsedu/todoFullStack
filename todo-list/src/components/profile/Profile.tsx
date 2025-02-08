import { FC, ReactElement} from 'react';
import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

interface IProfile {
    name?: string;

}

export const Profile:FC<IProfile> = (props:any):ReactElement => {
    const { name =  "Nedu" } = props;
  return (
    <Box 
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    >
        <Avatar 
        sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'primary.main',
            marginBottom: '16px',
        }}>
            <Typography variant='h4' color='text.primary'>
                {`${name.substring(0,1)}`}
            </Typography>
        </Avatar>
        {/*! the name of the person  */}
        <Typography variant='h6' color='text.primary'>
            { `Welcome ${name}`}
        </Typography>
        {/* the description about the app  */}   
        <Typography variant='body1' color='text.primary'>
            This is your personal tasks manager
        </Typography>
    </Box>
  )
}


Profile.propTypes = {
    name: PropTypes.string,
}