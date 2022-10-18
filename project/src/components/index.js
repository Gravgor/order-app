import React,{ useState} from 'react'
import './index.css'
import { ItemsContent } from './app-user-dashboard/items/item'
import Footer from './app-user-dashboard/order-footer-sidebar/Footer-sidebar'
import Header from './app-user-dashboard/order-header/Header'
import Items from './app-user-dashboard/order-items/Item'
import Nav from './app-user-dashboard/order-nav-bar/Nav-sidebar'
import LoginUI from './app-user-login/user-login-ui/loginUI'




const OrderApp = () => {



  const [userLogged, setUserLogged] = useState(false)
  const [user, setUser] = useState('')
  const [location, setLocation] = useState('')

  if(user.length > 0 && user.length < 16){
    if(userLogged === false){
      setUserLogged(true)
    }else{
      console.log('Error')
    }
  }



  return (
    <>
     <div className='app-component'>
      {userLogged === true &&
      <>
        <Nav location={location}/>
        <Header userName={user}/>
        <Items itemTable={ItemsContent}/>
        <Footer/>
      </>
      }{userLogged === false &&
      <LoginUI username={setUser} location={setLocation}/>}
     </div>
    </>
  )
}


export default OrderApp
