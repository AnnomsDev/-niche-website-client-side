import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Alert, Button, TextField, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import useAuth from '../../../Hook/useAuth';
import axios from 'axios';



const MakeAdmin = () => {
    const { user } = useAuth()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const handleOnChange = e => {
        setEmail(e.target.value)

    }

    const handleMakeAdmin = e => {
        axios.put(`https://shrouded-atoll-11239.herokuapp.com/mkadmin/${email}`, {
            'requester': user.email
        })
            .then(res => {
                const { matchedCount, modifiedCount } = res.data
                if (!matchedCount) {
                    setError('Email not found on database')
                }
                else {
                    if (modifiedCount) {
                        setError('')
                        setIsSuccess(true)
                    } else {
                        setError(`${email} is already an admin `)
                        setIsSuccess(false)
                    }
                }
            }).catch(err => console.log('got an error', err))

        e.target.reset();
        e.preventDefault()
    }


    return (
        <Box sx={{ color: '#20273A' }}>
            <Typography sx={{ fontWeight: 700 }} variant='h5'>Make Admin</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    label="Enter Email"
                    required
                    type='email'
                    size="small"
                    sx={{ width: '50%', mt: '2em', mb: '.5em' }}
                    onChange={handleOnChange}
                />
                <br />
                <Button
                    variant="contained"
                    type='submit'
                    startIcon={<AdminPanelSettingsIcon />}
                >Make Admin</Button>
            </form>

            {error && <Alert severity="error">{error}</Alert>}
            {isSuccess && <Alert severity="success">{email} is set to admin successfully</Alert>}
        </Box>
    );
};

export default MakeAdmin;