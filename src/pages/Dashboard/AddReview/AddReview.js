import { Button, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const AddReview = () => {
    const [rating, setRating] = useState(4);
    const [feedback, setFeedback] = useState('')
    const { user } = useAuth()

    const { email, displayName } = user


    const handleSubmitReview = e => {
        const review = {
            email,
            displayName,
            rating,
            feedback
        }
        console.log(review)

        axios.post('https://shrouded-atoll-11239.herokuapp.com/reviews', review)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    e.target.reset()
                    alert('review submited successfully')
                }
            })


        e.preventDefault()
    }

    return (
        <Box sx={{ color: '#20273A' }}>
            <Typography
                sx={{ fontWeight: 700, mb: '1em' }}
                variant='h5'
            >Add Review</Typography>
            <Typography
                variant='p'
                sx={{ color: 'gray' }}
            >Please add a review. <br /> Your review means a lot to us. You can add as many review as you want</Typography>
            <form onSubmit={handleSubmitReview} >
                <Typography
                    variant='h6'
                    sx={{ mt: '1em', mb: '.5em' }}
                > Rating: </Typography>
                <Rating
                    required
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <br />
                <TextField
                    required
                    multiline
                    minRows={4}
                    sx={{ backgroundColor: 'white', width: '70%', mt: '1em' }}
                    label="Write your feedback here"
                    onChange={e => setFeedback(e.target.value)}
                />
                <br />
                <Button
                    variant="contained"
                    type='submit'
                    sx={{ mt: '1em', textTransform: "capitalize" }}
                >Submit Review</Button>

            </form>
        </Box>
    );
};

export default AddReview;