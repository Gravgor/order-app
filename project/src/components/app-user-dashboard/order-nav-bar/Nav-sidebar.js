import React from 'react'
import {Box, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Cart from '../order-cart/cart';


const Nav = ({location}) => {
  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', position: 'relative', top: '25px', left: '15px', gap: '65px'}}>
        <MenuIcon/>
        <Typography variant='p' style={{fontWeight: 'bold', textAlign: 'center'}}>pooperEats</Typography>
        <Typography sx={{color: 'gray'}}><LocationOnIcon style={{position: 'relative', top: '5px'}}/>{location}</Typography>
    </Box>
    
    </>
  )
}

export default Nav