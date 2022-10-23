import React,{useState} from 'react'
import './index.css'
import { ItemsContent } from './app-user-dashboard/items/item'
import Footer from './app-user-dashboard/order-footer-sidebar/Footer-sidebar'
import Header from './app-user-dashboard/order-header/Header'
import Items from './app-user-dashboard/order-items/Item'
import Nav from './app-user-dashboard/order-nav-bar/Nav-sidebar'
import LoginUI from './app-user-system/app-user-register/loginUI'
import RestaurantPage from './app-user-dashboard/order-item-page/restaurantPage'
import Payment from './app-user-dashboard/order-checkout/payment'

import { AnimatePresence, motion } from 'framer-motion'
import UserWelcome from './app-user-system/app-user-welcome/userWelcome'




const OrderApp = () => {



  const [userLogged, setUserLogged] = useState(false)
  const [userItemChoose, setUserItemChoose] = useState([])
  const [userChoosed,setUserChoosed] = useState(false)
  const [userOrdered, setUserOrdered] = useState(false)
  const [user, setUser] = useState('')
  const [location, setLocation] = useState('')

  const [userOption, setUserOption] = useState(0)

  /*  order info */
  const [userOrderInfo, setUserOrderInfo] = useState([{}])

  if(userLogged === false){
  if(user.length > 0 && user.length < 16){
    if(userLogged === false){
      setUserLogged(true)
    }else{
      console.log('')
    }
  }
  }
  if(userItemChoose.length > 0 && userChoosed === false){
    setUserChoosed(true)
  }


  


  return (
    <>
     <div className='app-component'>
      {userLogged === true && userOrdered === false &&
      <>
      <AnimatePresence>
        {userChoosed === false &&<Nav location={location}/>}
        {userChoosed === false && <Header userName={user}/>}
        {userChoosed === false && <Items itemTable={ItemsContent} userChoose={setUserItemChoose}/>}
        {userChoosed === true && <RestaurantPage data={userItemChoose} emptyArray={setUserItemChoose} userStateChoose={setUserChoosed} setUserOrdered={setUserOrdered} setUserOrderInfo={setUserOrderInfo}/>}
        <Footer/>
        </AnimatePresence>
      </>
      }{userLogged === false && userOption === 0 && <UserWelcome userOption={setUserOption}/>}
      {userLogged === false && userOption === 2 && <LoginUI user={setUser} location={setLocation}/>}
      {userLogged === false && userOption === 1 && <p>login here</p>}
      {userOrdered === true && userLogged === true && <Payment data={userOrderInfo} checkOutDone={setUserOrdered}/>}
     </div>
    </>
  )
}


export default OrderApp