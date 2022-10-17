import React from 'react'
import './index.css'
import { ItemsContent } from './app-user-dashboard/items/item'
import Footer from './app-user-dashboard/order-footer-sidebar/Footer-sidebar'
import Header from './app-user-dashboard/order-header/Header'
import Items from './app-user-dashboard/order-items/Item'
import Nav from './app-user-dashboard/order-nav-bar/Nav-sidebar'









const OrderApp = () => {
  return (
    <>
     <div className='app-component'>
        <Nav/>
        <Header userName={'Marceli'}/>
        <Items itemTable={ItemsContent}/>
        <Footer/>

     </div>
    </>
  )
}

export default OrderApp