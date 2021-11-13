import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const loadingOrders = toast.loading('Adding a new product..')
        axios.post('https://shrouded-atoll-11239.herokuapp.com/products', productData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    e.target.reset()
                    // Toastify- close loading toast with success message
                    toast.update(loadingOrders, {
                        render: 'Product added Successfully',
                        type: 'success',
                        isLoading: false,
                        autoClose: 1000
                    })
                }
                else {
                    // Toastify- close loading toast with Error message
                    toast.update(loadingOrders, {
                        render: 'Add product Failed.!!',
                        type: 'error',
                        isLoading: false,
                        autoClose: 1000
                    })
                }
            })
            .catch(err => {
                // Toastify- close loading toast with Error message
                toast.update(loadingOrders, {
                    render: 'Add product Failed.!!',
                    type: 'error',
                    isLoading: false,
                    autoClose: 1000
                })
                console.log('Got an error adding product:', err)
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


            {/* Toastify container */}
            <ToastContainer
                position='bottom-right'
                autoClose={2000}
            />

        </Box>
    );
};

export default AddProduct;