import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div className='signin-reg'>
            <form style={{ maxWidth: '300px' }}>
                <Typography
                    sx={{ fontWeight: 700, textAlign: 'center' }}
                    variant='h5'
                >Sign Up</Typography>


                <TextField
                    sx={{ width: '100%', mt: '1em' }}
                    label="First Name"
                    size="small"
                />
                <TextField
                    sx={{ width: '100%', mt: '1em' }}
                    label="Last Name"
                    size="small"
                />
                <TextField
                    sx={{ width: '100%', mt: '1em' }}
                    label="Email"
                    size="small"
                />
                <TextField
                    sx={{ width: '100%', mt: '1em' }}
                    label="Password"
                    size="small"
                />
                <Button
                    sx={{ width: '100%', mt: '1em' }}
                    type='submit'
                    variant='contained'
                > Sign Up</Button>

                <Button
                    sx={{ mt: '2em', width: '100%', fontWeight: 700 }}
                    variant='outlined'
                > Continue with Google</Button>

                <Typography variant='p' sx={{ mt: '1em', fontWeight: 700 }}>
                    Already have a account?
                    <Link to='/signin'>Sign in</Link>
                </Typography>

            </form>
        </div>
    );
};

export default Signup;