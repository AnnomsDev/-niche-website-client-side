import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import useAuth from '../../../Hook/useAuth';


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${user.email}`)
            .then(res => setMyOrders(res.data))
            .catch(err => console.log('Got an error', err))

    }, [])

    const handleCancle = id => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                const confirm = window.confirm('Do you want to cancle this order ?')
                if (confirm) {
                    if (res.data.deletedCount) {
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining)
                    }
                }
            })

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
                                    onClick={() => handleCancle(order._id)}
                                ><CancelIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
};

export default MyOrders;