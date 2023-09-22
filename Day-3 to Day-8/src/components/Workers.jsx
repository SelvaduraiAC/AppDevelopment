import React from 'react'
import SidePanel from './SidePanel'
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Workers({ setIsLogin, defaultAvatar }) {
    

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel setIsLogin={setIsLogin} />
            <List sx={{ width: '40%' }}>
                <ListItem
                    alignItems='flex-start'
                    secondaryAction={
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button variant='contained' color='success' endIcon={<CheckCircleIcon />}>Present</Button>
                            <Button variant='contained' color='error' endIcon={<CancelIcon />}>Absent</Button>
                        </Box>
                    }
                >
                    <ListItemAvatar>
                        <Avatar src={defaultAvatar} />
                    </ListItemAvatar>
                    <ListItemText primary='Worker' />
                </ListItem>
            </List>
        </Box>
    )
}
