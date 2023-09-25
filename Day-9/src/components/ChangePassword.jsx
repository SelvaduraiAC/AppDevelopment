import React from 'react'
import SidePanel from './SidePanel'
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, InputAdornment, TextField } from '@mui/material'


export default function ChangePassword(props) {
    

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ width: 'calc(100% - 275px)', display: 'flex', justifyContent: 'center', mt: 20 }}>
                <Box component='form' sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField size='small' margin='normal' required fullWidth id='current-password' type='password' label='Current-Password' name='password'
                        sx={{ width: '400px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <LockIcon />                            
                                </InputAdornment>
                            ),
                        }} />
                    
                    <TextField size='small' margin='normal' required fullWidth id='new-password' type='password' label='New-Password' name='password'
                        sx={{ width: '400px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }} />
                    
                    <TextField size='small' margin='normal' required fullWidth id='confirm-password' type='password' label='Confirm-Password' name='password'
                        sx={{ width: '400px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }} />
                    
                    <Button sx={{ mt: 5 }}>Change</Button>
                </Box>
            </Box>
        </Box>
    )
}
