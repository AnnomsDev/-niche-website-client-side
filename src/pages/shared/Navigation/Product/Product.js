import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ title, img, price, camera, flight_time, _id }) => {

    return (
        <Box sx={{ color: '#20273A', p: '5px', }}>
            <Box sx={{
                minHeight: "220px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img style={{ maxWidth: '315px' }} width='100%' src={img} alt="" />
            </Box>

            <Typography variant='h5' sx={{ fontWeight: 700 }}>{title}</Typography>
            <Typography sx={{ color: 'gray' }}>
                <b>Flight Time:</b> {flight_time} <br />
                <b>Camer :</b> {camera} <br />
            </Typography>


            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, mt: '1em' }}
            >
                <Typography variant='h5' sx={{ fontWeight: 700 }}>
                    <span style={{ color: '#1565C0' }}>$</span>{price}
                </Typography>
                <Link to={`/place-order/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button variant='outlined' sx={{ fontWeight: 700 }}>Purchess</Button>
                </Link>
            </Box>
        </Box >
    );
};

export default Product;