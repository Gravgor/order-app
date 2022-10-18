import React,{useState} from 'react'
import './index.css'
import { ItemsContent } from './app-user-dashboard/items/item'
import Footer from './app-user-dashboard/order-footer-sidebar/Footer-sidebar'
import Header from './app-user-dashboard/order-header/Header'
import Items from './app-user-dashboard/order-items/Item'
import Nav from './app-user-dashboard/order-nav-bar/Nav-sidebar'
import LoginUI from './app-user-login/user-login-ui/loginUI'

/* user UI Login */









const OrderApp = ({user, location}) => {

  const [userLogged, setUserLogged] = useState(false)

  return (
    <>
     <div className='app-component'>
      {userLogged === true &&
      <>
        <Nav/>
        <Header userName={'Marceli'}/>
        <Items itemTable={ItemsContent}/>
        <Footer/>
      </>
      }{userLogged === false &&
      <LoginUI/>}
     </div>
    </>
  )
}

export default OrderApp