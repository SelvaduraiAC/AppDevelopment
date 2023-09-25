import React from 'react'
import { Box, Typography } from '@mui/material'
import bg from '../data/images/md-bg.png'

export default function Home() {


    return (
        <>
            <Box sx={{ width: '100%', height: '100%', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', filter: 'saturate(62%)' }}>
                <Typography sx={{
                    mr: 16,
                    textAlign: 'right',
                    fontWeight: 700,
                    padding: '1.75rem',
                    '@keyframes slide-down': {
                        '0%': {
                            transform: 'translateY(-25px)',
                            opacity: 0
                        },
                        '100%': {
                            transform: 'translateY(0px)',
                            opacity: 1
                        }
                    },
                    animation: 'slide-down 0.6s ease-in-out'
                }} variant='h1'>
                    SuperMarket
                    <Typography variant='h3' sx={{ fontWeight: 500 }}>Management System</Typography>
                </Typography>
            </Box>
        </>
    )
}
