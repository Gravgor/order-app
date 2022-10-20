import React,{useState, useMemo} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './cart.css'

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';
import Payment from '../order-checkout/payment';
import { motion } from 'framer-motion'


const Cart = ({items, shop, order, setPayment}) => {

  const [cartOpen, setCartOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const [userOrdered, setUserOrdered] = useState(false)

  const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })


  const items2 = []


  if(items){
    items.map(item => {
      return items2.push(item)
    })
  }

  const handleCartOpen = () => {
    setCartOpen(true)
    if(items2.length > 0){
      const itemPrice = items2.map(item => {
       return item.price
      })
      itemPrice.shift()
      if(itemPrice.length > 0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const total = itemPrice.reduce(reducer)
        if(total){
          setTotalPrice(total)
        }
      }
  }
}

  const handleCartClose = () => {
    setCartOpen(false)
    order(true)
    setPayment([{shop, items2, totalPrice}])
  }

  useMemo(() => {
    if(userOrdered === true){
      setUserOrdered(false)
    }
  },[userOrdered])



  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1}}
    >
      <ShoppingCartIcon id='cart' style={{backgroundColor: '#e59500', borderRadius: '50%', width: '30px', height: '30px', position: 'relative',top: '10px', left: '250px'}} onClick={() => handleCartOpen()}></ShoppingCartIcon>

{cartOpen ? <Modal
open={cartOpen}
onClose={() => setCartOpen(false)}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
  <Fade in={cartOpen}>
    <Box sx={{
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 280,
      bgcolor: '#FFF',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius: 15,
    }}>
         <h2 id="modal-modal-title">Your Cart from {shop}</h2>
         <div className='cart-items'>
         {items2.length > 0 ? items2.map(item => {
           return (
               <div className='item2'>
                 <p className='item-name'>{item.name}</p>
                 <p className='item-price' style={{marginLeft: '15px'}}>{eur.format(item.price)}</p>
               </div>
           )
         }): <p style={{color: 'gray'}}>No items in cart</p>}
         
         </div>
         <button className='cart-button' style={{marginTop: '15px'}} onClick={() => handleCartClose()}>Order - {eur.format(totalPrice)}</button>
         {userOrdered ? <Payment paymentPrice={totalPrice} shopName={shop} orderList={items2}/> : ''}
    </Box>
  </Fade>
</Modal> : null}
    </motion.div>
  )
}

export default Cart