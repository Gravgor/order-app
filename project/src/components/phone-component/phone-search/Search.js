import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Box, InputAdornment, OutlinedInput } from '@mui/material'


const Search = () => {


    const [value,setValue] = useState({
        search: ''
    })

    const handleChange = (prop) => (event) => {
        setValue({...value, [prop]: event.target.value});
    }

  return (
    <>
    <Box sx={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
        <OutlinedInput id='search-input' variant='standard'
        className='search-input'
        endAdornment={
            <InputAdornment position='end'>
                <SearchIcon/>
            </InputAdornment>
        }
        onChange={handleChange('search')}
        value={value.search}
        style={{position: 'realtive', top:'100px', height: '40px'}}
        inputProps={{
            'aria-label': 'Search..',
        }}
        >

        </OutlinedInput>
    </Box>
      
    </>
  )
}

export default Search