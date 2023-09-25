import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function Item({ item }) {
    

    return (
        <>
            <Card>
                <CardMedia
                    sx={{ height: 200, width: 250 }}
                    image={item?.img}
                    title={item?.title}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant='h5' component='div'>
                            {item?.title}
                        </Typography>
                        <CardActions>
                            <Button variant='contained' sx={{ color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'white', color: 'black' }, borderRadius: 2 }}>Add</Button>
                        </CardActions>
                    </Box>
                    <Typography variant='body2'>Stock: { item?.stock }</Typography>
                </CardContent>
            </Card>
        </>
    )
}
