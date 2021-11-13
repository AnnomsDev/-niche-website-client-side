import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';



const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [ordersReloader, setOrdersReloder] = useState(false)

    useEffect(() => {
        axios.get('https://shrouded-atoll-11239.herokuapp.com/orders')
            .then(res => {
                console.log(res.data)
                setOrders(res.data)
            })

    }, [ordersReloader])

    const handleDelete = id => {
        const confirm = window.confirm('Do you want to cancle this order ?')
        if (confirm) {
            axios.delete(`https://shrouded-atoll-11239.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }


    const handleShift = id => {
        axios.put(`https://shrouded-atoll-11239.herokuapp.com/orders/${id}`)
            .then(res => {
                // reload orders
                if (res.data.modifiedCount) {
                    setOrdersReloder(!ordersReloader)
                }
            })
            .catch(err => {
                console.log('got an error', err)
            })

    }

    return (
        <Box>
            <Typography sx={{ fontWeight: 700, color: '#20273A', mb: '1em' }} variant='h5'>Manage All Orders</Typography>
            <Typography sx={{ fontWeight: 700, color: '#20273A', m: '10px' }} variant='p'>Available Orders: {orders.length}</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Id</TableCell>
                            {/* <TableCell >Emai</TableCell> */}
                            <TableCell >Price</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Change Status</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order._id}
                                </TableCell>
                                {/* <TableCell >{order.email}</TableCell> */}
                                <TableCell >${order.price}</TableCell>
                                <TableCell >{order.status}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        startIcon={<DeliveryDiningIcon />}
                                        variant="outlined"
                                        size="small"
                                        disabled={order.status === 'panding' ? false : true}
                                        onClick={() => handleShift(order._id)}
                                    > Shift </Button>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    onClick={() => handleDelete(order._id)}
                                ><CancelIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageAllOrders;