import React,{useState, useEffect} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './cart.css'

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';


const Cart = ({items, shop}) => {

  const [cartItems, setCartItems] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)


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
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const total = itemPrice.reduce(reducer)
        if(total){
          setTotalPrice(total)
        }
      }
  }




  const style = {
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
  };
  return (
    <>
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
        <Box sx={style}>
          <h2 id="modal-modal-title">Your Cart from {shop}</h2>
          <div className='cart-items'>
          {items2.length > 0 ? items2.map(item => {
            return (
                <div className='item2'>
                  <p className='item-name'>{item.name}</p>
                  <p className='item-price'>{item.price  + 'eur'}</p>
                </div>
            )
          }): 'e'}
          </div>
          <button className='cart-button' onClick={() => setCartOpen(false)}>Order - {totalPrice} eur</button>
        </Box>
      </Fade>
    </Modal> : null}
    </>
  )
}

export default Cart