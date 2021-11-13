import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const Subscrive = () => {
    return (
        <Box
            sx={{
                mx: '9vw',
                mb: '7em',
                borderRadius: '5px',
                p: ' 3em 2em',
                boxShadow: '0 0 10px 4px #00000014',
                minHeight: '100%'
            }}
        >
            <Grid container spacing={3}>
                {/* left */}
                <Grid item md={6} xs={12}>
                    <Typography
                        variant='h4'
                        sx={{ fontWeight: 800, color: '#20273A', my: '10px', fontSize: '2em' }}
                    >
                        <span style={{ color: '#1565C0' }}>SUBSCRIBE </span>
                        TO OUR NEWSLETTER
                    </Typography>
                    <Typography
                        variant='p'
                        sx={{ color: 'gray' }}
                    >
                        Subscribe to our newsletter to get notify amazing offers and know about out new products. Stay connected with us
                    </Typography>
                </Grid>

                {/* Right*/}
                <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{ my: 'auto' }}
                >
                    <TextField
                        sx={{ width: '70%', mb: '.5em' }}
                        label="Enter your Email"
                        size="small"
                    />
                    <br />
                    <Button
                        variant="contained"
                        // size='small'
                        startIcon={<MarkEmailReadIcon />}
                    >SUBSCRIBE</Button>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Subscrive;