import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Avatar, Box, Button, IconButton, InputAdornment, Link, Paper, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import store from '../store/store';
import { setIsLogin, setUser, setUsers } from '../store/reducer';

export default function SignIn({ navigate, defaultAvatar }) {

    const [Visibility, setVisibility] = useState(false)

    const handleVisibility = () => {
        setVisibility(!Visibility)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const userDetails = {
            'username': data.get('username'),
            'email': data.get('email'),
            'password': data.get('password')
        }

        store.dispatch(setUsers(userDetails))
        store.dispatch(setUser(userDetails))

        store.dispatch(setIsLogin(true))
        navigate('/')
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 15 }}>
            <Paper sx={{ display: 'inline-block', padding: '4rem 3rem 3rem 3rem', overflow: 'hidden'}} elevation={3}>
                <Box sx={{
                    transformOrigin: '50% 100%',
                    '@keyframes rotation-intro': {
                        '0%': {
                            transform: 'rotate(90deg)'
                        },
                        '50%': {
                            transform: 'rotate(-5deg)'
                        },
                        '75%': {
                            transform: 'rotate(5deg)'
                        },
                        '100%': {
                            transform: 'rotate(0deg)'
                        }
                    },
                    animation: 'rotation-intro 0.45s ease-in-out'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem' }}>
                        <Avatar src={defaultAvatar} sx={{ width: 96, height: 96 }} />
                    </Box>
                    <Box component='form' sx={{ width: 400 }} onSubmit={handleSubmit}>
                        <TextField margin='normal' required fullWidth id='username' label='Username' name='username' autoComplete='username' autoFocus
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton>
                                            <PersonIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />
                        <TextField margin='normal' required fullWidth id='email' type='email' label='Email-ID' name='email' autoComplete='email'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton>
                                            <EmailIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />

                        <TextField margin='normal' required fullWidth id='password' type={Visibility ? 'text' : 'password'} label='Password' name='password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleVisibility}>
                                            {
                                                Visibility ? (
                                                    <VisibilityIcon />
                                                ) : (
                                                    <VisibilityOffIcon />
                                                )
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link sx={{ marginTop: '1.75rem', '&:hover': { color: '#1976FA' } }} underline='hover' href='/log-in'>Already have an account? Log in</Link>
                            <Button type='submit' sx={{ marginTop: '2rem' }} variant='contained'>Sign up</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
