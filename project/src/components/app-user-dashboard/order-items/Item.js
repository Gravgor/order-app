import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


import {OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ItemsComponent from './ItemsComponent';
import Loader, { LoaderSearch } from '../order-search/Loader';




const Items = ({itemTable}) => {


/*tabs changes*/
  const [value, setValue] = useState('1')

  const [valueSearch,setValueSearch] = useState({
    search: 'Search...',
})

const [search, setSearch] = useState({
  allItems: false,
  burgerItems: false,
  pizzaItems: false,
})

const handleChangeSearch = (prop) => (event) => {
  setValueSearch({...valueSearch, [prop]: event.target.value});
}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const italianItems = itemTable.filter(item => item.category === 'italian')
  const turkishItems = itemTable.filter(item => item.category === 'turkish')


  const filteredItemsAll = itemTable.map(item =>  <ItemsComponent id={item.id} name={item.name} location={item.location} premium={item.premium} img={item.img}/>)
  const filteredItalian = italianItems.map(item => <ItemsComponent id={item.id} name={item.name} location={item.location} premium={item.premium} img={item.img}/>)
  const filteredTurkish = turkishItems.map(item => <ItemsComponent id={item.id} name={item.name} location={item.location} premium={item.premium} img={item.img}/>)



  const searchFunction = (e) => {
    if (e.key === 'Enter'){
      if(value === '1'){
        setSearch({...search, 'allItems': true})
        if(search.allItems === true){
          setTimeout(() => {
            setSearch({...search, 'allItems': false})
          }, 5000)
        }
      }else if(value === '2' ){
        setSearch({...search, 'burgerItems': true})
        if(search.burgerItems === true){
          setTimeout(() => {
            setSearch({...search, 'burgerItems': false})
          }, 5000)
        }
      }else if(value === '3'){
        setSearch({...search, 'pizzaItems': true})
        if(search.pizzaItems === true){
          setTimeout(() => {
            setSearch({...search, 'pizzaItems': false})
          }, 5000)
        }
      }
    }
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
        onChange={handleChangeSearch('search')}
        onKeyDownCapture={(e) => searchFunction(e)}
        value={valueSearch.search}
        style={{position: 'realtive', top:'100px', height: '40px'}}
        inputProps={{
            'aria-label': 'Search..',
        }}
        >
        </OutlinedInput>
    </Box>
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
            <Tab label='Italian' value='2'/>
            <Tab label='Turkish' value='3'/>
        </Tabs>
        <TabPanel value='1'>
            <div className='content-grid'>
              {search.allItems === false &&
              filteredItemsAll
              }
              {itemTable.length === 0  &&
               <>
               <Loader/>
               </>
               }
               {search.allItems === true &&
               <LoaderSearch searchQuery={valueSearch.search} searchedItems={filteredItemsAll}  />}
            </div>
        </TabPanel>
        <TabPanel value='2'>
            <div className='content-grid'>
               {search.burgerItems === false &&
               filteredItalian
               }
               {italianItems.length === 0  &&
               <>
               <Loader/>
               </>
               }
               {search.burgerItems === true &&
               <LoaderSearch searchQuery={valueSearch.search} searchedItems={filteredItalian}/>}
            </div>
        </TabPanel>
        <TabPanel value='3'>
        <div className='content-grid'>
             {search.pizzaItems === false &&
             filteredTurkish
             }
             {turkishItems.length === 0  &&
               <>
               <Loader/>
               </>
               }
               {search.pizzaItems === true &&
               <LoaderSearch searchQuery={valueSearch.search} searchedItems={filteredTurkish}/>}
        </div>
        </TabPanel>
    </TabContext>
        
    </Box>
    
    </>
  )
}

export default Items