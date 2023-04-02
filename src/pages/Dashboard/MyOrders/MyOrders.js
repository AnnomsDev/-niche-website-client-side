import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import useAuth from '../../../Hook/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        // Toastify- show loading toast
        const loadingOrders = toast.loading('Loading Orders')
        axios.get(`https://dronezz.onrender.com/orders/${user.email}`)
            .then(res => {
                setMyOrders(res.data)
                // Toastify- close loading toast with success message
                toast.update(loadingOrders, {
                    render: 'All order loaded',
                    type: 'success',
                    isLoading: false,
                    autoClose: 1000
                })
            })
            .catch(err => {
                // Toastify- close loading toast with Error message
                toast.update(loadingOrders, {
                    render: 'Got an error- loading orders',
                    type: 'error',
                    isLoading: false,
                    autoClose: 1000
                })

                console.log('got an error:', err)
            })

    }, [])

    const handleCancle = id => {
        const confirm = window.confirm('Do you want to cancle this order ?')
        if (confirm) {
            // Toastify- Show loading toast
            const deleting = toast.loading('Deleting one order..')
            axios.delete(`https://dronezz.onrender.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining)
                        // Toastify- close toast with success message
                        toast.update(deleting, { render: 'One order Deleted', type: 'info', isLoading: false, autoClose: 1500 })
                    } else {
                        // Toastify- close toast with success message
                        toast.update(deleting, { render: 'Failed! Please try again', type: 'error', isLoading: false, autoClose: 1500 })
                    }
                })
                .catch(err => {
                    // Toastify- close toast with success message
                    toast.update(deleting, { render: 'Failed! Please try again', type: 'error', isLoading: false, autoClose: 1500 })
                })
        }

    }


    return (
        // update
        <Box>
            <Typography sx={{ fontWeight: 700, color: '#20273A', mb: '1em' }} variant='h5'>My Orders</Typography>
            <Typography sx={{ fontWeight: 700, color: '#20273A', m: '10px' }} variant='p'>You have ordered {myOrders.length} item</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            {/* <TableCell >Emai</TableCell> */}
                            <TableCell >Price</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell align="center" >Cancle</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.productName}
                                </TableCell>
                                {/* <TableCell >{order.email}</TableCell> */}
                                <TableCell >${order.price}</TableCell>
                                <TableCell >{order.status}</TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => handleCancle(order._id)}
                                ><CancelIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* Toastify container */}
            <ToastContainer
                position='bottom-right'
                autoClose={2000}
            />

        </Box>
    );
};

export default MyOrders;