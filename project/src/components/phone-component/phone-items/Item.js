import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


const Items = () => {






/*tabs changes*/
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }



  return (
    <>
    <Box sx={{width: '400px', bgcolor: 'background.transparent', position: 'relative', top: '120px', left: '-20px'}}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} centered textColor='#000' TabIndicatorProps={{
            style: {
                backgroundColor: '#ced3dc',
            }
        }}
        sx={{
            "& button:focus": {color: '#e59500'}
            
        }}>
            <Tab label='All' value='1'/>
            <Tab label='Burgers' value='2'/>
            <Tab label='Pizza' value='3'/>
        </Tabs>
        <TabPanel value='1'>Item one</TabPanel>
        <TabPanel value='2'>Item one</TabPanel>
        <TabPanel value='3'>Item one</TabPanel>
    </TabContext>
        
    </Box>
    
    </>
  )
}

export default Items