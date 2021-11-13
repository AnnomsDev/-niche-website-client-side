import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';



const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://shrouded-atoll-11239.herokuapp.com/products')
            .then(res => setProducts(res.data))
    }, [])

    const handleDelete = id => {
        const confirm = window.confirm('Do you want to Delete this Product ?')
        if (confirm) {
            axios.delete(`https://shrouded-atoll-11239.herokuapp.com/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const remaining = products.filter(order => order._id !== id)
                        setProducts(remaining)
                    }
                    else {
                        alert('Delete failed!. please try again')
                    }
                })
        }
    }


    return (
        <Box>
            <Typography sx={{ fontWeight: 700, color: '#20273A', mb: '1em' }} variant='h5'>Manage Products</Typography>
            <Typography sx={{ fontWeight: 700, color: '#20273A', m: '10px' }} variant='p'>Available products: {products.length}</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Thumbnail</TableCell>
                            <TableCell >Details</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        width='120px'
                                    />
                                </TableCell>
                                <TableCell >
                                    <b>Product Name:</b> {product.title} <br />
                                    <b>Camera Quality:</b> {product.camera} <br />
                                    <b>Flight Time:</b> {product.flight_time} <br />
                                    <b>Details:</b>
                                    <span style={{ color: 'gray' }}> {product.details} </span>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    <Button
                                        variant="outlined"
                                        size='small'
                                        startIcon={<DeleteIcon />}
                                    >Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageProducts;