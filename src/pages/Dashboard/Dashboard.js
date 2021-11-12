import './Dashboard.css'
import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hook/useAuth';
import AdminRoute from '../shared/AdminRoute/AdminRoute';
import MyOrders from './MyOrders/MyOrders';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { isAdmin } = useAuth()

    const linkStyle = { textDecoration: 'none', padding: '.5em', fontWeight: 700, color: '#20273A' }

    return (
        <Box >
            <Grid container >
                <Grid
                    item md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        minHeight: '100vh',
                        p: '1em',
                        pt: '3em'
                    }}>
                    {/* All links for normal user */}
                    {!isAdmin && <>
                        <NavLink to={`${url}/my-orders`} style={linkStyle}>My Orders</NavLink>
                        <NavLink to={`${url}/review`} style={linkStyle}>Review</NavLink>

                    </>}

                    {/* All links for Admin*/}
                    {isAdmin && <>
                        <NavLink to={`${url}/manage-all-orders`} style={linkStyle}>Manage All Orders</NavLink>
                        <NavLink to={`${url}/add-product`} style={linkStyle}>Add Product</NavLink>
                        <NavLink to={`${url}/make-admin`} style={linkStyle}>Make Admin</NavLink>

                    </>}


                </Grid>
                <Grid item md={9} sx={{ backgroundColor: '#F3F3F3', minHeight: "10vh ", p: '2em', pt: '3em' }}>
                    <Switch>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/review`}>
                            <h2>Review</h2>
                        </Route>

                        {/* Routes for admin */}
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin />
                        </AdminRoute>

                    </Switch>

                </Grid>
            </Grid>

        </Box>

    );
};

export default Dashboard;