import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#000',
                color: 'white',
                textAlign: 'center',
                py: '3em'
            }}
        >
            <Typography
                variant='h5'
                sx={{ fontWeight: 800, mb: '5px' }}
            >DRONE<span style={{ color: '#1565C0' }}>ZZ</span> <br /></Typography>
            <Box>
                <a href="http://www.github.com/annomsDev" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: 'white', mx: '4px' }} />
                </a>
                <a href="http://facebook.com/annoms.rd" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon sx={{ color: 'white', mx: '4px' }} />
                </a>
            </Box>
            <Typography variant='p'>© copyright @2021 || All copyright reserved</Typography>
        </Box>
    );
};

export default Footer;