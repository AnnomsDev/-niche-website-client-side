import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='Banner'>
            <Box>
                <Typography
                    variant='h1'
                    style={{ fontSize: 'calc(1em + 2vw)', fontWeight: 700 }}
                >
                    The Ultraportable<br />Drone for the Best Video
                </Typography>
                <Typography variant='p' >
                    The ultraportable Mavic Air features high-end flight performance and functionality for limitless exploration.
                </Typography>
            </Box>
        </div>
    );
};

export default Banner;