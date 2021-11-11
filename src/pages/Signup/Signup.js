import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import GoogleIcon from '@mui/icons-material/Google';


const Signup = () => {
    const { signUpWithEmailPass, signInWithGoogle, error, isLoading } = useAuth()
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

    const handleSignUp = e => {
        e.preventDefault()

        const displayName = userData.firstName + ' ' + userData.lastName
        const email = userData.email;
        const pass = userData.password

        signUpWithEmailPass(displayName, email, pass, history, redirectURI)
    }

    return (
        <div className='signin-reg'>
            {isLoading ? <CircularProgress />
                :
                <form onSubmit={handleSignUp} style={{ maxWidth: '300px' }}>
                    <Typography
                        sx={{ fontWeight: 700, textAlign: 'center' }}
                        variant='h5'
                    >Sign Up</Typography>


                    <TextField
                        required
                        sx={{ width: '100%', mt: '1em' }}
                        label="First Name"
                        size="small"
                        name='firstName'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        sx={{ width: '100%', mt: '1em' }}
                        label="Last Name"
                        size="small"
                        name='lastName'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        type="email"
                        sx={{ width: '100%', mt: '1em' }}
                        label="Email"
                        size="small"
                        name='email'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        type='password'
                        sx={{ width: '100%', mt: '1em' }}
                        label="Password"
                        size="small"
                        name='password'
                        onBlur={handleOnBlur}
                    />
                    <Button
                        sx={{ width: '100%', mt: '1em' }}
                        type="submit"
                        variant='contained'
                    // onClick={handleSignUp}
                    > Sign Up</Button>
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }

                    <Button
                        sx={{ mt: '2em', width: '100%', fontWeight: 700 }}
                        variant='outlined'
                        startIcon={<GoogleIcon />}
                        onClick={() => signInWithGoogle(history, redirectURI)}
                    > Continue with Google</Button>

                    <Typography variant='p' sx={{ mt: '1em' }}>
                        Already have a account?
                        <Link to='/signin'>Sign in</Link>
                    </Typography>

                </form>
            }
        </div>
    );
};

export default Signup;