import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PlaceOrder = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [product, setProduct] = useState({})
    const [isOrderPlaced, setIsOrderPlace] = useState(false)
    console.log(id)

    const { _id, title, img, details, camera, flight_time, price } = product

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log('Got an error: ', err))
    }, [id])

    const handlePlaceOrder = () => {
        const email = user.email
        const productId = _id
        const productName = title

        const order = { email, productId, productName, price }

        axios.post('http://localhost:5000/orders', order)
            .then(res => {
                if (res.data.insertedId) {
                    setIsOrderPlace(true)
                }
            })
            .catch(err => {
                console.log('Got an error placing order', err)
                alert('Something went wrong!!, Please try again')

            })


    }

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
                    <Button
                        variant='outlined'
                        sx={{ fontWeight: 700, my: '1em' }}
                        onClick={handlePlaceOrder}
                    >Place Order</Button>
                    {isOrderPlaced && <Alert severity="success">Order placed Successfully</Alert>}

                </Grid>

            </Grid>

        </Container >
    );
};

export default PlaceOrder;