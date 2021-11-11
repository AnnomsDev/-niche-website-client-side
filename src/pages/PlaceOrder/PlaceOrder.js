import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    console.log(id)

    const { title, img, details, camera, flight_time, price } = product

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log('Got an error: ', err))
    }, [id])

    return (
        <Container
            sx={{ my: '2em', color: '#20273A' }}
        >
            <Grid container spacing={'2em'}>
                <Grid item sm={9} xs={12}>
                    <img width='80%' src={img} alt={title} />
                    <Typography variant='h5'
                        sx={{ fontWeight: 700 }}
                    >{title}</Typography>

                    <Typography
                        variant='p'
                        sx={{ color: 'gray' }}
                    >{details}</Typography>

                </Grid>
                <Grid item sm={3} xs={12}>
                    <Typography variant='h5'
                        style={{
                            fontWeight: 700,
                            margin: '1em 0',

                            borderBottom: '2px solid #1565C0'
                        }}
                    >Place Order</Typography>
                    <Typography variant='p' >
                        <b>Camera:</b> {camera} <br />
                        <b>Flight Time:</b> {flight_time} <br />
                    </Typography>

                    <Typography variant='h5' sx={{ fontWeight: 700, mt: '2em' }}>
                        Price: <span style={{ color: '#1565C0' }}>$</span>{price}
                    </Typography>
                    <Button variant='outlined' sx={{ fontWeight: 700, my: '1em' }}>Purchess</Button>



                </Grid>

            </Grid>

        </Container >
    );
};

export default PlaceOrder;