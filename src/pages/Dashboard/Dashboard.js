import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Dashboard.css'
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { isAdmin } = useAuth()

    const linkStyle = { textDecoration: 'none', padding: '.5em', fontWeight: 700, color: '#20273A' }

    return (
        <Box >
            <Grid container >
                <Grid
                    item md={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        minHeight: '100vh',
                        p: '1em',
                        pt: '3em'
                    }}
                >{!isAdmin && <>
                    <NavLink to={`${url}/my-orders`} style={linkStyle}>My Orders</NavLink>
                    <NavLink to={`${url}/review`} style={linkStyle}>Review</NavLink>

                </>}


                </Grid>
                <Grid item md={10} sx={{ backgroundColor: '#F3F3F3', minHeight: "10vh ", p: '2em', pt: '3em' }}>
                    <Switch>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/review`}>
                            <h2>Review</h2>
                        </Route>
                    </Switch>

                </Grid>
            </Grid>

        </Box>

    );
};

export default Dashboard;