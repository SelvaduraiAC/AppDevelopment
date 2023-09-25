import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Divider, IconButton, List, ListItem, ListItemText, TextField, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import store from '../store/store';
import { setOrders, setProducts, setUsers } from '../store/reducer';


export default function NewOrder({ setOpen }) {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0.00)
    const [id, setId] = useState(null)
    const [customer, setCustomer] = useState(null)
    const [contact, setContact] = useState(null)

    const options = store.getState().store.products

    const handleRemove = (item) => {
        const newCart = cart.filter(function (product) {
            return product !== item
        })
        
        setCart(newCart)
    }

    const calculateAmount = () => {
        let price = 0.00

        cart?.map(item => (
            price += item?.price * item?.quantity
        ))

        setTotalPrice(price)
    }

    const createOrder = () => {
        let outOfStocks = []

        cart?.map(item => {
            if (item?.quantity > options[item.id - 1].stock) {
                outOfStocks.push(item.title)
            }
        })

        if (outOfStocks.length !== 0) {
            alert(`No sufficient stocks for products: ${outOfStocks}`)
        }
        else {
            store.dispatch(setProducts(cart))
    
            const d = new Date()
            const date = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
    
            const order = {}
    
            order['id'] = id
            order['date'] = date
            order['price'] = totalPrice
            order['selected'] = false
    
            store.dispatch(setOrders(order))
    
            let cust = {}
            cust['username'] = customer
            cust['contact'] = contact
            cust['total_orders'] = 1
    
            store.dispatch(setUsers(cust))
            setOpen(false)
        }
    }

    useEffect(() => {
        calculateAmount()
    }, [cart])

    return (
        <Box sx={{ width: '500px', height: '650px', backgroundColor: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title='close'>
                    <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ pr: 3, pl: 3 }}>
                <Box>
                    <TextField onChange={(e) => setId(e.target.value)} size='small' type='number' id='invoice-id' label='Invoice ID' name='invoice-id' autoFocus required />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setCustomer(e.target.value)} size='small' id='username' label='Customer' name='username' required />
                        <TextField onChange={(e) => setContact(e.target.value)} size='small' id='contact' label='Contact' name='contact' required />
                    </Box>
                </Box>
                <Autocomplete
                    id='products-autocomplete'
                    size='small'
                    options={options}
                    getOptionLabel={option => option.title}
                    sx={{ mt: 3 }}
                    onChange={(e, value) => {
                        if (value !== null) {
                            const item = {
                                id: value['id'],
                                title: value['title'],
                                price: value['price'],
                                quantity: 1
                            }
                            setCart([...cart, item])
                        }
                    }}
                    renderInput={ params => (
                        <TextField { ...params } size='small' id='products' label='Search Products' name='products' required />
                    )}
                />
                <List sx={{ height: '290px', overflowY: 'scroll' }}>
                    {
                        cart?.map((item, id) => (
                            <>
                                <ListItem
                                    key={id}
                                    secondaryAction={
                                        <Tooltip title='delete'>
                                            <IconButton onClick={() => handleRemove(item)} edge='end'>
                                                <DeleteForeverIcon color='error' />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                >
                                    <ListItemText
                                        sx={{ color: 'black' }}
                                        primary={item?.title}
                                        secondary={`x${item?.quantity}`}
                                    />
                                </ListItem>
                                <Divider />
                            </>
                        ))
                    }
                </List>
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: 'black' }}>Total Amount: { totalPrice }</Typography>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={createOrder}
                        color='error'
                        variant='contained'
                    >Generate Reciept</Button>
                </Box>
            </Box>
        </Box>
    )
}
