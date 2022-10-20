import { Typography } from '@mui/material'
import React,{useState} from 'react'
import { Oval } from 'react-loader-spinner'


const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })



const Payment = ({data,checkOutDone}) => {


  const [checkOut, setCheckOut] = useState(false)
  const [payment, setPayment] = useState(false)



  const shop = data[0].shop
  const items = data[0].items2


  const checkingOut = () => {
    setPayment(true)
    setTimeout(() => {
      checkOutDone(false)
      console.log('done')
    },5000)
  }


  return (
    <>
    {checkOut === false &&
    <div className="payment" style={{display: 'flex', flexDirection: 'column'}}>
    <div className='payment-header'>
    <Typography variant='p' style={{fontWeight: 'bold', textAlign: 'center', position: 'relative', left: '140px', top: '25px'}}>pooperEats</Typography>
      <p className='payment-header-text' style={{textAlign: 'center', position: 'relative', top: '35px'}}>You're ordering from <span style={{fontWeight: 'bold'}}>{shop}</span></p>
    </div>
    <div className='payment-body'>
      <div className='payment-body-header' style={{textAlign: 'center', marginTop: '60px'}}>
        <p className='payment-body-header-text'>Order Summary</p>
        </div>
        <div className='payment-body-content' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
          <ul style={{height: '300px', overflowY: 'scroll'}}>
            {items.map((item, index) => {
              return (
                <li key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                  <p className='payment-body-content-text' style={{fontWeight: 'bold'}}>{item.name} x {eur.format(item.price)}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='payment-body-footer' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
        <button className='cart-button1' onClick={() => setCheckOut(true)}>Checkout - {eur.format(data[0].totalPrice)}</button> 
        </div>       
    </div>
  </div>
}{checkOut === true && payment === false &&
  <div className='payment-checkout'>
    <button className='cart-button1' onClick={() => checkingOut()} style={{margin: '240px 60px'}}>Pay - {eur.format(data[0].totalPrice)}</button> 
  </div>}{payment === true &&
  <div className='payment-checkout' style={{margin: '0 120px', display: 'flex', flexDirection: 'column'}}>
      <Oval
      height={80}
      width={80}
      color="#e59500" 
      wrapperClass=""
      wrapperStyle={{position: 'relative',  top: '240px'}}
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="fc9e4f"
      strokeWidth={2}
      strokeWidthSecondary={2}
      />
      <p style={{position: 'relative', top: '240px', textAlign: 'center',left: '-10px'}}>Processing payment...</p>
  </div>}
    </>
  )
}

export default Payment