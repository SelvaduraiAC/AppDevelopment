import { AppBar, Avatar, Badge, Box, Button, Divider, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import store from '../store/store';
import { setIsLogin, setWorker } from '../store/reducer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function NavBar({ defaultAvatar }) {
    // const location = useLocation()
    const [query, setQuery] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    // const handleChange = () => {
    //     const products = document.getElementById('search').value
    //     if (products !== null) setQuery(products)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const products = document.getElementById('search').value
        setQuery(products)

        navigate('/products')
    }

    return (
        <AppBar position='sticky' sx={{ background: 'white' }} elevation={3} >
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography
                        variant='h6'
                        noWrap
                        component={Link}
                        to='/'
                        sx={{
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: '32px',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none'
                        }}>
                        SuperMarket
                    </Typography>
                    <Box mx={6}>
                        {
                            store.getState().store.isLogin &&
                            <Link style={{
                                fontSize: '16px',
                                fontFamily: 'monospace',
                                letterSpacing: '.2rem',
                                color: 'black',
                                textDecoration: 'none',
                                marginRight: 12,
                                marginLeft: 12
                            }}
                            to='/products'
                            >Products</Link>
                        }

                        <Link style={{
                            fontSize: '16px',
                            fontFamily: 'monospace',
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                            marginRight: 12,
                            marginLeft: 12
                        }}
                        >About</Link>
                    </Box>
                </Box>
                {
                    // (location.pathname === 'log-in' || location.pathname === 'sign-in') &&
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Box component='form'>
                            <TextField variant='standard' size='small' type='search' id='search' label='Search products' sx={{ mr: 16, width: 600 }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton type='submit' onClick={handleSubmit}>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                        </Box> */}
                        <Box sx={{ mr: 2, width: '200px', display: 'flex', alignItems: 'center', justifyContent: store.getState().store.isLogin ? 'end' : 'space-between' }} >
                            {
                                store.getState().store.isLogin ? (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
                                            <Typography sx={{ fontFamily: 'monospace', letterSpacing: '.1rem', color: 'black' }}>{store.getState().store.worker.username}</Typography>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar src={defaultAvatar} sx={{ width: 36, height: 36 }} />
                                                </IconButton>
                                            </Tooltip>
                                            {/* <IconButton sx={{ marginLeft: 2 }}>
                                                <Badge badgeContent={0} color='error'>
                                                    <ShoppingCartIcon fontSize='large' />
                                                </Badge>
                                            </IconButton> */}
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            {/* <MenuItem sx={{ fontFamily: 'monospace', letterSpacing: '.1rem', marginRight: 2, color: 'black' }} onClick={() => navigate('/profile')}>
                                                Profile
                                            </MenuItem>
                                            <Divider /> */}
                                            <MenuItem sx={{ fontFamily: 'monospace', letterSpacing: '.1rem', marginRight: 2, color: 'black' }} onClick={() => navigate('/dashboard')}>
                                                My Dashboard
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem sx={{ fontFamily: 'monospace', letterSpacing: '.15rem', marginRight: 2, color: 'red' }}
                                                onClick={() => {
                                                    store.dispatch(setIsLogin(false))
                                                    store.dispatch(setWorker({ ...store.getState().store.worker, present: false, time: new Date().toUTCString() }))
                                                    navigate('/')
                                            }}>
                                                LogOut
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                ) : (
                                    <>
                                        <Button component={Link} to='/log-in' sx={{ color: 'black', fontWeight: 700 }} variant='standard'>Log in</Button>
                                        <Button component={Link} to='/sign-up' sx={{ backgroundColor: 'black', '&:hover': { color: 'black', backgroundColor: 'white' } }} variant='contained'>Sign up</Button>
                                    </>
                                )
                            }
                        </Box>
                    </Box>
                }
            </Toolbar>
        </AppBar>
    )
}
