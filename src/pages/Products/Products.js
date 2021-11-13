import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../shared/Navigation/Product/Product';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products?limit=6')
            .then(res => setProducts(res.data))
    }, [])


    return (
        <Box
            sx={{ mx: '9vw', my: '8em' }}
        >
            <Typography
                variant='h4'
                sx={{ fontWeight: 800, color: '#20273A', my: '1.5em' }}
            >PRODUCTS</Typography>
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

export default Products;