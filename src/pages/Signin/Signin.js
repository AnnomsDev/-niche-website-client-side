import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import './Signin.css'

const Signin = () => {
    const { signInWithGoogle, sigInWithEmailPass, isLoading, error } = useAuth();
    const [userData, setUserData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const redirectURI = location?.state?.from || '/';

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newUserData = { ...userData }
        newUserData[field] = value
        setUserData(newUserData)
    }

    const handleSignIn = e => {
        e.preventDefault();

        const email = userData.email
        const pass = userData.password
        sigInWithEmailPass(email, pass, history, redirectURI)
    }


    return (
        <div className='signin-reg'>
            {isLoading ? <CircularProgress />
                :


                <form onSubmit={handleSignIn} style={{ maxWidth: '300px' }}>
                    <Typography
                        sx={{ fontWeight: 700, textAlign: 'center' }}
                        variant='h5'
                    >Sign In</Typography>


                    <TextField
                        required
                        sx={{ width: '100%', mt: '1em' }}
                        label="Email"
                        size="small"
                        name='email'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        sx={{ width: '100%', mt: '1em' }}
                        label="Password"
                        size="small"
                        type='password'
                        name='password'
                        onBlur={handleOnBlur}
                    />
                    <Button
                        sx={{ width: '100%', mt: '1em' }}
                        type='submit'
                        variant='contained'
                    > Sign In</Button>
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }

                    <Button
                        sx={{ mt: '2em', width: '100%', fontWeight: 700 }}
                        variant='outlined'
                        onClick={() => signInWithGoogle(history, redirectURI)}
                        startIcon={<GoogleIcon />}
                    > Continue with Google</Button>

                    <Typography variant='p' sx={{ m: '1em' }}>
                        Don't have a account?
                        <Link to='/signup'>Sign Up</Link>
                    </Typography>

                </form>
            }
        </div>
    );
};

export default Signin;