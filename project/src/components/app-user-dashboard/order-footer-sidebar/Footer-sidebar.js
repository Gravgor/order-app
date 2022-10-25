import React,{useCallback, useState} from 'react'

import {Box, Typography} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';

const Footer = ({page}) => {
  const [pages, setPages] = useState({
    main: true,
    restaurant: false,
    user: false,
    star: false
  })

  ///TODO: page name change color when clicked

  const changePage = useCallback((page1,pages) => {
    switch(page1){
      case 'main':
        setPages({
          main: true,
          restaurant: false,
          user: false,
          star: false
        })
        page(0)
        break;
      case 'restaurant':
        setPages({
          main: false,
          restaurant: true,
          user: false,
          star: false
        })
        page(1)
        break;
      case 'user':
        setPages({
          main: false,
          restaurant: false,
          user: true,
          star: false
        })
        page(3)
        break;
      case 'star':
        setPages({
          main: false,
          restaurant: false,
          user: false,
          star: true
        })
        page(2)
        break;
      default:
        setPages({
          main: true,
          restaurant: false,
          user: false,
          star: false
        })
        break;
    }
  },[page])

  
 


  return (
    <div style={{position: 'relative', top: '73px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: '#fff', height: '50px', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', gap: '40px', borderLeft: '1px solid #CCDFE9', borderRight: '1px solid #CCDFE9', borderBottom: '1px solid #CCDFE9'}}
        >
            <Typography onClick={() => changePage('main')} sx={{minWidth: 100}} style={ pages.main ? {marginLeft: '15px', position: 'relative', left: '1px', color: '#e59500'} : {marginLeft: '15px', position: 'relative', left: '1px', color: '#ced3dc'}}><AppsIcon style={ pages.main ? {position: 'relative', top: '5px', left: '-5px', color: '#e59500'} : {position: 'relative', top: '5px', left: '-5px', color: '#ced3dc'}}/>Discover</Typography>
            <RestaurantIcon onClick={() => changePage('restaurant')} style={pages.restaurant ? {color: '#e59500'} : {color: '#ced3dc'}}/>
            <StarIcon onClick={() => changePage('star')} style={pages.star ? {color: '#e59500'} : {color: '#ced3dc'}}/>
            <PersonIcon onClick={() => changePage('user')} style={pages.user ? {color: '#e59500'} : {color: '#ced3dc'}}/>
        </Box>

    </div>
  )
}

export default Footer