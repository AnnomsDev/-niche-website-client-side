import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data)
                console.log('review', res.data)
            })
            .catch(err => console.log('got an error loading reviews', err))

    }, [])

    return (
        <Box
            sx={{ mx: '9vw', mb: '7em' }}
        >
            <Typography
                variant='h4'
                sx={{ fontWeight: 800, color: '#20273A', my: '1em' }}
            >WHAT <span style={{ color: '#1565C0' }}>CUSTOMMER</span> <br /> SAYS ABOUT US</Typography>

            <Grid container spacing={{ xs: 2, md: '3em' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map((review, index) => (
                        <Grid key={index} item xs={4} sm={4} md={4} >
                            <Review {...review} />
                        </Grid>
                    ))
                }



            </Grid>

        </Box>
    );
};

export default Reviews;