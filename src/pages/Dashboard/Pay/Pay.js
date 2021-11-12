import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Pay = () => {
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography sx={{ fontWeight: 700, color: '#20273A', mb: '1em' }} variant='h5'>Payment System <span style={{ color: '#1565C0' }}>Comming Soon</span></Typography>
        </Box>
    );
};

export default Pay;