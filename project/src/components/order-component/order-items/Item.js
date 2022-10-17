import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


import { Grid, Item } from '@mui/material';
import ItemsComponent from './ItemsComponent';



const Items = ({itemTable}) => {


/*tabs changes*/
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const burgerItems = itemTable.filter(item => item.category === 'burger')
  const pizzaItems = itemTable.filter(item => item.category === 'pizza')




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
        <TabPanel value='1'>
            <div className='content-grid'>
            {itemTable.map(item => (
                    <ItemsComponent name={item.name} deliver={item.deliver} premium={item.premium} img={item.img}/>
                   ))}
            </div>
        </TabPanel>
        <TabPanel value='2'>
            <div className='content-grid'>
               {burgerItems.map(item => (
                 <ItemsComponent name={item.name} deliver={item.deliver} premium={item.premium} img={item.img}/>    
               ))}
            </div>
        </TabPanel>
        <TabPanel value='3'>
        <div className='content-grid'>
        {pizzaItems.map(item => (
                <ItemsComponent name={item.name} deliver={item.deliver} premium={item.premium} img={item.img}/> 
            ))}
        </div>
        </TabPanel>
    </TabContext>
        
    </Box>
    
    </>
  )
}

export default Items