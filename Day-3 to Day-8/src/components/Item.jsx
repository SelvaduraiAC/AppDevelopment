import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function Item({ item }) {
    

    return (
        <>
            <Card>
                <CardMedia
                    sx={{ height: 200, width: 250 }}
                    image={item?.img}
                    title={item?.name}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {item.name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
