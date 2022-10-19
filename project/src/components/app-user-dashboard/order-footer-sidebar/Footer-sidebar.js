import React from 'react'

import {Box, Typography} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';

const Footer = () => {
  return (
    <div style={{position: 'relative', top: '73px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: '#fff', height: '50px', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', gap: '40px', borderLeft: '1px solid #CCDFE9', borderRight: '1px solid #CCDFE9', borderBottom: '1px solid #CCDFE9'}}
        >
            <Typography sx={{minWidth: 100}} style={{marginLeft: '15px', position: 'relative', left: '1px', color: '#e59500'}}><AppsIcon style={{position: 'relative', top: '5px', left: '-5px'}}/>Discover</Typography>
            <RestaurantIcon style={{color: '#ced3dc'}}/>
            <StarIcon style={{color: '#ced3dc'}}/>
            <PersonIcon style={{color: '#ced3dc'}}/>
        </Box>

    </div>
  )
}

export default Footer