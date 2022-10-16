import React from 'react'
import './index.css'
import Footer from './phone-footer-sidebar/Footer-sidebar'
import Header from './phone-header/Header'
import Items from './phone-items/Item'
import Nav from './phone-nav-bar/Nav-sidebar'
import Search from './phone-search/Search'
const PhoneBackground = () => {
  return (
    <>
     <div className='phone-component'>
        <Nav/>
        <Header userName={'Marceli'}/>
        <Search/>
        <Items/>
        <Footer/>

     </div>
    </>
  )
}

export default PhoneBackground