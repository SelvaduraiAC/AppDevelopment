import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import orderImg from '../data/images/person-shopping.jpg'
import favImg from '../data/images/pngwing.com.png'
import SidePanel from './SidePanel';

export default function Dashboard(props) {
    

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ height: '100%', width: '100%', padding: 5, display: 'flex', gap: 5 }}>
                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Total Orders'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={4861}
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            image={orderImg}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This order card is used to track and manage individual orders. It includes all of the relevant information about the orders you have made.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Users'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={456}
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            image={favImg}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This order card is used to track and manage individual orders. It includes all of the relevant information about the orders you have made.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Workers'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={`${34}/${56}`}
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            image={favImg}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This order card is used to track and manage individual orders. It includes all of the relevant information about the orders you have made.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    )
}
