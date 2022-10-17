import React from 'react'
import './index.css'
import { ItemsContent } from './items/item'
import Footer from './order-footer-sidebar/Footer-sidebar'
import Header from './order-header/Header'
import Items from './order-items/Item'
import Nav from './order-nav-bar/Nav-sidebar'









const OrderApp = () => {
  return (
    <>
     <div className='phone-component'>
        <Nav/>
        <Header userName={'Marceli'}/>
        <Items itemTable={ItemsContent}/>
        <Footer/>

     </div>
    </>
  )
}

export default OrderApp