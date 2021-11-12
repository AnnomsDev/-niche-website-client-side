import './Banner.css'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

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
                <br />
                <Link
                    to='/explore'
                    style={{ textDecoration: 'none' }}
                ><Button
                    variant="contained"
                    size='big'
                    startIcon={<ArrowForwardIosIcon />}
                    sx={{
                        color: 'white',
                        mt: { md: '3em' },
                        fontWeight: 700,
                        borderRadius: '200px',
                        p: { md: '1em 2em' }
                    }}
                >
                        Explore
                    </Button>
                </Link>

            </Box>
        </div>
    );
};

export default Banner;