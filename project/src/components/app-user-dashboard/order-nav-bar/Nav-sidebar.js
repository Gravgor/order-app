import React from 'react'
import {Box, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Nav = ({location}) => {
  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', position: 'relative', top: '25px', left: '15px', gap: '85px'}}>
        <MenuIcon/>
        <Typography sx={{color: 'gray'}}><LocationOnIcon style={{position: 'relative', top: '5px'}}/>{location}</Typography>
        <ShoppingCartIcon style={{backgroundColor: '#e59500', borderRadius: '15px', width: '30px', padding: '5px'}}/>
    </Box>
    
    </>
  )
}

export default Nav