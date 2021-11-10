import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'

const Signin = () => {
    return (
        <div className='signin-reg'>
            <form style={{ maxWidth: '300px' }}>
                <Typography
                    sx={{ fontWeight: 700, textAlign: 'center' }}
                    variant='h5'
                >Sign In</Typography>


                <TextField
                    sx={{ width: '100%', mt: '1em' }}
                    label="Email"
                    size="small"
                />
                <TextField
                    sx={{ width: '100%', mt: '2em' }}
                    label="Password"
                    size="small"
                />
                <Button
                    sx={{ width: '100%', mt: '1em' }}
                    type='submit'
                    variant='contained'
                > Sign In</Button>

                <Button
                    sx={{ mt: '2em', width: '100%', fontWeight: 700 }}
                    variant='outlined'
                > Continue with Google</Button>

                <Typography variant='p' sx={{ m: '1em' }}>
                    Don't have a account?
                    <Link to='/signup'>Sign Up</Link>
                </Typography>

            </form>
        </div>
    );
};

export default Signin;