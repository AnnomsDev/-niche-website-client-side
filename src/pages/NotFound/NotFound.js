import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img style={{ maxWidth: '80%', maxHeight: '50vh', margin: '1em auto', }} src='./notfound.jpg' alt="not found" />
            <Typography
                variant='h5'
                sx={{ fontWeight: 700 }}
            >Page not Found</Typography>
            <Link to='/'>Home</Link>
        </Box>
    );
};

export default NotFound;