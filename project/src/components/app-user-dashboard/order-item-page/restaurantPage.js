import React,{useEffect, useState, useCallback} from 'react'


import { Box, Tab, Tabs } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


import './restaurantPage.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Products } from './restaurant-page-data/data';
import DishComponent from './dishComponent';
import Cart from '../order-cart/cart';








const RestaurantPage = ({data,emptyArray, userStateChoose}) => {



  const shopID = data[0].id
  const shopCategory = data[0].categoryDisplay
  const newArray = [Products]
  const [value, setValue] = useState(0)
  
  const [shopCategories, setShopCategories] = useState([])
  const [shopCategoriesBoolean, setShopCategoriesBoolean] = useState(false)



  const [shopProducts, setShopProducts] = useState([])
  const [shopProductBoolean, setshopProductBoolean] = useState(false)

  const [userChoose, setUserChoose] = useState([])


  /* user choosed item inside restaurant page */

  const [userItem, setItem] = useState([])


 







 useEffect(() => {
    if(value && shopProducts){
      const filtered = shopProducts.filter(item => item.categoryID === value)
      setUserChoose(() => filtered)
    }else if(value === 0 && shopProducts){
      const filtered = shopProducts.filter(item => item.categoryID === value)
      setUserChoose(() => filtered)
    }
  }, [value, shopProducts])



  const filterProducts = (id, category) => {
   for(let i = 0; i < newArray.length; i++){
       const array = newArray[i].Array
        for(let j = 0; j < array.length; j++){
            if(array[j].id === id && array[j].categoryDisplay === category){
                if(shopCategoriesBoolean === false && shopProductBoolean === false){
                  setShopCategoriesBoolean(true)
                  setShopCategories(array[j].categoriesInside)
                  setShopProducts(array[j].products)
                  setshopProductBoolean(true)
                }
            }
        }
   }
  }





  if(shopID && shopCategory){
    filterProducts(shopID,shopCategory)
  }

  const goBackToMainPage = (e) => {
    emptyArray([])
    setShopCategories([])
    setShopProducts([])
    setShopCategoriesBoolean(false)
    setshopProductBoolean(false)
    userStateChoose(false)
  }



  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '50px',
    }}>
      <ArrowBackIcon id='arrowbackrest' style={{backgroundColor: '#e59500', borderRadius: '50%', width: '30px', height: '30px', position: 'relative', left:'20px', top: '10px'}} onClick={(e) => goBackToMainPage(e)}/>
      {userItem.length > 0 ? <Cart items={userItem}/> : 'e'}


    </Box>
    <Box
    sx={{
      position: 'relative',
      top: '50px',
      width: '100%',
      height: '486px',
    }}>
      <div className='header' style={{display: 'flex', flexDirection: 'row', marginTop: '-40px'}}>
       <div className='restaurant-page-header'>
         <p className='name'>{data[0].name}</p>
         <p style={{marginTop: '-15px'}}>{data[0].categoryDisplay}</p>
         <p style={{marginTop: '-15px'}}>Open to 8:00 PM</p>
      </div>
      <div className='restaurant-page-left-header'>
        <p style={{fontSize: '12px',marginTop: '60px'}}>Delivery time: {data[0].deliveryTime}</p>
      </div>
      </div>
      <div className='restaurant-page-body'>
        <div className='restaurant-page-body-left' style={{marginLeft: '15px'}}>
          <div className='restaurant-page-body-left-top'>
            <p style={{fontSize: '25px', fontWeight: 'bold'}}>Menu</p>
            <TabContext value={value}>
            <Tabs
            oreintation='vertical'
            variant='scrollable'
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            aria-label='Vertical tabs'
            textColor='#000' TabIndicatorProps={{
              style: {
                  backgroundColor: '#ced3dc',
              }
          }}
          sx={{
              "& button:focus": {color: '#e59500'},
              borderRight: 1, 
              borderColor: 'divider'
              
          }}
            >
              {shopCategories.map((item, index) => {
                return(
                  <Tab label={item.name}/>
                )
              })}
            </Tabs>
            <TabPanel value={0} index={0}>
            {userChoose.map((item, index) => {
              return(
                <DishComponent name={item.name} price={item.price} description={item.description} id={item.id} img={item.img} clickedData={setItem}/>
              )
              })}
            </TabPanel>
            <TabPanel value={1} index={1}>
            {userChoose.map((item, index) => {
              return(
                <DishComponent name={item.name} price={item.price} description={item.description} id={item.id} img={item.img} clickedData={setItem}/>
              )
              })}
            </TabPanel>
            <TabPanel value={2} index={2}>
            {userChoose.map((item, index) => {
              return(
                <DishComponent name={item.name} price={item.price} description={item.description} id={item.id} img={item.img} clickedData={setItem}/>
              )
              })}
            </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </Box>
    </>
  )
}

export default RestaurantPage