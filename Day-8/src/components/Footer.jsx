import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import privacyPolicyPdf from '../data/privacy-policy.pdf'


export default function Footer(props) {
    

    return (
        <Paper component='footer' elevation={24} sx={{ height: '64px', width: '100%', bottom: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', color: 'grey', ml: 6 }}>
                Contact us:&nbsp;<Link style={{ display: 'flex', alignItems: 'center' }} to='https://wa.me/9342222407' target='_blank'><WhatsAppIcon sx={{ color: 'grey', '&:hover': { color: '#25D366' } }} /></Link>
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='body2' color='grey'>Copyright © SuperMarket {new Date().getFullYear()}</Typography>
                <Link to={privacyPolicyPdf} target='_blank' style={{ fontSize: '12px', color: 'grey' }}>Privacy Policy</Link>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mr: 6 }}>
                <Link to='https://www.instagram.com/_trickxer_/?hl=en' target='_blank' ><InstagramIcon sx={{ color: 'grey', '&:hover': { color: '#C13584' } }} /></Link>
                <Link to='' target='_blank'><FacebookIcon sx={{ color: 'grey', '&:hover': { color: '#4267B2' } }} /></Link>
                <Link to='' target='_blank'><TwitterIcon sx={{ color: 'grey', '&:hover': { color: '#1DA1F2' } }} /></Link>
            </Box>
        </Paper>
    )
}
