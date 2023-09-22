import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SidePanel from './SidePanel'

export default function Users({ setIsLogin, defaultAvatar }) {
    

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel setIsLogin={setIsLogin} />
            <List sx={{ width: '40%' }}>
                <ListItem
                    alignItems='flex-start'
                    secondaryAction={
                        <IconButton edge='end'><Typography>86</Typography></IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar src={defaultAvatar} />
                    </ListItemAvatar>
                    <ListItemText primary='User' />
                </ListItem>
            </List>
        </Box>
    )
}
