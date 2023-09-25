import { Avatar, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import SidePanel from './SidePanel'
import store from '../store/store'

export default function Users({ setIsLogin, defaultAvatar }) {
    
    const headCells = [
        {
            id: 'customer',
            numeric: false,
            disablePadding: false,
            label: 'Customer'
        },
        {
            id: 'contact',
            numeric: false,
            disablePadding: false,
            label: 'Contact'
        },
        {
            id: 'total-orders',
            numeric: true,
            disablePadding: true,
            label: 'Total Orders'
        }
    ]

    const rows = store.getState().store.users

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel setIsLogin={setIsLogin} />
            <Box sx={{ height: '100%', width: 'calc(100% - 320px)', mt: 8, ml: 3, mr: 3, overflowY: 'scroll', maxHeight: '780px' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                headCells?.map((headCell, id) => (
                                    <TableCell
                                        key={id}
                                        align='left'
                                        padding={headCell.disablePadding ? 'none' : 'normal'}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows?.map((row, id) => (
                                <TableRow key={id} hover >
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }} scope='row'>
                                        <Avatar src={defaultAvatar} />
                                        {row?.username}
                                    </TableCell>
                                    <TableCell>{row?.contact}</TableCell>
                                    <TableCell>{row?.total_orders}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </Box>
    )
}
