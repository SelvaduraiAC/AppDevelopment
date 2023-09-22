import React from 'react'
import SidePanel from './SidePanel'
import { Box, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Orders() {
    

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ height: '100%', padding: 3 }}>
                <Button color='error' variant='contained' startIcon={ <AddShoppingCartIcon /> }>New Order</Button>
            </Box>
        </Box>
    )
}
