import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ displayName, feedback, rating }) => {
    return (
        <Box
            sx={{
                borderRadius: '5px',
                p: ' .5em 1em',
                boxShadow: '0 0 10px 4px #00000014',
                minHeight: '100%'
            }}
        >
            <Typography
                variant='h6'
                sx={{ fontWeight: 700, fontSize: '1em', textTransform: 'capitalize' }}
            >{displayName}</Typography><br />
            <Rating value={rating} readOnly />
            <br />
            <Typography
                variant='p'
                sx={{ color: 'gray' }}
            >{feedback}</Typography><br />
        </Box>
    );
};

export default Review;