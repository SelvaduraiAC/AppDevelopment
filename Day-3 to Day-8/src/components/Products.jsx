import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'

export default function Products(props) {
    
    const items = [
        {
            name: 'apple',
            img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481'
        }
    ]

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    items?.map((item, i) => (
                        <Item key={i} item={item} />
                    ))
                }
            </Grid>
        </>
    )
}
