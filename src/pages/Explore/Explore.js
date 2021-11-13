import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../shared/Navigation/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://shrouded-atoll-11239.herokuapp.com/products')
            .then(res => setProducts(res.data))
    }, [])

    return (
        <Box
            sx={{ m: '4em 9vw' }}
        ><Typography
            variant='h4'
            sx={{ fontWeight: 800, color: '#20273A', my: '1em', fontSize: "calc(1em + 2vw)" }}
        >FIND THE BEST <span style={{ color: '#1565C0' }}>DRONE</span> <br /> FOR YOUR NEED</Typography>

            <Grid container spacing={{ xs: 2, md: '3em' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map((product, index) => (
                        <Grid key={index} item xs={4} sm={4} md={4} >
                            <Product {...product} />
                        </Grid>
                    ))
                }



            </Grid>

        </Box>
    );
};

export default Explore;