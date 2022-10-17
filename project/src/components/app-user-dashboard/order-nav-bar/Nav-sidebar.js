import React from 'react'
import {Box} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Nav = () => {
  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', position: 'relative', top: '25px', left: '15px', gap: '265px'}}>
        <MenuIcon/>
        <ShoppingCartIcon style={{backgroundColor: '#e59500', borderRadius: '15px', width: '30px', padding: '5px'}}/>
    </Box>
    
    </>
  )
}

export default Nav