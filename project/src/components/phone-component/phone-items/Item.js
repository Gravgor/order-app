import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Items = () => {






/*tabs changes*/
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }



  return (
    <>
    <Box sx={{width: '400px', bgcolor: 'background.transparent', position: 'relative', top: '120px', left: '-20px'}}>
        <Tabs value={value} onChange={handleChange} centered textColor='#000' TabIndicatorProps={{
            style: {
                backgroundColor: '#ced3dc',
            }
        }}
        sx={{
            "& button:focus": {color: '#e59500'}
            
        }}>
            <Tab label='All'/>
            <Tab label='Burgers'/>
            <Tab label='Pizza'/>
        </Tabs>
    </Box>
    
    </>
  )
}

export default Items