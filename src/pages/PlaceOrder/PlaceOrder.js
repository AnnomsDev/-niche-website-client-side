import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [product, setProduct] = useState({})
    const { _id, title, img, details, camera, flight_time, price } = product

    useEffect(() => {
        axios.get(`https://shrouded-atoll-11239.herokuapp.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log('Got an error: ', err))
    }, [id])

    const handlePlaceOrder = () => {
        const email = user.email
        const productId = _id
        const productName = title

        const order = { email, productId, productName, price }

        axios.post('https://shrouded-atoll-11239.herokuapp.com/orders', order)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Order placed Successfully')

                }
            })
            .catch(err => {
                console.log('Got an error placing order', err)
                toast.error('Failed, please try again!')
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
                </Grid>

            </Grid>

            {/* Toastify container */}
            <ToastContainer
                position='bottom-right'
                autoClose={2000}
            />

        </Container >
    );
};

export default PlaceOrder;