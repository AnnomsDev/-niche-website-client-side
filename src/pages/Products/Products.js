import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../shared/Navigation/Product/Product';


// const products = [
//     {
//         title: 'DJI Phantom 4 Pro',
//         img: 'https://m.media-amazon.com/images/I/41NTG6JBXqL._AC_SL1200_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion.The standard controller features a smartphone holder. You will need to install the DJI GO 4 App on your phone to fly your drone.The Phantom 4 Pro V2.0 is a beast when it comes to flight performance. It has a maximum flight speed of 72 kph and an 8km transmission range with 1080p livestreaming and automatic frequency switching thanks to OcuSync 2.0 The Phantom 4 Pro V2.0 offers Intelligent Flight Modes such as TapFly, ActiveTrack, Draw mode, Gesture mode, and more. Draw lets you control the flight path with a fixed altitude simply by creating a route on the screen.`
//     },
//     {
//         title: 'Autel EVO II Series',
//         img: 'https://m.media-amazon.com/images/I/51jprIqT7xL._AC_SL1000_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `40 MINUTES OF STABLE FLIGHT TIME: From inspecting electrical cell towers to surveying property lines, the EVO II was designed to provide enough flight time to capture all the data needed.
//         LIGHTWEIGHT FOLDABLE DESIGN: Deployed in under 30 seconds, the 2.5lb EVO II is ideal for rapid deploying missions with a minimal footprint both in the air and for seamless transport.`
//     },
//     {
//         title: 'DJI Phantom 4 Pro',
//         img: 'https://m.media-amazon.com/images/I/41NTG6JBXqL._AC_SL1200_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion.The standard controller features a smartphone holder. You will need to install the DJI GO 4 App on your phone to fly your drone.The Phantom 4 Pro V2.0 is a beast when it comes to flight performance. It has a maximum flight speed of 72 kph and an 8km transmission range with 1080p livestreaming and automatic frequency switching thanks to OcuSync 2.0 The Phantom 4 Pro V2.0 offers Intelligent Flight Modes such as TapFly, ActiveTrack, Draw mode, Gesture mode, and more. Draw lets you control the flight path with a fixed altitude simply by creating a route on the screen.`
//     },
//     {
//         title: 'Autel EVO II Series',
//         img: 'https://m.media-amazon.com/images/I/51jprIqT7xL._AC_SL1000_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `40 MINUTES OF STABLE FLIGHT TIME: From inspecting electrical cell towers to surveying property lines, the EVO II was designed to provide enough flight time to capture all the data needed.
//         LIGHTWEIGHT FOLDABLE DESIGN: Deployed in under 30 seconds, the 2.5lb EVO II is ideal for rapid deploying missions with a minimal footprint both in the air and for seamless transport.`
//     },
//     {
//         title: 'DJI Phantom 4 Pro',
//         img: 'https://m.media-amazon.com/images/I/41NTG6JBXqL._AC_SL1200_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion.The standard controller features a smartphone holder. You will need to install the DJI GO 4 App on your phone to fly your drone.The Phantom 4 Pro V2.0 is a beast when it comes to flight performance. It has a maximum flight speed of 72 kph and an 8km transmission range with 1080p livestreaming and automatic frequency switching thanks to OcuSync 2.0 The Phantom 4 Pro V2.0 offers Intelligent Flight Modes such as TapFly, ActiveTrack, Draw mode, Gesture mode, and more. Draw lets you control the flight path with a fixed altitude simply by creating a route on the screen.`
//     },
//     {
//         title: 'Autel EVO II Series',
//         img: 'https://m.media-amazon.com/images/I/51jprIqT7xL._AC_SL1000_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `40 MINUTES OF STABLE FLIGHT TIME: From inspecting electrical cell towers to surveying property lines, the EVO II was designed to provide enough flight time to capture all the data needed.
//         LIGHTWEIGHT FOLDABLE DESIGN: Deployed in under 30 seconds, the 2.5lb EVO II is ideal for rapid deploying missions with a minimal footprint both in the air and for seamless transport.`
//     },
//     {
//         title: 'DJI Phantom 4 Pro',
//         img: 'https://m.media-amazon.com/images/I/41NTG6JBXqL._AC_SL1200_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion.The standard controller features a smartphone holder. You will need to install the DJI GO 4 App on your phone to fly your drone.The Phantom 4 Pro V2.0 is a beast when it comes to flight performance. It has a maximum flight speed of 72 kph and an 8km transmission range with 1080p livestreaming and automatic frequency switching thanks to OcuSync 2.0 The Phantom 4 Pro V2.0 offers Intelligent Flight Modes such as TapFly, ActiveTrack, Draw mode, Gesture mode, and more. Draw lets you control the flight path with a fixed altitude simply by creating a route on the screen.`
//     },
//     {
//         title: 'Autel EVO II Series',
//         img: 'https://m.media-amazon.com/images/I/51jprIqT7xL._AC_SL1000_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `40 MINUTES OF STABLE FLIGHT TIME: From inspecting electrical cell towers to surveying property lines, the EVO II was designed to provide enough flight time to capture all the data needed.
//         LIGHTWEIGHT FOLDABLE DESIGN: Deployed in under 30 seconds, the 2.5lb EVO II is ideal for rapid deploying missions with a minimal footprint both in the air and for seamless transport.`
//     },
//     {
//         title: 'DJI Phantom 4 Pro',
//         img: 'https://m.media-amazon.com/images/I/41NTG6JBXqL._AC_SL1200_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion.The standard controller features a smartphone holder. You will need to install the DJI GO 4 App on your phone to fly your drone.The Phantom 4 Pro V2.0 is a beast when it comes to flight performance. It has a maximum flight speed of 72 kph and an 8km transmission range with 1080p livestreaming and automatic frequency switching thanks to OcuSync 2.0 The Phantom 4 Pro V2.0 offers Intelligent Flight Modes such as TapFly, ActiveTrack, Draw mode, Gesture mode, and more. Draw lets you control the flight path with a fixed altitude simply by creating a route on the screen.`
//     },
//     {
//         title: 'Autel EVO II Series',
//         img: 'https://m.media-amazon.com/images/I/51jprIqT7xL._AC_SL1000_.jpg',
//         price: 1949,
//         camera: '20 MP, 4K Video',
//         flight_time: '30 Minutes',
//         details: `40 MINUTES OF STABLE FLIGHT TIME: From inspecting electrical cell towers to surveying property lines, the EVO II was designed to provide enough flight time to capture all the data needed.
//         LIGHTWEIGHT FOLDABLE DESIGN: Deployed in under 30 seconds, the 2.5lb EVO II is ideal for rapid deploying missions with a minimal footprint both in the air and for seamless transport.`
//     },
// ]


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products?limit=6')
            .then(res => setProducts(res.data))
    }, [])


    return (
        <Box
            sx={{ mx: '9vw', my: '5em' }}
        >
            <Typography
                variant='h4'
                sx={{ fontWeight: 800, color: '#20273A', my: '1em' }}
            >PRODUCTS</Typography>
            <Grid container spacing={{ xs: 2, md: '3em' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map((product, index) => (
                        <Grid item xs={4} sm={4} md={4} >
                            <Product key={index} {...product} />
                        </Grid>
                    ))
                }



            </Grid>



        </Box>
    );
};

export default Products;