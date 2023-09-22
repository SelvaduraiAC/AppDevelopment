import React from 'react'
import bg from '../data/images/sm-bg.jpg'
import { Box, Typography } from '@mui/material'

export default function Home({ defaultAvatar }) {


    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <Typography sx={{ padding: '1.75rem' }} variant='h1'>
                    SuperMarket
                    <Typography variant='h2'>App</Typography>
                </Typography>
            </Box>
        </>
    )
}
