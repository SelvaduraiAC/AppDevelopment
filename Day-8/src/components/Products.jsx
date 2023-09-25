import { Box, Grid } from '@mui/material'
import React from 'react'
import Item from './Item'
import store from '../store/store'

export default function Products(props) {

    const items = store.getState().store.products

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 8, pb: 8, pl: 12, pr: 12 }}>
            <Grid container rowSpacing={1} gap={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    items?.map((item, i) => (
                        <Item key={i} item={item} />
                    ))
                }
            </Grid>
        </Box>
    )
}
