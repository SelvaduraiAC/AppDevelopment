import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import userPng from '../data/images/user-avatar.png'
import workerPng from '../data/images/worker-avatar.png'
import EastIcon from '@mui/icons-material/East';
import orderImg from '../data/images/person-shopping.jpg'
import favImg from '../data/images/pngwing.com.png'
import SidePanel from './SidePanel';
import store from '../store/store';

export default function Dashboard(props) {
    
    const workers = store.getState().store.workers
    const worker = store.getState().store.worker
    const orders = store.getState().store.orders
    const users = store.getState().store.users

    const countWorkers = workers.filter(worker => { 
            return !worker.isAdmin
        }).length

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ m: 5, display: 'flex', gap: 5 }}>
                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Total Orders'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{ orders.length }</Typography>
                            }
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

                {
                    worker.isAdmin &&
                    <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                        <CardActionArea>
                            <CardHeader
                                title='Workers'
                                action={
                                    <IconButton>
                                        <EastIcon />
                                    </IconButton>
                                }
                                subheader={
                                    <Typography>{countWorkers}</Typography>
                                }
                            />
                            <CardMedia
                                component='img'
                                height='180'
                                image={workerPng}
                                sx={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography variant='body2'>
                                    This order card is used to track and manage individual orders. It includes all of the relevant information about the orders you have made.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                }

                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Users'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{users.length}</Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            image={userPng}
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
