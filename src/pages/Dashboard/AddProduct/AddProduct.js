import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [productData, setProductData] = useState({})

    const handleOnBlur = e => {
        const name = e.target.name
        const value = e.target.value

        const newProductData = { ...productData }
        newProductData[name] = value
        setProductData(newProductData)
    }

    const handleAddProduct = e => {
        console.log(productData)

        axios.post('https://shrouded-atoll-11239.herokuapp.com/products', productData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    e.target.reset()
                    alert('product added successfully')
                }
                else {
                    alert('Something went wrong, please try again')
                }
            })
            .catch(err => {
                console.log('got an error adding product', err)
            })

        e.preventDefault()
    }



    return (
        <Box>
            <Typography
                sx={{ fontWeight: 700, color: '#20273A', mb: '1em' }}
                variant='h5'
            >Add Product</Typography>
            <form onSubmit={handleAddProduct}>
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    label="Product Name"
                    size="small"
                    name='title'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    label="Flight Time"
                    size="small"
                    name='flight_time'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    label="Camera Quality"
                    size="small"
                    name='camera'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    label="price"
                    size="small"
                    name='price'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    id="outlined-multiline-flexible"
                    label="Details"
                    multiline
                    minRows={4}
                    name='details'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '70%', mb: '1em' }}
                    label="Image url"
                    size="small"
                    name='img'
                    onBlur={handleOnBlur}
                />

                <br />
                <Button
                    variant='contained'
                    startIcon={<AddCircleIcon />}
                    type='submit'
                >Add Product</Button>
            </form>

        </Box>
    );
};

export default AddProduct;