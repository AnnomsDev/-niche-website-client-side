import './MyOrders.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <div className='my-orders'>
            <h2>My Orders</h2>
            <table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Cancle</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order => (
                            <tr key={order._id}>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleCancle(order._id)}
                                    >Cancle</Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>


        </div>
    );
};

export default MyOrders;