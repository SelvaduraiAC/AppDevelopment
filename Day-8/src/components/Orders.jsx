import React, { useState } from 'react'
import SidePanel from './SidePanel'
import { Backdrop, Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NewOrder from './NewOrder';
import store from '../store/store';


export default function Orders() {
    const [open, setOpen] = useState(false)
    
    const headCells = [
        {
            id: 'invoice_id',
            numeric: true,
            disablePadding: true,
            label: 'Invoice ID'
        },
        {
            id: 'date',
            numeric: false,
            disablePadding: false,
            label: 'Date'
        },
        {
            id: 'price',
            numeric: true,
            disablePadding: true,
            label: 'Price (in ₹)'
        }
    ]

    const rows = store.getState().store.orders

    return (
        <Box sx={{ height: '100%', width: '100%', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ height: '100%', width: 'calc(100% - 775px)' }}>
                <Button onClick={() => setOpen(true)} sx={{ mt: 5, ml: 4 }} color='error' variant='contained' startIcon={<AddShoppingCartIcon />}>New Order</Button>
                {
                    open &&
                    <Backdrop
                        sx={{ color: '#fff', zIndex: 1 }}
                        open={open}
                        >
                        <NewOrder setOpen={setOpen} />
                    </Backdrop>
                }
                
                <Box sx={{ mt: 8, ml: 3, mr: 3, overflowY: 'scroll', maxHeight: '700px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    headCells?.map((headCell, id) => (
                                        <TableCell
                                            key={id}
                                            align='left'
                                            padding={headCell.disablePadding ? 'none' : 'normal'}
                                        >
                                            { headCell.label }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows?.map((row, id) => (
                                    <TableRow key={id} hover >
                                        <TableCell scope='row'>{row?.id}</TableCell>
                                        <TableCell>{row?.date}</TableCell>
                                        <TableCell>{row?.price}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Box>
            </Box>
            <Paper sx={{ width: '500px', height: '100%' }} elevation={3}>

            </Paper>
        </Box>
    )
}
